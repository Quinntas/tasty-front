'use server';

import {z} from 'zod';
import {signupSchema} from '@/app/signup/_components/signup-schema';
import {Argon2id} from 'oslo/password';
import {cookies} from 'next/headers';
import {sessionTable, userTable} from '@/lib/database/tables';
import {db} from '@/lib/database/connection';
import {sessionCookieName} from "@/lib/auth/validate-session";
import {v4} from "uuid";

export const signUp = async (values: z.infer<typeof signupSchema>) => {
    const sessionPid = v4()

    const hashed_password = await new Argon2id().hash(values.password);

    try {
        const user = await db.insert(userTable).values({
            email: values.email,
            name: values.name,
            password: hashed_password,
            phone: values.phone,
        }).returning();

        await db.insert(sessionTable).values({
            pid: sessionPid,
            userId: user[0].id,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 6), // 6 hours
        });
    } catch (e: any) {
        return {
            success: false,
            error: e?.message,
        };
    }

    cookies().set(sessionCookieName, sessionPid, {});

    return {
        success: true,
    };
};

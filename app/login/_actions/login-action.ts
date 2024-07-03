'use server';

import {z} from 'zod';
import {loginSchema} from '@/app/login/_components/login-schema';
import {eq} from 'drizzle-orm';
import {cookies} from 'next/headers';
import {db} from '@/lib/database/connection';
import {v4} from "uuid";
import {sessionCookieName} from "@/lib/auth/validate-session";
import {sessionTable} from "@/lib/database/tables";

export const login = async (values: z.infer<typeof loginSchema>) => {
    const res = await db.query.userTable.findFirst({
        where: (table) => eq(table.email, values.email),
    });

    if (!res)
        return {
            success: false,
            error: 'User not found',
        };

    const isValidPassword = true;

    if (!isValidPassword)
        return {
            success: false,
            error: 'Incorrect email or password',
        };

    const sessionPid = v4()

    await db.insert(sessionTable).values({
        pid: sessionPid,
        userId: res.id,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 6), // 6 hours
    });

    cookies().set(sessionCookieName, sessionPid, {});

    return {
        success: true,
        error: undefined,
    };
};

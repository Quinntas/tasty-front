import {cookies} from 'next/headers';
import {cache} from 'react';
import {db} from "@/lib/database/connection";
import {sessionTable, userTable} from "@/lib/database/tables";
import {eq} from "drizzle-orm";
import {User} from "@/lib/modules/user/domain/user";

export const sessionCookieName = "login:session:pid";

interface ValidateSessionResponse {
    user: User | null;
}

export const validateSession = cache(async (): Promise<ValidateSessionResponse> => {
    const sessionPid = cookies().get(sessionCookieName)

    if (!sessionPid)
        return {
            user: null,
        };

    const res = await db
        .select({
            user: userTable
        })
        .from(sessionTable)
        .where(eq(sessionTable.pid, sessionPid.value))
        .innerJoin(userTable, eq(sessionTable.userId, userTable.id))

    if (res.length === 0)
        return {
            user: null
        }

    return {
        user: res[0].user,
    };
});

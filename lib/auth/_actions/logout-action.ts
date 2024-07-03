"use server"

import {sessionCookieName, validateSession} from "@/lib/auth/validate-session";
import {cookies} from "next/headers";

export const logoutAction = async () => {
    const {user} = await validateSession()

    if (!user)
        return {
            success: false,
            error: 'Session not found',
        }

    cookies().set(sessionCookieName, "", {})

    return {
        success: true,
        error: undefined,
    }
}
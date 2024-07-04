"use server"

import {resetUserAddressDefault} from "@/lib/modules/userAddress/useCases/resetUserAddressDefault";
import {db} from "@/lib/database/connection";
import {userAddressTable} from "@/lib/database/tables";
import {and, eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

export async function setDefaultUserAddress(userId: number, addressId: number) {
    await resetUserAddressDefault(userId, addressId)

    await db.update(userAddressTable).set({
        isDefault: true
    }).where(and(
        eq(userAddressTable.userId, userId),
        eq(userAddressTable.addressId, addressId)
    ))

    revalidatePath('/')
}
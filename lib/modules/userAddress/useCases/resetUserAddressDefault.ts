import {db} from "@/lib/database/connection";
import {userAddressTable} from "@/lib/database/tables";
import {and, eq} from "drizzle-orm";

export async function resetUserAddressDefault(userId: number, addressId: number) {
    await db.update(userAddressTable).set({
        isDefault: false
    }).where(and(
        eq(userAddressTable.userId, userId),
        eq(userAddressTable.isDefault, true)
    ))
}
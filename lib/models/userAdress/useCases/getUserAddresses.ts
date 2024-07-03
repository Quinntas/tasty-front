import {cache} from "react";
import {db} from "@/lib/database/connection";
import {addressTable, userAddressTable} from "@/lib/database/tables";
import {eq} from "drizzle-orm";

// TODO
export const getUserAddresses = cache(async (userId: number) => {
    return db
        .select({
            addresses: addressTable,
            isDefault: userAddressTable.isDefault
        })
        .from(userAddressTable)
        .where(eq(userAddressTable.userId, userId))
        .innerJoin(addressTable, eq(userAddressTable.addressId, addressTable.id))
});

import {cache} from "react";
import {db} from "@/lib/database/connection";
import {addressTable, userAddressTable} from "@/lib/database/tables";
import {eq} from "drizzle-orm";

export const getUserAddresses = cache(async (userId: number) => {
    const res = await db
        .select({
            address: addressTable,
            isDefault: userAddressTable.isDefault
        })
        .from(userAddressTable)
        .where(eq(userAddressTable.userId, userId))
        .innerJoin(addressTable, eq(userAddressTable.addressId, addressTable.id))

    const defaultIndex = res.findIndex((address) => address.isDefault)
    if (defaultIndex !== -1) {
        const defaultAddress = res.splice(defaultIndex, 1)
        res.unshift(defaultAddress[0])
    }

    return res
});

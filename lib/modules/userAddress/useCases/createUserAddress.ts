"use server"

import {InferInsertModel} from "drizzle-orm";
import {addressTable, userAddressTable} from "@/lib/database/tables";
import {db} from "@/lib/database/connection";

export interface CreateUserAddressDTO {
    userId: number,
    address: InferInsertModel<typeof addressTable>,
    isDefault: boolean
}

export async function createUserAddress(dto: CreateUserAddressDTO) {
    try {
        const [address] = await db.insert(addressTable).values(dto.address).returning()

        await db.insert(userAddressTable).values({
            userId: dto.userId,
            addressId: address.id,
            isDefault: dto.isDefault
        })

        return {
            success: true,
            error: undefined
        }
    } catch (e: any) {
        return {
            success: false,
            error: e.message
        }
    }
}
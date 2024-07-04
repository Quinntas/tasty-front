"use server"

import {InferInsertModel} from "drizzle-orm";
import {addressTable, userAddressTable} from "@/lib/database/tables";
import {db} from "@/lib/database/connection";
import {resetUserAddressDefault} from "@/lib/modules/userAddress/useCases/resetUserAddressDefault";
import {revalidatePath} from "next/cache";

export interface CreateUserAddressDTO {
    userId: number,
    address: InferInsertModel<typeof addressTable>,
    isDefault: boolean
}

export async function createUserAddress(dto: CreateUserAddressDTO) {
    try {
        const [address] = await db.insert(addressTable).values(dto.address).returning()

        await resetUserAddressDefault(dto.userId, address.id)

        await db.insert(userAddressTable).values({
            userId: dto.userId,
            addressId: address.id,
            isDefault: dto.isDefault
        })
         
        revalidatePath("/")

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
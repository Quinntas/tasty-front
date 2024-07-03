import {InferSelectModel} from "drizzle-orm";
import {userAddressTable} from "@/lib/database/tables";

export interface UserAddress extends InferSelectModel<typeof userAddressTable> {
}

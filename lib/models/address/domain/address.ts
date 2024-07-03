import {InferSelectModel} from "drizzle-orm";
import {addressTable} from "@/lib/database/tables";

export interface Address extends InferSelectModel<typeof addressTable> {
}

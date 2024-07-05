import {InferSelectModel} from "drizzle-orm";
import {storeTable} from "@/lib/database/tables";

export interface Store extends InferSelectModel<typeof storeTable> {

}
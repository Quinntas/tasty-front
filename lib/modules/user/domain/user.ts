import {InferSelectModel} from "drizzle-orm";
import {userTable} from "@/lib/database/tables";

export interface User extends InferSelectModel<typeof userTable> {

}



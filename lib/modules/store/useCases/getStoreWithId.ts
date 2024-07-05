import {storeTable} from "@/lib/database/tables";
import {cache} from "react";
import {db} from "@/lib/database/connection";
import {eq} from "drizzle-orm";

export const getStoreWithId = cache(async (id: number)=>{
    return db.select().from(storeTable).where(eq(storeTable.id, id)).execute()
})
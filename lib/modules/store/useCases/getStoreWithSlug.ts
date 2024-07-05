import {db} from "@/lib/database/connection";
import {cache} from "react";
import {storeTable} from "@/lib/database/tables";
import {eq} from "drizzle-orm";

export const getStoreWithSlug = cache(async (slug: string)=>{
    return db.select().from(storeTable).where(eq(storeTable.slug, slug)).execute()
})
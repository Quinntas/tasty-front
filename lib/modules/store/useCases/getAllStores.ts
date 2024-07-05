import {cache} from "react";
import {db} from "@/lib/database/connection";
import {storeTable} from "@/lib/database/tables";

export const getAllStores = cache(async ()=>{
    return db.select({
        name: storeTable.name,
        deliveryFee: storeTable.deliveryFee,
        minDeliveryTime: storeTable.minDeliveryTime,
        maxDeliveryTime: storeTable.maxDeliveryTime,
        banner: storeTable.banner,
        slug: storeTable.slug
    }).from(storeTable).execute()
})
import {Box} from "@/app/_components/box";
import {Button} from "@/components/ui/button";
import {Car, Clock2, MoveRight, Star} from "lucide-react";
import Image from "next/image";
import {getAllStores} from "@/lib/modules/store/useCases/getAllStores";
import Link from "next/link";

export async function BestRated() {
    const stores = await getAllStores()

    return <Box className={"flex flex-col gap-[20px]"}>
        <Box className={"flex items-center justify-between"}>
            <h1 className={"text-xl font-extrabold"}>BEST RATED NEAR YOU</h1>
            <Button size={"icon"} variant={"neutral"}>
                <MoveRight size={20}/>
            </Button>
        </Box>

        <Box className={"flex no-scrollbar p-1 w-full items-center overflow-x-auto gap-[20px]"}>
        {stores.map((store, index)=>{
            return <Box key={`best-rated-${index}`} className={"flex flex-col gap-[10px] shrink-0"}>
                    <Link href={`store/${store.slug}`} className={"overflow-hidden w-[320px] h-[200px] rounded-lg ring-black ring-2 ring-offset-2"}>
                        <Image
                            alt={"Store Banner"}
                            src={store.banner}
                            width={0}
                            height={0}
                            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                            style={{ height: '100%', width: '100%' }}
                        />
                    </Link>

                    <Box className={"flex items-center gap-1 justify-between"}>
                        <span className={"font-extrabold"}>{store.name.toUpperCase()}</span>

                        <Box className={"flex items-center font-light gap-1 text-sm"}>
                            <Star size={20}/>
                            <span>100%</span>
                            <span>(0)</span>
                        </Box>
                    </Box>

                    <Box className={"flex items-center gap-[10px] text-sm"}>
                        <Box className={"flex items-center gap-1"}>
                            <Car size={20}/>
                            <span>{store.deliveryFee}</span>
                        </Box>

                        <Box className={"flex items-center gap-1"}>
                            <Clock2 size={20}/>
                            <span>{store.minDeliveryTime}-{store.maxDeliveryTime} minutes</span>
                        </Box>
                    </Box>
            </Box>
        })}
        </Box>
    </Box>
}
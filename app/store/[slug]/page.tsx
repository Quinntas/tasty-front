import {Box} from "@/app/_components/box";
import {Item} from "@/app/store/[slug]/_components/item";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Car, ChevronRight, Clock2, Star} from "lucide-react";
import {OrderType} from "@/app/store/[slug]/_components/order-type";

export default function Store() {
    return <Box className={"flex flex-col relative"}>
        <Box className={"overflow-hidden w-full h-auto justify-center shrink-0"}>
            <Image
                alt={"Store Banner"}
                src={"https://i.imgur.com/yjuBFft.jpeg"}
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ height: '100%', width: '100%' }}
            />
        </Box>

        <Box className={"p-[10px] h-full sticky -mt-[50px]"}>
            <Box className={"w-full flex flex-col bg-white border h-full rounded-xl items-center justify-center p-[10px]"}>
                <Avatar className={"w-[100px] h-[100px] absolute -top-[40px]"}>
                    <AvatarImage src={"https://i.imgur.com/yjuBFft.jpeg"}/>
                    <AvatarFallback>QE</AvatarFallback>
                </Avatar>

                <Box className={"w-full mt-[50px] gap-[10px] flex flex-col mb-2"}>
                    <Box className={"flex items-center justify-between "}>
                        <Box className={"flex flex-col"}>
                            <h1 className={"text-xl font-bold "}>PIZZA SUPER GOOD</h1>
                            <span>Pizza * 1.6 km </span>
                        </Box>
                        <ChevronRight size={20}/>
                    </Box>

                    <Box className={"flex  items-center justify-between"}>
                        <Box className={"flex items-center gap-1"}>
                            <Star size={20}/>
                            <span>100%</span>
                            <span>(0)</span>
                        </Box>

                        <Box className={"flex items-center gap-1"}>
                            <Clock2 size={20}/>
                            <span>20 - 30 minutes</span>
                        </Box>

                        <Box className={"flex items-center gap-1"}>
                            <Car size={20}/>
                            <span>$ 2.89</span>
                        </Box>
                    </Box>

                   <OrderType/>
                </Box>
            </Box>

            <Box className={"flex flex-col gap-[15px] mt-[20px]"}>
                <span className={"font-bold text-xl mb-[5px]"}>Coca Cola Combo</span>

                <Item/>

                <Item/>
            </Box>

            <Box className={"flex flex-col gap-[15px] mt-[20px]"}>
                <span className={"font-bold text-xl mb-[5px]"}>Coca Cola Combo 2</span>

                <Item/>

                <Item/>
            </Box>
        </Box>
    </Box>
}
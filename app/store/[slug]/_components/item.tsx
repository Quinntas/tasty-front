"use client"

import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Box} from "@/app/_components/box";
import QuantityPicker from "@/components/quantity-picker";
import {useState} from "react";
import {CheckCircle, Circle, Clock2, Star, Zap} from "lucide-react";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";

interface ItemProps {

}

export function Item(props: ItemProps) {
    const [quantity, setQuantity] = useState(1)

    return <Drawer>
        <DrawerTrigger>
            <Box className={"flex items-center justify-between"}>
                <Box className={"flex flex-col text-left gap-[6px]"}>
                    <span className={"font-medium line-clamp-2"}>PIZZA CALABRESA</span>
                    <span className={"line-clamp-2"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec nunc.</span>
                    <span className={"font-medium"}>Serves 2 people</span>
                    <Box className={"flex items-center gap-[10px]"}>
                        <span className={"text-green-600"}>$ 22.22</span>
                        <span className={"text-muted-foreground line-through"}>$ 40.00</span>
                        <Box className={"ml-6 bg-green-100 rounded-full px-2 flex items-center justify-center"}>
                            <span className={"text-sm font-semibold text-green-500"}>50%</span>
                        </Box>
                    </Box>
                </Box>

                <Box className={"overflow-hidden w-[120px] justify-center shrink-0 "}>
                <Image
                        alt={"Store Banner"}
                        src={"https://i.imgur.com/yjuBFft.jpeg"}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ height: '100%', width: '100%' }}
                        className={"rounded-md"}
                    />
                </Box>
            </Box>
        </DrawerTrigger>
        <DrawerContent className={"p-0 flex flex-col gap-[10px] overflow-y-auto no-scrollbar h-fit"}>
                <Box className={"overflow-hidden w-full h-auto flex items-center justify-center shrink-0 mt-[10px] p-1 "}>
                    <Image
                        alt={"Store Banner"}
                        src={"https://i.imgur.com/yjuBFft.jpeg"}
                        width={0}
                        height={0}
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ height: '100%', width: '100%' }}
                        className={"rounded-md"}
                    />
                </Box>

            <Box className={"flex flex-col gap-[20px] p-[10px]"}>
                <Box className={"flex items-center justify-between"}>
                    <h1 className={"text-xl font-extrabold"}>PIZZA CALABRESA</h1>

                    <QuantityPicker quantity={quantity} setQuantity={setQuantity}/>
                </Box>

                <Box className={"flex items-center justify-between font-normal"}>
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
                        <Zap size={20}/>
                        <span>540</span>
                    </Box>
                </Box>

                <Box className={"flex flex-col gap-[10px]"}>
                    <span className={"text-lg font-extrabold"}>DESCRIPTION</span>

                    <span className={"font-normal"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nunc nec nunc.</span>
                </Box>

                <Box className={"flex flex-col gap-[10px]"}>
                    <span className={"text-lg font-extrabold"}>CHOOSE SIZE</span>

                    <Box className={"flex gap-[20px] overflow-x-auto py-1 no-scrollbar"}>
                        <Button variant={"neutral"} className={"flex items-center flex-col gap-[10px] h-auto w-[140px]"}>
                            <CheckCircle size={20}/>
                            <span className={"font-medium"}>Small - $10</span>
                        </Button>

                        <Button variant={"neutral"} className={"flex items-center flex-col gap-[10px] h-auto w-[140px]"}>
                            <Circle size={20}/>
                            <span className={"font-medium"}>Medium - $10</span>
                        </Button>

                        <Button variant={"neutral"} className={"flex items-center flex-col gap-[10px] h-full w-[140px]"}>
                            <Circle size={20}/>
                            <span className={"font-medium"}>Big - $10</span>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </DrawerContent>
    </Drawer>
}
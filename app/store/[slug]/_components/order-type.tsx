"use client"

import {Drawer, DrawerClose, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {Box} from "@/app/_components/box";
import {useState} from "react";
import {Bike, PersonStanding} from "lucide-react";

type orderType = "delivery" | "pickup"

export function OrderType() {
    const [type, setType] = useState<orderType>("delivery")

    return <Drawer>
        <DrawerTrigger asChild>
            <Button>
                {type === "delivery" ? <Box className={"flex gap-[10px] items-center"}>
                    <Bike size={20}/>
                    Delivery
                </Box>:<Box className={"flex gap-[10px] items-center"}>
                    <PersonStanding size={20}/>
                    Pickup
                </Box>}
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <Box className={"p-[10px] flex flex-col gap-[20px] my-[10px]"}>
                <span className={"text-center"}>How do you wanna receive your order?</span>

                <Box className={"flex items-center justify-between gap-[10px] w-full p-1"}>
                    <DrawerClose asChild>
                        <Button
                            onClick={() => setType("delivery")}
                            className={"gap-[10px] w-[45%]"}>
                            <Bike size={20}/>
                            Delivery
                        </Button>
                    </DrawerClose>

                    <DrawerClose asChild>
                    <Button
                        onClick={() => setType("pickup")}
                        className={"gap-[10px] w-[45%]"}>
                        <PersonStanding size={20}/>
                        Pickup
                    </Button>
                    </DrawerClose>
                </Box>
            </Box>
        </DrawerContent>
    </Drawer>
}
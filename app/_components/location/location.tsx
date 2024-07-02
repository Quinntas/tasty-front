"use client"

import {Button} from '@/components/ui/button'
import {ChevronDown, Home, Menu, PlusCircle} from "lucide-react";
import {Box} from "@/app/_components/box";
import {Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Input} from "@/components/ui/input";
import {NewLocationForm} from "@/app/_components/location/new-location-form";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";

interface LocationProps {
}

export function Location(props: LocationProps) {
    return <Sheet>
        <SheetTrigger asChild>
            <Button variant={"link"} className={"gap-1 p-0"}>
                <span className={"text-[16px] font-semibold"}>Av Jose Trajano de Sousa, 525</span>
                <ChevronDown size={20}/>
            </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className={"p-[10px] h-full flex flex-col gap-[15px]"}>
            <SheetTitle>DELIVERY ADDRESS</SheetTitle>

            <Input placeholder={"Street, number"}/>

            <Drawer>
                <DrawerTrigger asChild>
                    <Button className={"flex items-center justify-between h-fit py-3 px-0"} variant={"neutral"}>
                        <Button variant={"link"} className={"flex items-center gap-[15px]"}>
                            <PlusCircle size={20}/>

                            <Box className={"flex gap-1 flex-col text-left text-sm font-normal"}>
                                <span>Use current location</span>
                                <span>Av. Jose Trajano - Santa Ines, Macapa - AP</span>
                            </Box>
                        </Button>
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <NewLocationForm/>
                </DrawerContent>
            </Drawer>

            <Box className={"flex items-center justify-between w-full h-fit py-3 rounded border "}>
                <SheetClose asChild>
                    <Button variant={"link"} className={"flex items-center gap-[15px]"}>
                        <Home size={20}/>

                        <Box className={"flex gap-1 flex-col text-left text-sm font-normal"}>
                            <span>Av. Jose Trajano de Sousa, 525</span>
                            <span>Santa Ines, Macapa - AP</span>
                        </Box>
                    </Button>
                </SheetClose>

                <Button variant={"link"} size={"icon"}>
                    <Menu size={20}/>
                </Button>
            </Box>
        </SheetContent>
    </Sheet>
}
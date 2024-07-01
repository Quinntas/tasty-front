"use client"
import {Button} from '@/components/ui/button'
import {Drawer, DrawerContent, DrawerTrigger,} from '@/components/ui/drawer'
import {MapPin} from "lucide-react";
import {Box} from "@/app/_components/box";
import {Input} from "@/components/ui/input";
import {Checkbox} from "@/components/ui/checkbox";

interface LocationProps {
}

export function Location(props: LocationProps) {
    const a = {
        vehicle: "WHATSAPP",
        data: {
            type: 'SIMPLE',
            phone: '96984112103',
            text: 'Hello World',
            delay: 0,
        }
    }

    console.log(JSON.stringify(a))

    return <Drawer>
        <DrawerTrigger asChild>
            <Button size={"icon"} variant={"link"}>
                <MapPin size={20}/>
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <Box className={"w-full mx-auto font-normal p-[10px]"}>
                <Box className={"bg-orange-400 w-full h-[200px] flex items-center justify-center"}>
                    <span>map here</span>
                </Box>
                <Box>
                    <Box className={"flex flex-col gap-1"}>
                        <span className={"font-semibold text-lg"}>Av. Jose Trajano de Sousa, 525</span>
                        <span>Beirol, Macapa - AP</span>
                    </Box>

                    <Input placeholder={"Number *"} required={true}/>
                    <Checkbox/>
                    <span>Address without number</span>

                    <Input placeholder={"Complement *"} required={true}/>
                    <Checkbox/>
                    <span>Address without complement</span>


                    <Input placeholder={"Reference point (optional)"} required={false}/>
                </Box>
            </Box>
        </DrawerContent>
    </Drawer>
}
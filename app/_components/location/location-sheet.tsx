"use client"

import {Button} from '@/components/ui/button'
import {ChevronDown, Home, Menu} from "lucide-react";
import {Box} from "@/app/_components/box";
import {Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Input} from "@/components/ui/input";
import {Address} from "@/lib/modules/address/domain/address";
import {NewLocationDrawer} from "@/app/_components/location/new-location-drawer";
import {useState} from "react";

interface LocationSheetProps {
    defaultLocationIndex: number;
    userId?: number
    locations: {
        isDefault: boolean;
        address: Address
    }[]
}

export function LocationSheet(props: LocationSheetProps) {
    const [open, setOpen] = useState<boolean>(false)

    return <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant={"link"} className={"gap-1 p-0"}>
                {props.defaultLocationIndex !== -1 ?
                    <span
                        className={"text-[16px] font-semibold"}>{props.locations[props.defaultLocationIndex].address.street}, {props.locations[props.defaultLocationIndex].address.number}</span>
                    : <span className={"text-[16px] font-semibold"}>Add delivery address</span>}
                <ChevronDown size={20}/>
            </Button>
        </SheetTrigger>
        <SheetContent side={"bottom"} className={"p-[10px] h-full flex flex-col gap-[15px]"}>
            <SheetTitle>DELIVERY ADDRESS</SheetTitle>

            <Input placeholder={"Street, number"}/>

            <NewLocationDrawer userId={props.userId} closeSheet={() => setOpen(false)}/>

            {props.locations.map((location, index) => {
                return <Box key={`location-${index}`}
                            className={"flex items-center justify-between w-full h-fit py-3 rounded border "}>
                    <SheetClose asChild>
                        <Button variant={"link"} className={"flex items-center gap-[15px]"}>
                            <Home size={20}/>

                            <Box className={"flex gap-1 flex-col text-left text-sm font-normal"}>
                                <span>{location.address.street}, {location.address.number}</span>
                                <span>{location.address.neighborhood}, {location.address.city} - {location.address.state}</span>
                            </Box>
                        </Button>
                    </SheetClose>

                    <Button variant={"link"} size={"icon"}>
                        <Menu size={20}/>
                    </Button>
                </Box>
            })}
        </SheetContent>
    </Sheet>
}
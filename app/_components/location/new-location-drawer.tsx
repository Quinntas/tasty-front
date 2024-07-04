import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {Button} from "@/components/ui/button";
import {PlusCircle} from "lucide-react";
import {Box} from "@/app/_components/box";
import {NewLocationForm} from "@/app/_components/location/new-location-form";
import {useState} from "react";

interface NewLocationDrawerProps {
    userId?: number
    closeSheet: () => void
}

export function NewLocationDrawer(props: NewLocationDrawerProps) {
    const [open, setOpen] = useState<boolean>(false)

    return <Drawer open={open} onOpenChange={setOpen}>
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
            <NewLocationForm userId={props.userId} closeDrawer={() => {
                setOpen(false)
                props.closeSheet()
            }}/>
        </DrawerContent>
    </Drawer>
}
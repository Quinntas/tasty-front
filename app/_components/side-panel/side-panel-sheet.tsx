"use client"

import {
    Bell,
    ChevronRight,
    CreditCard,
    FileText,
    HandHeart,
    HelpCircle,
    MapPin,
    Settings,
    Settings2,
    ShieldMinus,
    Ticket
} from "lucide-react";
import {Box} from "@/app/_components/box";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";
import {User} from "@/lib/modules/user/domain/user";
import {getNameInitials} from "@/lib/modules/user/utils/userUtils";

interface SidePanelSheetProps {
    user: User | null
}

export function SidePanelSheet(props: SidePanelSheetProps) {
    return <Sheet>
        <SheetTrigger>
            <Settings2 size={20}/>
        </SheetTrigger>
        <SheetContent
            className={"w-[100%] sm:w-[500px] p-0 sm:max-w-screen h-full "}>
            <Box className={"flex flex-col mt-4 p-[20px] no-scrollbar w-full h-full"}>
                {props.user ? <Box className={"flex gap-[20px] items-center"}>
                    <Avatar className={"w-[50px] h-[50px] "}>
                        <AvatarImage src={props.user.avatar}/>
                        <AvatarFallback>{getNameInitials(props.user.name)}</AvatarFallback>
                    </Avatar>

                    <span className={"text-xl font-medium"}>{props.user.name}</span>
                </Box> : <Link href={"/login"} className={"text-xl font-medium"}>Login</Link>}

                <Box
                    className={"flex flex-col overflow-y-auto no-scrollbar w-full gap-[10px] mt-8 divide-y-[1px] divide-muted-foreground divide-opacity-5"}>
                    <SidePanelSection
                        isMuted={false}
                        name={"Notifications"}
                        description={"My notifications and alerts"}
                        href={"#"}>
                        <Bell size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={false}
                        name={"Payments"}
                        description={"My payment methods and balance"}
                        href={"#"}>
                        <CreditCard size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={false}
                        name={"Coupons"}
                        description={"Check out the latest coupons"}
                        href={"#"}>
                        <Ticket size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={false}
                        name={"Addresses"}
                        description={"My saved addresses"}
                        href={"#"}>
                        <MapPin size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={false}
                        name={"Account data"}
                        description={"Change your account settings"}
                        href={"#"}>
                        <FileText size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={false}
                        name={"Donations"}
                        description={"Donate to a good cause"}
                        href={"#"}>
                        <HandHeart size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={true}
                        name={"Help"}
                        href={"#"}>
                        <HelpCircle size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={true}
                        name={"Preferences"}
                        href={"#"}>
                        <Settings size={25}/>
                    </SidePanelSection>

                    <SidePanelSection
                        isMuted={true}
                        name={"Security"}
                        href={"#"}>
                        <ShieldMinus size={25}/>
                    </SidePanelSection>
                </Box>
            </Box>
        </SheetContent>
    </Sheet>
}

interface SidePanelSectionProps {
    name: string
    description?: string
    href: string
    className?: string
    children?: React.ReactNode
    isMuted: boolean
}

function SidePanelSection(props: SidePanelSectionProps) {
    return <Link href={props.href}
                 className={cn("flex py-3 items-center justify-between w-full gap-[10px] text-lg font-medium",
                     props.isMuted ? "text-muted-foreground" : undefined,
                     props.className
                 )}>
        <Box className={"flex items-center gap-[20px]"}>
            {props.children}
            <Box className={"flex flex-col gap-1"}>
                <span>{props.name}</span>
                {props.description && <span className={"text-sm"}>{props.description}</span>}
            </Box>
        </Box>
        <ChevronRight size={20}/>
    </Link>
}
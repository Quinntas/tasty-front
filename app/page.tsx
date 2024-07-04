import {Box} from "@/app/_components/box";
import {Car, Clock2, MoveRight, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {PageBox} from "@/app/_components/page-box";
import Image from "next/image";
import {Filters} from "@/app/_components/filters/filters";
import {SidePanel} from "@/app/_components/side-panel/side-panel";
import {Location} from "@/app/_components/location/location";
import {Suspense} from "react";

export default async function Home() {
    return <>
        <PageBox>
            <Box className={"flex items-center justify-between gap-1"}>
                <Location/>
                <SidePanel/>
            </Box>

            <Suspense>
                <Filters/>
            </Suspense>

            <Box className={"flex flex-col gap-[20px]"}>
                <Box className={"flex items-center justify-between"}>
                    <h1 className={"text-xl font-extrabold"}>BEST RATED NEAR YOU</h1>
                    <Button size={"icon"} variant={"neutral"}>
                        <MoveRight size={20}/>
                    </Button>
                </Box>

                <Box className={"flex no-scrollbar p-1 w-full items-center overflow-x-auto gap-[20px]"}>
                    <Box className={"flex flex-col gap-[10px] shrink-0"}>
                        <Image
                            alt={"Restaurant"}
                            src={"https://i.imgur.com/VAJotmg.jpeg"}
                            width={320}
                            height={200}
                            className={"rounded-lg  ring-black ring-2 ring-offset-2"}
                        />

                        <Box className={"flex items-center gap-1 justify-between"}>
                            <span className={"font-extrabold"}>SUSHI MANIA</span>

                            <Box className={"flex items-center font-light gap-1 text-sm"}>
                                <Star size={20}/>
                                <span>98%</span>
                                <span>(551)</span>
                            </Box>
                        </Box>

                        <Box className={"flex items-center gap-[10px] text-sm"}>
                            <Box className={"flex items-center gap-1"}>
                                <Car size={20}/>
                                <span>$4.99</span>
                            </Box>

                            <Box className={"flex items-center gap-1"}>
                                <Clock2 size={20}/>
                                <span>20-30 minutes</span>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </PageBox>
    </>
}

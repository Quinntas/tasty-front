import {Box} from "@/app/_components/box";
import {Car, Clock2, MapPin, MoveRight, Pizza, Settings2, Star} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {PageBox} from "@/app/_components/page-box";
import Image from "next/image";

export default function Home() {
    return <>
        <PageBox>
            <Box className={"flex items-center justify-between gap-1"}>
                <Button size={"icon"} variant={"link"}>
                    <MapPin size={20}/>
                </Button>

                <span className={"text-md font-semibold"}>Av Jose Trajano de Sousa, 525</span>

                <Button size={"icon"}>
                    <Settings2 size={20}/>
                </Button>
            </Box>

            <Input
                placeholder={"Place, Food or Brand"}
            />

            <Box
                className={"flex items-center gap-[25px] w-full py-1 overflow-x-auto no-scrollbar overflow-y-none"}>
                <Button size={"icon"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
                <Button size={"icon"} variant={"neutral"}>
                    <Pizza size={20}/>
                </Button>
            </Box>

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

                            <Box className={"flex items-center gap-1 text-sm"}>
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

                            <Box className={"flex items-center gap-1 text-sm"}>
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

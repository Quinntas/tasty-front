import {Box} from "@/app/_components/box";
import {PageBox} from "@/app/_components/page-box";
import {Filters} from "@/app/_components/filters/filters";
import {SidePanel} from "@/app/_components/side-panel/side-panel";
import {Location} from "@/app/_components/location/location";
import {Suspense} from "react";
import {BestRated} from "@/app/_components/home/best-rated";

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

            <BestRated/>
        </PageBox>
    </>
}

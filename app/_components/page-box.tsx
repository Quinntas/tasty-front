import {cn} from "@/lib/utils";
import {Box} from "@/app/_components/box";

interface PageBoxProps {
    className?: string;
    children: React.ReactNode;
}

export function PageBox(props: PageBoxProps) {
    return <Box
        className={cn("p-[15px] flex flex-col gap-[20px]", props.className)}>
        {props.children}
    </Box>
}
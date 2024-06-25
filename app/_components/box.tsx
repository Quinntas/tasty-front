import {cn} from "@/lib/utils";

interface BoxProps {
    className?: string;
    children: React.ReactNode;
}

export function Box(props: BoxProps) {
    return <div
        className={cn("", props.className)}>
        {props.children}
    </div>
}
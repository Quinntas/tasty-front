"use client"

import {useState} from "react";
import {Box} from "@/app/_components/box";

type QuantityPickerProps = {
    quantity: number
    setQuantity: (quantity: number, operation: '-' | '+' | '=') => void
    min?: number
}

export default function QuantityPicker(props: QuantityPickerProps) {
    const [quantity, setQuantity] = useState(props.quantity)

    let min = 1;
    if (props.min != undefined) min = props.min;

    function handleDownClick() {
        if (quantity - 1 < min) {
            setQuantity(min)
            props.setQuantity(min, "=");
            return;
        }
        setQuantity(quantity - 1)
        props.setQuantity(quantity - 1, '-');
    }

    function handleUpClick() {
        setQuantity(quantity + 1)
        props.setQuantity(quantity + 1, '+');
    }

    return <Box className={"flex items-center h-10 rounded-full bg-main border shadow-light"}>
        <button onClick={handleDownClick} className={"h-full px-3 "}>-</button>
        <Box className={"h-full flex items-center min-w-[22px] justify-center "}>
            <span className={"font-semibold"}>{quantity}</span>
        </Box>
        <button onClick={handleUpClick} className={"h-full  px-3 "}>+</button>
    </Box>

}
"use client"

import {Input} from "@/components/ui/input";
import {Box} from "@/app/_components/box";
import {Button} from "@/components/ui/button";
import {LeafyGreen, Pizza} from "lucide-react";
import {useQueryState} from "@/components/hooks/use-query-state";

const filtersQueryStateDefaults = {
    search: '',
    category: ''
}

export interface FiltersProps {
}

export function Filters(props: FiltersProps) {
    const filtersQueryState = useQueryState<typeof filtersQueryStateDefaults>({
        defaults: {},
        onChange: () => {
            console.log(filtersQueryState.queryState)
        }
    })

    return <>
        <Input
            onChange={(e) => filtersQueryState.updateQueryState({
                search: e.target.value
            })}
            value={filtersQueryState.queryState.search}
            placeholder={"Place, Food or Brand"}
        />

        <Box
            className={"flex items-center gap-[25px] py-1 w-full h-full overflow-x-auto no-scrollbar"}>
            <CategoryFilter
                slug={"pizza"}
                currentSelectedCategory={filtersQueryState.queryState.category}
                updateQueryState={filtersQueryState.updateQueryState}>
                <Pizza size={20}/>
            </CategoryFilter>

            <CategoryFilter
                slug={"healthy"}
                currentSelectedCategory={filtersQueryState.queryState.category}
                updateQueryState={filtersQueryState.updateQueryState}>
                <LeafyGreen size={20}/>
            </CategoryFilter>
        </Box>
    </>
}

interface CategoryFilterProps {
    slug: string
    currentSelectedCategory: string
    children: React.ReactNode
    updateQueryState: ({category}: { category: string }) => void
}

export function CategoryFilter(props: CategoryFilterProps) {
    const isSelected = props.currentSelectedCategory === props.slug
    return <Button size={"icon"} variant={isSelected ? 'default' : 'neutral'} onClick={() => {
        if (!isSelected)
            props.updateQueryState({category: props.slug})
        else
            props.updateQueryState({category: ''})
    }}>
        {props.children}
    </Button>
}
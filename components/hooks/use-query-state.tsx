'use client';

import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from 'react';

export type QueryStateParams = Record<string, string>;

export interface UseQueryStateProps<T extends QueryStateParams> {
    defaults: Partial<T>;
    onChange?: () => void;
}

export function useQueryState<T extends QueryStateParams>(props: UseQueryStateProps<T>) {
    const searchParams = useSearchParams();

    const [queryState, setQueryState] = useState<T>({
        ...props.defaults,
    } as T);

    function updateQueryState(data: Partial<T>) {
        const updatedQueryState = {...queryState, ...data};
        setQueryState(updatedQueryState);
    }

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        Object.keys(queryState).forEach((key) => {
            if (queryState[key]) {
                params.set(key, queryState[key] as string);
            } else {
                params.delete(key);
            }
        });
        window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
        props.onChange?.()
    }, [queryState, searchParams]);

    return {
        queryState,
        updateQueryState,
    };
}

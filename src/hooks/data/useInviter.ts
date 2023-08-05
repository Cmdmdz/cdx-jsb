'use client'
import useSWR from 'swr'
import {TypeOption} from "@/constants/common-type";
import fetchInviterTypeOptions from "@/external/http/inviter";

interface UseGamblingTypeReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function UseInviter(): UseGamblingTypeReturn {

    const {data, error} = useSWR<TypeOption[]>('/api/inviter-options',
        fetchInviterTypeOptions,
        { revalidateOnFocus: true })

    return {
        data,
        isLoading: !error && !data,
    }
}
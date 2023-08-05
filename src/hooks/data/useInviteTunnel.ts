'use client'
import useSWR from 'swr'
import {TypeOption} from "@/constants/common-type";
import fetchInviteTunnelOptions from "@/external/http/invite-tunnel";

interface UseGamblingTypeReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function UseInviteTunnel(): UseGamblingTypeReturn {

    const {data, error} = useSWR<TypeOption[]>('/api/invite-tunnel-options',
        fetchInviteTunnelOptions,
        { revalidateOnFocus: true })

    return {
        data,
        isLoading: !error && !data,
    }
}
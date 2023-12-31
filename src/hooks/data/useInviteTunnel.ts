'use client'
import useSWR from 'swr'
import { TypeOption } from '@/constants/common-type'
import fetchInviteTunnelOptions from '@/external/http/invite-tunnel'

interface UseInviteTunnelReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function UseInviteTunnel(): UseInviteTunnelReturn {
    const { data, error } = useSWR<TypeOption[]>(
        '/api/invite-tunnel-options',
        fetchInviteTunnelOptions,
        { revalidateOnFocus: true }
    )

    return {
        data,
        isLoading: !error && !data
    }
}

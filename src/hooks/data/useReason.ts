'use client'
import useSWR from 'swr'
import { TypeOption } from '@/constants/common-type'
import fetchInviteTunnelOptions from '@/external/http/invite-tunnel'
import fetchReasonOptions from '@/external/http/reason'

interface UseReasonReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function useReason(): UseReasonReturn {
    const { data, error } = useSWR<TypeOption[]>(
        '/api/reason-options',
        fetchReasonOptions,
        { revalidateOnFocus: true }
    )

    return {
        data,
        isLoading: !error && !data
    }
}

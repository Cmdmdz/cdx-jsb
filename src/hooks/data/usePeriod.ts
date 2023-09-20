'use client'
import useSWR from 'swr'
import { TypeOption } from '@/constants/common-type'
import fetchPeriodOptions from '@/external/http/period'

interface UsePeriodReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function usePeriod(): UsePeriodReturn {
    const { data, error } = useSWR<TypeOption[]>(
        '/api/period-options',
        fetchPeriodOptions,
        { revalidateOnFocus: true }
    )

    return {
        data,
        isLoading: !error && !data
    }
}

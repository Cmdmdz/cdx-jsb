'use client'
import fetchGamblingTypeOptions from '@/external/http/gambling-type'
import useSWR from 'swr'
import { TypeOption } from '@/constants/common-type'

interface UseGamblingReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function useGamblingType(): UseGamblingReturn {
    const { data, error } = useSWR<TypeOption[]>(
        '/api/gambling-type-options',
        fetchGamblingTypeOptions,
        { revalidateOnFocus: true }
    )

    return {
        data,
        isLoading: !error && !data
    }
}

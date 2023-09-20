'use client'
import useSWR from 'swr'
import { TypeOption } from '@/constants/common-type'
import fetchCauseOptions from '@/external/http/cause'

interface UseCauseTypeReturn {
    data: TypeOption[] | undefined
    isLoading: boolean
}

export default function useCause(): UseCauseTypeReturn {
    const { data, error } = useSWR<TypeOption[]>(
        '/api/cause-options',
        fetchCauseOptions,
        { revalidateOnFocus: true }
    )

    return {
        data,
        isLoading: !error && !data
    }
}

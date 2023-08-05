'use client'
import { News } from '@/constants/news-mocks'
import fetchCampaigns from '@/external/http/campaigns.api'
import { FetchDataQuery } from '@/external/http/types'
import useSWR from 'swr'

interface UseNewsReturn {
    data: News[]
    isLoading: boolean
}

export default function useCampaigns({
    limit = -1
}: FetchDataQuery): UseNewsReturn {
    const { data = [], isLoading } = useSWR<News[]>(
        { limit, path: '/api/v1/campaigns' },
        fetchCampaigns,
        { revalidateOnFocus: true }
    )

    return { data, isLoading }
}

'use client'
import { News } from '@/constants/news-mocks'
import fetchNews from '@/external/http/news.api'
import { FetchDataQuery } from '@/external/http/types'
import useSWR from 'swr'

interface UseNewsReturn {
    data: News[]
    isLoading: boolean
}

export default function useNews({ limit = -1 }: FetchDataQuery): UseNewsReturn {
    const { data = [], isLoading } = useSWR<News[]>(
        { limit, path: 'api/v1/news' },
        fetchNews,
        { revalidateOnFocus: true }
    )

    return { data, isLoading }
}

import { News, mockNews } from '@/constants/news-mocks'
import { FetchDataQuery } from './types'

export default function fetchNews({ limit }: FetchDataQuery): Promise<News[]> {
    return Promise.resolve(mockNews.slice(0, limit || mockNews.length))
}

import { mockCampaigns } from '@/constants/campaign-mocks'
import { News } from '@/constants/news-mocks'

export interface FetchNewsQuery {
    limit?: number
}

export default function fetchCampaigns({
    limit
}: FetchNewsQuery): Promise<News[]> {
    return Promise.resolve(
        mockCampaigns.slice(0, limit || mockCampaigns.length)
    )
}

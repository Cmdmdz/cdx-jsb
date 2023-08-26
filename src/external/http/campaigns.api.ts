import { News } from '@/constants/news-mocks'
import { FetchDataQuery } from '@/external/http/types'
import axios from 'axios'
import { GET_CAMPAIGN, prependBaseUrl } from '@/constants/endpoint'
import { DataResponse, Image } from '@/external/http/news.api'

export interface FetchNewsQuery {
    limit?: number
}

export default async function fetchCampaigns({
    limit
}: FetchDataQuery): Promise<News[]> {
    try {
        const response = await axios.get<DataResponse>(GET_CAMPAIGN)
        return response.data.data.map((item) => ({
            title: item.attributes.title,
            content: item.attributes.content,
            youtubeUrl: item.attributes.youtube_url ?? '',
            contentImage: Array.isArray(item.attributes.content_images.data)
                ? item.attributes.content_images.data.map((img) =>
                      prependBaseUrl(img.attributes.url)
                  )
                : [
                      prependBaseUrl(
                          item.attributes.content_images.data.attributes.url
                      )
                  ],
            thumbnail: prependBaseUrl(
                (item.attributes.thumbnail.data as Image).attributes.url
            )
        }))
    } catch (error) {
        console.error('Failed to fetch gambling type options', error)
        throw error
    }
}

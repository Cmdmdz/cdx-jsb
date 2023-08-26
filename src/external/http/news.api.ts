import { News } from '@/constants/news-mocks'
import { FetchDataQuery } from './types'
import axios from 'axios'
import { GET_NEWS, prependBaseUrl } from '@/constants/endpoint'

export type DataResponse = {
    data: DataItem[]
    meta: Meta
}

export type DataItem = {
    id: number
    attributes: Attributes
}

export type Attributes = {
    title: string
    category: string
    youtube_url: string | null
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    content_images: ImageWrapper
    thumbnail: ImageWrapper
    localizations: LocalizationWrapper
}

export type ImageWrapper = {
    data: Image[] | Image
}

export type Image = {
    id: number
    attributes: ImageAttributes
}

export type ImageAttributes = {
    name: string
    alternativeText: string | null
    caption: string | null
    width: number
    height: number
    formats: ImageFormats
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl: string | null
    provider: string
    provider_metadata: any | null
    createdAt: string
    updatedAt: string
}

export type ImageFormats = {
    large: ImageFormat
    small: ImageFormat
    medium: ImageFormat
    thumbnail: ImageFormat
}

export type ImageFormat = {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string | null
    size: number
    width: number
    height: number
}

export type LocalizationWrapper = {
    data: any[] // Define the structure if you know what localizations look like
}

export type Meta = {
    pagination: Pagination
}

export type Pagination = {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export default async function fetchNews({
    limit
}: FetchDataQuery): Promise<News[]> {
    try {
        const response = await axios.get<DataResponse>(GET_NEWS)

        const news: News[] = response.data.data.map((item) => ({
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

        return news
    } catch (error) {
        console.error('Failed to fetch gambling type options', error)
        throw error
    }
}

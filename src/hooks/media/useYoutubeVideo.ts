'use client'
import { useEffect, useState } from 'react'

interface UseYoutubeVideoResult {
    videoId?: string
    thumbnail?: string
}

function getVideoId(url: string): string | undefined {
    const match = url.match(/[?&]v=([^&]+)/)
    return match?.[1]
}

function getYouTubeThumbnail(id: string): string | null {
    // Extract the video ID from the URL
    if (id) {
        // Construct the thumbnail URL using the video ID
        var thumbnailURL = 'https://i.ytimg.com/vi/' + id + '/hq720.jpg'
        return thumbnailURL
    }

    return null
}

export function useYoutubeVideo(videoUrl?: string): UseYoutubeVideoResult {
    const [videoId, setVideoId] = useState<string>()
    const [thumbnail, setThumbnail] = useState<string | undefined>()

    useEffect(() => {
        if (videoUrl) {
            const videoId = getVideoId(videoUrl)
            console.log('videoId', videoId)
            if (videoId) {
                const thumbnail = getYouTubeThumbnail(videoId)
                setVideoId(videoId)
                setThumbnail(thumbnail || '')
            }
        }
    }, [videoUrl])

    return { videoId, thumbnail }
}

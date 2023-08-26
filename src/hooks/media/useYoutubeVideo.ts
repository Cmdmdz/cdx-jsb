'use client'
import { useEffect, useState } from 'react'

interface UseYoutubeVideoResult {
    videoId?: string
    thumbnail?: string
}

function getVideoId(url: string): string | undefined {
    const regex =
        /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regex)
    return match?.[1]
}

function getYouTubeThumbnail(id: string): string {
    return `https://i.ytimg.com/vi/${id}/hq720.jpg`
}

export function useYoutubeVideo(videoUrl?: string): UseYoutubeVideoResult {
    const [videoId, setVideoId] = useState<string | undefined>()
    const [thumbnail, setThumbnail] = useState<string | undefined>()

    useEffect(() => {
        if (videoUrl) {
            const extractedVideoId = getVideoId(videoUrl)
            if (extractedVideoId) {
                setVideoId(extractedVideoId)
                setThumbnail(getYouTubeThumbnail(extractedVideoId))
            }
        }
    }, [videoUrl])

    return { videoId, thumbnail }
}

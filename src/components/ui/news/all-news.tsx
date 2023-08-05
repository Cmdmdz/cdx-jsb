'use client'
import PlaceHolderCard from '@/components/common/placeholder-card/placeholder-card'
import useNews from '@/hooks/data/useNews'
import React, { Suspense } from 'react'
import NewsCard from '../news-card/news-card'

export default function AllNews() {
    const limit = 6
    const { data: news, isLoading: isNewsLoading } = useNews({ limit })

    return (
        <div className='flex relative w-screen max-h-[1024px] overflow-y-auto bg-no-repeat'>
            <div
                className='relative m-auto hidden-scrollbar snap-mandatory snap-x flex w-full flex-row
                 overflow-auto px-6 py-8 gap-6 max-w-screen-2xl justify-between lg:justify-center lg:gap-y-10 lg:max-w-screen-xl lg:flex-wrap lg:overflow-visible'
            >
                {news.map(
                    (
                        { title, content, contentImage, thumbnail, youtubeUrl },
                        i
                    ) => (
                        <Suspense
                            key={'news_' + i}
                            fallback={<PlaceHolderCard />}
                        >
                            <NewsCard
                                title={title}
                                content={content}
                                thumbnailUrl={thumbnail}
                                contentImageUrl={contentImage}
                                youtubeUrl={youtubeUrl}
                                className='snap-center'
                            />
                        </Suspense>
                    )
                )}
                {Array(Math.max(0, 3 - news.length))
                    .fill(null)
                    .map((_, i) => (
                        <PlaceHolderCard key={i} isLoading={isNewsLoading} />
                    ))}
            </div>
        </div>
    )
}

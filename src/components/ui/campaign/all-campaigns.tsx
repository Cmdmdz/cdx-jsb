'use client'
import PlaceHolderCard from '@/components/common/placeholder-card/placeholder-card'
import useCampaigns from '@/hooks/data/useCampaigns'
import React, { Suspense } from 'react'
import NewsCard from '../news-card/news-card'

export default function AllCampaigns() {
    const limit = 6
    const { data: campaigns, isLoading: isCampaignLoading } = useCampaigns({
        limit
    })
    return (
        <div className='flex relative w-screen max-h-[1024px] overflow-y-auto bg-no-repeat'>
            <div
                className='relative m-auto hidden-scrollbar snap-mandatory snap-x flex w-full flex-row
     overflow-auto px-6 py-8 gap-6 max-w-screen-2xl justify-between lg:justify-center lg:gap-y-10 lg:max-w-screen-xl lg:flex-wrap lg:overflow-visible'
            >
                {campaigns.map(
                    ({ title, content, contentImage, thumbnail }, i) => (
                        <Suspense
                            key={'campaign_' + i}
                            fallback={<PlaceHolderCard />}
                        >
                            <NewsCard
                                title={title}
                                content={content}
                                thumbnailUrl={thumbnail}
                                contentImageUrl={contentImage}
                                className='snap-center'
                            />
                        </Suspense>
                    )
                )}
                {Array(Math.max(0, limit - campaigns.length))
                    .fill(null)
                    .map((_, i) => (
                        <PlaceHolderCard
                            key={i}
                            isLoading={isCampaignLoading}
                        />
                    ))}
            </div>
        </div>
    )
}

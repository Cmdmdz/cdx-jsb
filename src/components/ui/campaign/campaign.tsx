'use client'
import classNames from 'classnames'
import SectionHeader from '../section-header/section-header'
import { useRouter } from 'next/navigation'
import SeeAllButton from '../see-all-button/see-all-button'
import dynamic from 'next/dynamic'
import useCampaigns from '@/hooks/data/useCampaigns'
import { Suspense } from 'react'
import PlaceHolderCard from '@/components/common/placeholder-card/placeholder-card'

const NewsCard = dynamic(() => import('../news-card/news-card'))

const campaignPath = '/news#campaign'

export default function Campaign({ className, style }: CampaignProps) {
    const { data: campaigns, isLoading } = useCampaigns({ limit: 3 })

    const router = useRouter()
    const gotoNewsPage = () => {
        router.push(campaignPath)
    }
    return (
        <div
            className={classNames(
                'inline-flex flex-col items-start bg-white relative',
                className
            )}
            style={style}
        >
            <SectionHeader title='รณรงค์' onSeeAll={gotoNewsPage} />
            <div className='flex relative w-screen bg-text-stop-gambling bg-cover bg-bottom bg-no-repeat xl:bg-text-stop-gambling-xl'>
                <div
                    className='relative m-auto hidden-scrollbar snap-mandatory snap-x flex w-full flex-row
                 overflow-auto px-6 py-8 gap-6 max-w-screen-2xl md:justify-center 2xl:justify-start 2xl:items-center 2xl:px-0 2xl:-top-[80px]'
                >
                    <div className='hidden mr-auto 2xl:flex self-center w-[300px] 3xl:mr-auto flex-shrink-0 justify-center'>
                        <SeeAllButton href={campaignPath} />
                    </div>
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
                    {Array(Math.max(0, 3 - campaigns.length))
                        .fill(null)
                        .map((_, i) => (
                            <PlaceHolderCard key={i} isLoading={isLoading} />
                        ))}
                </div>
            </div>
        </div>
    )
}

interface CampaignProps {
    className?: string
    style?: Object
}

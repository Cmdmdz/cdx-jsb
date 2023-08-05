'use client'
import classNames from 'classnames'
import SectionHeader from '../section-header/section-header'
import { useRouter } from 'next/navigation'
import SeeAllButton from '../see-all-button/see-all-button'
import dynamic from 'next/dynamic'
import useNews from '@/hooks/data/useNews'
import { Suspense } from 'react'

const NewsCard = dynamic(() => import('../news-card/news-card'))
const PlaceHolderCard = dynamic(
    () => import('@/components/common/placeholder-card/placeholder-card')
)

const newsPath = '/news#news'

export default function News({ className, style }: CampaignProps) {
    const { data: news, isLoading } = useNews({ limit: 3 })

    const router = useRouter()
    const gotoNewsPage = () => {
        router.push(newsPath)
    }
    return (
        <div
            className={classNames(
                'inline-flex flex-col items-start bg-white relative min-h-[372px]',
                className
            )}
            style={style}
        >
            <SectionHeader
                title='ข่าวสารน่ารู้'
                reverse
                onSeeAll={gotoNewsPage}
            />
            <div className='flex relative w-screen bg-text-stop-gambling bg-cover bg-bottom bg-no-repeat xl:bg-text-stop-gambling-xl'>
                <div
                    className='relative m-auto hidden-scrollbar snap-mandatory snap-x flex w-full flex-row
                 overflow-auto px-6 py-8 gap-6 max-w-screen-2xl md:justify-center 2xl:justify-end 2xl:min-h-[372px] 2xl:px-0 2xl:-top-[80px]'
                >
                    {news.map(
                        ({ title, content, contentImage, thumbnail }, i) => (
                            <Suspense
                                key={'news_' + i}
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
                    {Array(Math.max(0, 3 - news.length))
                        .fill(null)
                        .map((_, i) => (
                            <PlaceHolderCard key={i} isLoading={isLoading} />
                        ))}
                    <div className='hidden 2xl:flex self-center w-[300px] 3xl:ml-auto flex-shrink-0 justify-center ml-auto'>
                        <SeeAllButton href={newsPath} />
                    </div>
                </div>
            </div>
        </div>
    )
}

interface CampaignProps {
    className?: string
    style?: Object
}

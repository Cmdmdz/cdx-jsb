import SectionHeader from '@/components/ui/section-header/section-header'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const AllCampaigns = dynamic(
    () => import('@/components/ui/campaign/all-campaigns')
)
const AllNews = dynamic(() => import('@/components/ui/news/all-news'))

export const metadata: Metadata = {
    title: 'รณรงณ์ / ข่าวสารน่ารู้',
    description: 'แจ้งเบาะแสเว็บพนัน / ร้องเรียนพนัน'
}

export default function NewsPage() {
    return (
        <>
            <SectionHeader
                id='campaign'
                title='รณรงค์หยุดพนันออนไลน์'
                titleClassName='2xl:hidden'
                className='2xl:h-16'
            />
            <div className='bg-news bg-fixed bg-bottom flex flex-col'>
                <div className='items-start gap-2.5 text-center px-6 text-3xl w-full max-w-screen-2xl m-auto font-medium hidden text-primary 2xl:inline-flex'>
                    <p className='leading-normal'>รณรงค์หยุดพนันออนไลน์</p>
                </div>
                <AllCampaigns />
            </div>
            <SectionHeader
                id='news'
                title='ข่าวสารน่ารู้'
                titleClassName='2xl:hidden'
                className='2xl:h-16'
            />
            <div className='bg-news bg-fixed bg-bottom flex flex-col'>
                <div className='items-start gap-2.5 text-center px-6 text-3xl w-full max-w-screen-2xl m-auto font-medium hidden text-primary 2xl:inline-flex'>
                    <p className='leading-normal'>ข่าวสารน่ารู้</p>
                </div>
                <AllNews />
            </div>
        </>
    )
}

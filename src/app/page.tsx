import CaptionLandingPage from '@/components/common/footer/caption-landing-page'
import Campaign from '@/components/ui/campaign/campaign'
import Landing from '@/components/ui/landing/landing'
import News from '@/components/ui/news/news'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'หน้าหลัก',
    description: 'แจ้งเบาะแสเว็บพนัน / ร้องเรียนพนัน'
}

export default function Home() {
    return (
        <>
            <Landing />
            <Campaign />
            <News />
            <CaptionLandingPage />
        </>
    )
}

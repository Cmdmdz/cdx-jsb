import Image from 'next/image'
import Sponsor from './sponsor'
import StopGamblingLogo from '@/assets/vectors/original-logo.svg'
import classNames from 'classnames'
import LandingActionButton from './landing-action'

export default function LandingPage({ className, style }: LandingPageProps) {
    return (
        <div
            className={classNames(
                'relative',
                'inline-flex',
                'flex-col',
                'gap-6',
                'items-center',
                'justify-center',
                'bg-white',
                'w-screen',
                'relative',
                'py-16',
                'bg-landing bg-cover bg-bottom md:bg-landing-md',
                className
            )}
            style={style}
        >
            <div className='w-full px-6 inline-flex flex-col gap-6 max-w-screen-md'>
                <div className='w-full'>
                    <div className='relative flex w-full flex-col items-center justify-center gap-[5px] self-stretch'>
                        <Image
                            src={StopGamblingLogo}
                            alt='applogo'
                            className='w-32 h-32'
                        />
                    </div>
                </div>
                <div className='w-full font-bold text-primary'>
                    <p className='relative text-xl leading-normal text-center lg:text-2xl'>
                        <span className='inline-block'>
                            คุณสามารถร่วมเป็นส่วนหนึ่ง
                            <span className='inline-block'>
                                ของการแจ้งเบาะแสเว็บพนัน
                            </span>
                        </span>
                        <span className='inline-block'>
                            และการร้องเรียนเว็บพนันกับเรา
                            <span className='inline-block'>
                                เพื่อนำคุณเข้าสู่ขั้นตอนต่อไป
                            </span>
                        </span>
                    </p>
                </div>
                <div className='w-full text-white flex justify-center items-center'>
                    <div className='relative flex w-full flex-col items-center gap-4 self-stretch max-w-[382px] lg:max-w-none lg:flex-row'>
                        <LandingActionButton />
                    </div>
                </div>
            </div>
            <div className='w-full max-w-screen-lg pt-8'>
                <Sponsor />
            </div>
        </div>
    )
}

interface LandingPageProps {
    className?: string
    style?: Object
}

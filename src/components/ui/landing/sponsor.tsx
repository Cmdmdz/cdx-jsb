import Image from 'next/image'
import React from 'react'
import NBULogo from '@/public/images/nbu-logo.png'
import TYILogo from '@/public/images/tyi-logo.png'
import MediaMoveLogo from '@/public/images/media-move-logo.png'
import StopGamblingLogo from '@/public/images/stop-gambling-logo.png'

export default function Sponsor() {
    return (
        <div
            className='grid grid-cols-2 gap-4 py-8 px-2.5 m-auto items-center
justify-center max-w-screen-2xl w-[180px] sm:flex sm:w-full sm:justify-between sm:h-10 sm:px-6 sm:py-0 md:h-14'
        >
            <div className='relative col-span-2 h-full sm:order-1 lg:py-0'>
                <Image
                    className='object-scale-down h-full w-fit'
                    src={NBULogo}
                    alt='north bangkok university logo'
                />
            </div>
            <div className='relative col-span-2 h-full sm:order-3 lg:h-16'>
                <Image
                    className='object-scale-down h-full w-fit'
                    src={TYILogo}
                    alt='thai youth institute logo'
                />
            </div>
            <div className='relative aspect-square h-full sm:order-4 sm:w-auto lg:h-16'>
                <Image
                    className='object-scale-down h-full'
                    src={MediaMoveLogo}
                    alt='stop gambling logo'
                />
            </div>
            <div className='relative aspect-square h-full sm:order-2 sm:w-auto lg:h-16'>
                <Image
                    className='object-scale-down h-full'
                    src={StopGamblingLogo}
                    alt='media move logo'
                />
            </div>
        </div>
    )
}

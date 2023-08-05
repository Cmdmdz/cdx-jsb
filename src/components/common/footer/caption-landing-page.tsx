import React from 'react'

interface CaptionProps {
    className?: string
    style?: React.CSSProperties
}

const CaptionLandingPage: React.FC<CaptionProps> = ({ className, style }) => {
    const captionText = `โจรปล้น 10 ครั้ง ยังเหลือบ้าน ไฟไหม้บ้าน 10 ครั้ง ยังเหลือที่ดิน เล่นการพนันครั้งเดียว`
    const captionQuote = `"..ไม่เหลืออะไรสักอย่าง.."\n`
    const captionDescription = `สันตุสสโกวาท โดย หลวงพ่ออินทร์ถวาย สันตุสสโก จากพระธรรมเทศนา “หลักธรรม นำหลักใจ”\nแสดงธรรมเมื่อวันที่ 15 มกราคม 2564`

    return (
        <div
            className={`inline-flex w-screen items-center justify-center bg-primary py-14 px-8 text-center ${className}`}
            style={style}
        >
            <div className='flex w-full max-w-screen-2xl py-8 px-8 items-center justify-center rounded-[20px] bg-white drop-shadow-lg 2xl:py-14'>
                <div className='w-full'>
                    <p className='inline-block text-xl text-black 2xl:text-[32px]'>
                        {captionText}
                    </p>
                    <p className='block text-2xl py-4 leading-10 text-primary 2xl:text-[40px]'>
                        {captionQuote}
                    </p>
                    <p className='inline-block text-xl leading-[1.5] text-black 2xl:text-[32px]'>
                        {captionDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CaptionLandingPage

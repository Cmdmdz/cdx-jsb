import React, { PropsWithChildren } from 'react'
import FormHeader from '@/components/ui/form-header'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ผู้เสียหายร้องเรียนพนัน',
    description: 'แจ้งเบาะแสเว็บพนัน / ร้องเรียนพนัน'
}

const ComplaintGamblingVictim = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <FormHeader>ผู้เสียหายร้องเรียนพนัน</FormHeader>
            {children}
            <div
                className='font-kanit inline-flex w-full items-center justify-end gap-2.5
                 bg-[#4B5267] p-6 text-center font-medium text-white'
            >
                <p className='w-full text-base leading-[1.8] m-auto max-w-screen-md'>
                    “การพนันเป็นความสนุก ที่ถูกความหายนะครอบงำ ไฟไหม้ 7 ครั้ง
                    ยังไม่ร้ายแรงเท่าผีพนัน ไฟไหม้บ้านยังเหลือที่ดิน
                    ไว้ปลูกบ้านได้อีกหลายครั้ง
                    แต่เสียการพนัน...แม้ที่ดินก็ไม่มีเหลือ
                    ครอบครัวบ้านแตกสาแหรกขาด” 9 เมษายน พ.ศ.2546 คุณครูไม่ใหญ่
                </p>
            </div>
        </div>
    )
}

export default ComplaintGamblingVictim

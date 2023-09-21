'use client'

import FlatButton from '@/components/common/flat-button/flat-button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function LandingActionButton() {
    const router = useRouter()

    const gotoCGV = () => {
        router.push('/report-appeal')
    }

    const gotoReport = () => {
        router.push('/report-gambling')
    }

    return (
        <>
            <FlatButton onClick={gotoReport}>
                แจ้งเบาะแส หรือ ผู้ชักชวนเล่นพนัน
            </FlatButton>
            <FlatButton onClick={gotoCGV}>ผู้เสียหายร้องเรียนพนัน</FlatButton>
        </>
    )
}

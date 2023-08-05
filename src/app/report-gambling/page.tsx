'use client'
import React from 'react'
import ReportForm, {
    ReportFormValue
} from '@/components/ui/report-form/report-form'

export default function Page() {
    const handleSubmit = async  (value: ReportFormValue) => {
        console.log('submit value:', value)
    }

    return (
        <ReportForm
            onSubmit={handleSubmit}
            submitButtonText='แจ้งเบาะแสเว็บพนัน'
        />
    )
}

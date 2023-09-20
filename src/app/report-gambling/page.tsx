'use client'
import React from 'react'
import ReportForm, {
    ReportFormValue
} from '@/components/ui/report-form/report-form'
import { createForm } from '@/external/http/report-form'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()
    const handleSubmit = async (value: ReportFormValue) => {
        const request = {
            ...value,
            type: 1
        } as ReportFormValue

        const success = await createForm(request)
        if (success) {
            router.push('/')
        }
    }

    return (
        <ReportForm
            onSubmit={handleSubmit}
            submitButtonText='แจ้งเบาะแสเว็บพนัน'
            disableDamageValue={false}
        />
    )
}

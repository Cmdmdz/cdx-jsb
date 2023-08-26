import axios from 'axios'
import { CREATE_FORM, UPLOAD_FILE } from '@/constants/endpoint'
import { ReportFormValue } from '@/components/ui/report-form/report-form'
import { toast } from 'react-hot-toast'

// upload the file to your API
export interface FileFormat {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: null | string
    size: number
    width: number
    height: number
}
export interface Connection {
    id: number
    position: {
        end: boolean
    }
}

export interface FormRequest {
    website_url: string
    description: string
    damage_value: number
    callback_agreement: boolean
    locale: string
    evidences: any
    type: {
        disconnect: any[]
        connect: Connection[]
    }
    gambling_type: {
        disconnect: any[]
        connect: Connection[]
    }
    inviter: {
        disconnect: any[]
        connect: Connection[]
    }
    tunnel: {
        disconnect: any[]
        connect: Connection[]
    }
}

interface DataRequest {
    data: FormRequest
}

type ReportFormToFormRequest = (
    formValue: ReportFormValue
) => Promise<FormRequest>

export const reportFormToFormRequest: ReportFormToFormRequest = async (
    formValue
) => {
    const evidences: any = []

    for (const file of formValue.files) {
        const formData = new FormData()
        formData.append('files', file)

        const response = await axios.post(UPLOAD_FILE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        evidences.push(...response.data)
    }

    const formReqData: FormRequest = {
        website_url: formValue.gamblingURL,
        description: formValue.description,
        damage_value: formValue.damageValue,
        callback_agreement: formValue.agreePolicy,
        locale: 'th-TH',
        evidences: evidences,
        type: {
            disconnect: [],
            connect: [
                {
                    id: formValue.type,
                    position: {
                        end: true
                    }
                }
            ]
        },
        gambling_type: {
            disconnect: [],
            connect: [
                {
                    id: Number(formValue.gamblingType),
                    position: {
                        end: true
                    }
                }
            ]
        },
        inviter: {
            disconnect: [],
            connect: [
                {
                    id: Number(formValue.funnel),
                    position: {
                        end: true
                    }
                }
            ]
        },
        tunnel: {
            disconnect: [],
            connect: [
                {
                    id: Number(formValue.inviteFunnel),
                    position: {
                        end: true
                    }
                }
            ]
        }
    }

    return formReqData
}

export const createForm = async (
    formValue: ReportFormValue
): Promise<boolean> => {
    try {
        const formReqData = await reportFormToFormRequest(formValue)
        const request: DataRequest = {
            data: formReqData
        }

        await axios.post(CREATE_FORM, request)
        toast.success(' แจ้งเบาะแสสำเร็จ!')

        return true
    } catch (err) {
        console.error(err)
        toast.error('ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้งค่ะ')

        return false
    }
}

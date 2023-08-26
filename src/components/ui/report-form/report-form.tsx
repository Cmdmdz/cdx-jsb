'use client'
import React, { useEffect } from 'react'
import URLInput from '@/components/common/input/url-input'
import { useForm } from 'react-hook-form'
import TextareaInput from '@/components/common/input/textarea'
import Input from '../../common/input'
import Select from '@/components/common/select'
import Checkbox from '@/components/common/checkbox'
import FileUpload from '@/components/common/file-upload'
import { toast } from 'react-hot-toast'
import useGamblingType from '@/hooks/data/useGamblingType'
import useInviteTunnel from '@/hooks/data/useInviteTunnel'
import useInviter from '@/hooks/data/useInviter'
import LoadingSpinner from '@/components/common/loading'
import { useRouter } from 'next/navigation'

function FieldLabel({ label = '', required = false }) {
    return (
        <label className='relative w-full leading-none flex gap-2 font-medium'>
            <span className='inline text-2xl leading-normal text-gray-900'>
                {label}
            </span>
            {required ? (
                <span className='inline text-2xl leading-normal text-primary'>
                    *
                </span>
            ) : (
                <span className='inline text-2xl leading-normal text-gray-900'>
                    (ถ้ามี)
                </span>
            )}
        </label>
    )
}

interface ReportFormProps {
    // eslint-disable-next-line unused-imports/no-unused-vars
    onSubmit: (values: ReportFormValue) => void
    submitButtonText: string
}

export interface ReportFormValue {
    gamblingURL: string
    description: string
    gamblingType: string
    gamblingOtherType: string
    funnel: string
    funnelOther: string
    inviteFunnel: string
    inviteFunnelOther: string
    agreePolicy: boolean
    damageValue: number
    files: File[]
    type: number
}

const ReportForm = ({ onSubmit, submitButtonText }: ReportFormProps) => {
    const { control, handleSubmit, watch, setValue, formState } =
        useForm<ReportFormValue>({
            defaultValues: {
                gamblingURL: '',
                description: '',
                gamblingType: '',
                gamblingOtherType: '',
                funnel: '',
                funnelOther: '',
                inviteFunnel: '',
                inviteFunnelOther: '',
                agreePolicy: false,
                files: [],
                damageValue: 0
            },
            mode: 'all',
            reValidateMode: 'onBlur'
        })

    const router = useRouter()

    // Handle the button click
    const btnBack = () => {
        router.push('/')
    }

    const gamblingType = watch('gamblingType')
    const funnel = watch('funnel')
    const inviteFunnel = watch('inviteFunnel')
    const { data: gamblingTypeOptions, isLoading: isGamblingTypeLoading } =
        useGamblingType()
    const { data: inviteOptions, isLoading: isInviterLoading } = useInviter()
    const { data: tunnelOptions, isLoading: isInviteTunnelLoading } =
        useInviteTunnel()

    const optionGamblingType =
        gamblingTypeOptions?.map((option) => ({
            value: option.id.toString(),
            text: option.attributes.label
        })) || []

    const optionInvite =
        inviteOptions?.map((option) => ({
            value: option.id.toString(),
            text: option.attributes.label
        })) || []

    const optionTunnel =
        tunnelOptions?.map((option) => ({
            value: option.id.toString(),
            text: option.attributes.label
        })) || []

    useEffect(() => {
        if (formState.errors.root?.message) {
            toast.error(formState.errors.root.message)
        }
    }, [formState.errors.root?.message])

    if (isGamblingTypeLoading || isInviterLoading || isInviteTunnelLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='flex flex-col gap-4 md:grid md:grid-cols-2 container m-auto'>
            <div className='font-kanit inline-flex w-full flex-col items-center text-left md:col-span-1'>
                <div className='flex w-full flex-col items-start px-6 py-4 gap-2'>
                    <FieldLabel label='เว็บไซต์ที่กระทำความผิด(URL)' required />
                    <URLInput
                        control={control}
                        placeholder='เช่น https://www.google.com'
                        className='w-full'
                        name='gamblingURL'
                    />
                </div>
                <div className='flex w-full flex-col items-start gap-[7px] self-stretch px-6 py-4'>
                    <FieldLabel label='รายละเอียดการกระทำความผิด' required />
                    <p className='w-full text-[15px] font-[400] leading-normal text-black'>
                        (เช่น การโฆษณา/การล่อลวงให้เข้าเล่นหนัน,
                        การถูกฉ้อโกง/หลอกลวงโดยเว็บพนัน ฯลฯ)
                    </p>
                    <TextareaInput
                        name='description'
                        className='w-full'
                        control={control}
                        rules={{ required: true }}
                    />
                    {/*<Input type="PLACEHOLDER_TYPE" text="กรอกรายละเอียด" />*/}
                </div>
                <div className='flex w-full flex-col items-start px-6 py-4 font-medium'>
                    <FieldLabel label='ประเภทของการพนัน' required />
                    <Select
                        name='gamblingType'
                        control={control}
                        className='w-full'
                        placeholder='กรุณาเลือก'
                        rules={{
                            required: true
                        }}
                        options={optionGamblingType}
                    />
                    {gamblingType === '6' && (
                        <Input
                            className='mt-3 w-full'
                            name='gamblingOtherType'
                            control={control}
                            placeholder='ระบุ'
                            rules={{ required: true }}
                        />
                    )}
                </div>
                <div className='flex w-full flex-col items-start px-6 py-4 font-medium'>
                    <FieldLabel label='ผ่านช่องทางใด' required />
                    <Select
                        name='funnel'
                        control={control}
                        className='w-full'
                        placeholder='กรุณาเลือก'
                        rules={{
                            required: true
                        }}
                        options={optionInvite}
                    />
                    {funnel === '5' && (
                        <Input
                            className='mt-3 w-full'
                            name='funnelOther'
                            control={control}
                            placeholder='ระบุ'
                            rules={{ required: true }}
                        />
                    )}
                </div>
            </div>
            <div className='font-kanit inline-flex w-full flex-col items-center text-left md:col-span-1'>
                <div className='flex w-full flex-col items-start gap-[7px] self-stretch px-6 py-[26px]'>
                    <div className='relative w-full font-medium leading-none'>
                        <p className='inline text-2xl leading-normal text-black'>
                            {'หลักฐานที่เกี่ยวข้อง '}
                        </p>
                        <p className='inline text-2xl leading-normal text-primary'>
                            *
                        </p>
                    </div>
                    <p className='w-full text-[15px] font-[400] leading-normal text-black'>
                        (เช่น การแชตกับเว็บพนัน,
                        ภาพการโฆษณา/ข้อความรีวิวเว็บพนัน,
                        สลิป/ภาพการโอนเงินให้หรือรับเงินโอนจากเว็บพนัน ฯลฯ)
                    </p>
                    {/*<FileUpload*/}
                    {/*    className='w-full'*/}
                    {/*    onChange={(files) => setFiles(files)} // Pass a function to set the state*/}
                    {/*/>*/}
                    <FileUpload
                        className='w-full'
                        onChange={(files) => {
                            setValue('files', files)
                        }}
                    />

                    {/*<FileUpload className="w-full" />*/}
                </div>
                <div className='flex w-full flex-col items-start gap-[5px] self-stretch px-6 py-4 text-black'>
                    <FieldLabel label='มูลค่าความเสียหาย' />
                    <p className='w-full text-[15px] font-[400] leading-normal'>
                        (ใส่จำนวนเงินเป็นตัวเลขเท่านั้น)
                    </p>
                    <Input
                        control={control}
                        name='damageValue'
                        className='w-full'
                        placeholder='จำนวนเงิน'
                        maskOptions={{
                            mask: Number,
                            thousandsSeparator: ','
                        }}
                        rules={{
                            pattern: /[0-9]+/
                        }}
                    />
                </div>
                <div className='flex w-full flex-col items-start gap-[5px] self-stretch px-6 py-4 font-medium'>
                    <FieldLabel label='ถูกชักชวนจากแหล่งใด' required />
                    <Select
                        name='inviteFunnel'
                        control={control}
                        className='w-full'
                        placeholder='กรุณาเลือก'
                        rules={{
                            required: true
                        }}
                        options={optionTunnel}
                    />
                    {inviteFunnel === '8' && (
                        <Input
                            className='mt-3 w-full'
                            name='inviteFunnelOther'
                            control={control}
                            rules={{ required: true }}
                            placeholder='ระบุ'
                        />
                    )}
                </div>
                <div className='flex w-full flex-col items-start gap-2.5 self-stretch px-6 py-4 font-medium text-black'>
                    <FieldLabel label='เบอร์โทรติดต่อ' />
                    <Input
                        placeholder='xxx-xxx-xxxx'
                        control={control}
                        name='contact'
                        className='w-full'
                        maskOptions={{
                            mask: '{0}00-000-000[0]'
                        }}
                        rules={{
                            maxLength: 10,
                            pattern: /^0[0-9]{8,9}/
                        }}
                    />
                </div>
            </div>
            <div
                className='font-kanit inline-flex w-full items-center justify-center gap-2.5 p-6 text-center font-medium text-primary
            md:col-span-2 md:m-auto md:max-w-screen-md'
            >
                <p className='w-full text-xl leading-normal'>
                    <span className='inline-block'>
                        *** จะเก็บข้อมูลของท่านเป็นความลับ
                    </span>
                    <span className='inline-block'>
                        และใช้เพื่อการติดต่อกรณีที่ท่านแจ้งเท่านั้น ***
                    </span>
                </p>
            </div>
            <label
                className='font-kanit cursor-pointer inline-flex items-center gap-3.5 px-6 py-[18px] font-[400]
            text-black md:col-span-2 md:m-auto md:max-w-screen-sm'
            >
                {/*<Identifier className="h-6 w-6" />*/}
                <Checkbox
                    name='agreePolicy'
                    control={control}
                    rules={{ required: true }}
                />
                <p className='w-full text-base leading-normal'>
                    ข้าพเจ้ายินยอมให้ติดต่อกลับเพื่อให้ข้อมูลเพิ่มเติม*
                </p>
            </label>
            <div
                className='font-kanit inline-flex w-full flex-col items-center gap-[15px] px-6 pb-8 text-center
            text-white md:col-span-2 md:m-auto md:max-w-screen-sm md:flex-row'
            >
                <button
                    className='flex w-full h-[60px] items-center justify-center gap-2.5 self-stretch rounded-[100px] bg-[#4B5267] px-6 py-1.5'
                    onClick={btnBack}
                >
                    <span className='w-full text-xl leading-normal underline'>
                        ย้อนกลับ
                    </span>
                </button>
                <button
                    onClick={handleSubmit(onSubmit)}
                    className='flex h-[60px] w-full items-center justify-center self-stretch rounded-[100px] text-white bg-primary px-6 py-0.5'
                >
                    <span className='w-full text-xl leading-normal underline'>
                        {submitButtonText}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default ReportForm

'use client'
import React, { useState } from 'react'
import classNames from 'classnames'

interface FileUploadProps {
    className?: string
    onChange?: (files: File[]) => void
}

const FileUpload = ({ onChange }: FileUploadProps) => {
    const [fileNames, setFileNames] = useState<string[]>([])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files
        if (fileList) {
            const files = Array.from(fileList) // Convert to array
            setFileNames(files.map((file) => file.name))
            if (onChange) {
                onChange(files) // Call the passed-in function
            }
        }
    }

    return (
        // <Badge
        //     content={fileNames.length}
        //     className={classNames('w-full', className)}
        //     invisible={!fileNames.length}
        // >
        <div
            className={classNames(
                'inline-flex',
                'h-[60px]',
                'items-start',
                'rounded-[14px] overflow-hidden',
                'text-center',
                'cursor-pointer',
                'border border-gray-400',
                'relative',
                'w-full'
            )}
        >
            <input
                type='file'
                accept='image/*'
                className='absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer'
                onChange={handleFileChange}
                multiple // Allow multiple file selection
            />
            <div className='flex h-full w-fit flex-col items-center justify-center gap-2.5 self-stretch rounded-r-[14px] bg-[#4B5267] px-6 font-medium text-white'>
                <p className='w-[104px] text-xl leading-normal'>Choose file</p>
            </div>
            <div
                className='flex h-full flex-col items-center justify-center gap-2.5 px-4
                 self-stretch text-gray-400 flex-1 line-clamp-1'
            >
                {fileNames.length > 0 ? (
                    <span className='text-xl leading-normal w-full line-clamp-1'>
                        เลือก {fileNames.length} ไฟล์
                    </span>
                ) : (
                    <span className='text-xl leading-normal'>
                        No file chosen
                    </span>
                )}
            </div>
        </div>
    )
}

export default FileUpload

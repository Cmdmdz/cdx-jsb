'use client'
import React from 'react'
import Input from '@/components/common/input/index'
import { InputProps as MatInputProps } from '@material-tailwind/react'
import { Control } from 'react-hook-form'

interface InputProps extends MatInputProps {
    control: Control<any>
    name: string
}

const URLInput = ({ placeholder, className, control, name }: InputProps) => {
    const URLPattern =
        /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})(\/[\w.-]*)*\/?(\?.*)?$/

    return (
        <Input
            placeholder={placeholder}
            control={control}
            className={className}
            name={name}
            rules={{
                required: true,
                pattern: URLPattern
            }}
        />
    )
}

export default URLInput

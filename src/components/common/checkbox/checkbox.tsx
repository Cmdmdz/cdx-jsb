'use client'
import React from 'react'
import { Checkbox as MatCheckbox } from '@material-tailwind/react'
import { Control, ControllerProps, useController } from 'react-hook-form'

interface CheckboxProps {
    label?: string
    name: string
    control: Control<any>
    rules: ControllerProps['rules']
}

const Checkbox = ({ label, rules, name, control }: CheckboxProps) => {
    const { field } = useController({ rules, name, control })

    return (
        <MatCheckbox
            inputRef={field.ref}
            {...field}
            className='w-5 h-5 rounded-full'
            label={label}
        />
    )
}

export default Checkbox

'use client'
import React from 'react'
import {
    Textarea as MatTextArea,
    TextareaProps as MatTextareaProps
} from '@material-tailwind/react'
import classNames from 'classnames'
import { Control, Controller, ControllerProps } from 'react-hook-form'
import { Correct, InCorrect } from '../../ui/correct-or-incorrect'

interface TextareaProps extends Partial<MatTextareaProps> {
    inputClassName?: string
    name: string
    control: Control<any>
    rules?: ControllerProps['rules']
}

function TextareaInput({
    placeholder,
    autoFocus,
    className,
    inputClassName,
    name,
    control,
    rules
}: TextareaProps) {
    const baseClass = classNames(
        'border',
        'border-gray-400',
        'border-t-gray-400',
        'focus:!border-gray-400',
        'focus:!border',
        '!text-xl'
    )

    const errorClass = 'border !border-red-500 focus:!border-red-500'
    const successClass = 'border !border-green-500 focus:!border-green-500'

    return (
        <Controller
            control={control}
            rules={rules}
            render={({ fieldState, field }) => {
                const isTouched = fieldState.isTouched
                const isDirty = fieldState.isDirty
                const error = fieldState.invalid
                const success = !fieldState.invalid && !!field.value

                let validateIcon = null

                if (success) {
                    validateIcon = <Correct />
                } else if (error) {
                    validateIcon = <InCorrect />
                }

                return (
                    <div
                        className={classNames(
                            'min-w-[100px] min-h-[100px]',
                            'relative',
                            className
                        )}
                    >
                        <MatTextArea
                            {...field}
                            success={success}
                            error={error}
                            placeholder={placeholder}
                            labelProps={{
                                className: 'hidden'
                            }}
                            autoFocus={autoFocus}
                            className={classNames(
                                '!rounded-[14px]',
                                'bg-transparent',
                                baseClass,
                                inputClassName,
                                isTouched && error && errorClass,
                                isTouched && !error && successClass
                            )}
                            containerProps={{
                                className: 'h-full'
                            }}
                        />
                        <div className='absolute top-0 right-0 m-3'>
                            {validateIcon}
                        </div>
                        {error && <span>{fieldState.error?.message}</span>}
                    </div>
                )
            }}
            name={name}
        />
    )
}

export default TextareaInput

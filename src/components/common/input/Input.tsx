'use client'
import React, { Ref } from 'react'
import {
    Input as MatInput,
    InputProps as MatInputProps
} from '@material-tailwind/react'
import classNames from 'classnames'
import { Control, ControllerProps, useController } from 'react-hook-form'
import { useIMask } from 'react-imask'
import { Correct, InCorrect } from '../../ui/correct-or-incorrect'
import { isEmpty } from 'lodash'

type DynamicMask = MaskOptions & {
    mask?: string
}

type MaskOptions = {
    min?: number
    max?: number
    mask?: string | DynamicMask[] | NumberConstructor
    from?: number
    to?: number
    lazy?: boolean
    startsWith?: boolean
    normalizeZeros?: boolean
    thousandsSeparator?: string
    placeholderChar?: string
}

interface InputProps extends Partial<MatInputProps> {
    inputClassName?: string
    name: string
    control: Control<any>
    rules?: ControllerProps['rules']
    maskOptions?: MaskOptions
}

function Input({
    placeholder,
    autoFocus,
    className,
    inputClassName,
    icon,
    name,
    control,
    rules,
    maskOptions = {}
}: InputProps) {
    const { field, fieldState } = useController({ name, control, rules })
    const { ref: maskRef } = useIMask(
        {
            lazy: false,
            placeholderChar: 'x',
            normalizeZeros: true,
            scale: 2,
            radix: '.',
            ...(maskOptions as any)
        },
        {
            onAccept(value, ref) {
                field.onChange({ target: { value: ref.unmaskedValue } })
            }
        }
    )
    const baseClass = classNames(
        'border',
        'border-gray-400',
        'border-t-gray-400',
        'focus:!border-gray-400',
        'focus:!border',
        '!text-xl'
    )

    const error = fieldState.invalid
    const success = !fieldState.invalid && !!field.value

    let validateIcon = null

    if (success) {
        validateIcon = <Correct />
    } else if (error) {
        validateIcon = <InCorrect />
    }

    return (
        <div className={classNames('min-w-[100px]', 'h-[60px]', className)}>
            <MatInput
                inputRef={
                    !isEmpty(maskOptions)
                        ? (maskRef as Ref<HTMLInputElement>)
                        : field.ref
                }
                {...(!isEmpty(maskOptions) ? {} : field)}
                onBlur={field.onBlur}
                success={success}
                error={error}
                icon={validateIcon || icon}
                placeholder={placeholder}
                labelProps={{
                    className: 'hidden'
                }}
                autoFocus={autoFocus}
                className={classNames(
                    '!rounded-[14px]',
                    'bg-transparent',
                    baseClass,
                    inputClassName
                )}
                containerProps={{
                    className: 'h-full'
                }}
            />
            {error && <span>{fieldState.error?.message}</span>}
        </div>
    )
}

export default Input

import React from 'react'
import {
    Option,
    Select as MatSelect,
    SelectProps as MatSelectProps
} from '@material-tailwind/react'
import classNames from 'classnames'
import { Control, ControllerProps, useController } from 'react-hook-form'
import './styles.css'

export interface Option {
    text: string
    value: string
}

interface SelectProps {
    name: string
    selectProps?: Partial<MatSelectProps>
    options: Option[]
    className?: string
    placeholder?: string
    control: Control<any>
    rules?: ControllerProps['rules']
}

const Select: React.FC<SelectProps> = ({
    className,
    rules,
    placeholder,
    name,
    control,
    selectProps = {},
    options
}) => {
    const { field, fieldState } = useController({ name, control, rules })
    const baseClass = classNames(
        'border',
        'border-gray-400',
        'border-t-gray-400',
        'focus:!border-gray-400',
        'focus:!border',
        'rounded-[14px]',
        '!text-xl',
        'h-[60px]'
    )

    return (
        <div className='w-full'>
            <MatSelect
                containerProps={{
                    className: 'h-[60px] w-full tw-mat-select'
                }}
                error={fieldState.invalid}
                success={fieldState.isDirty}
                className={classNames(baseClass, className)}
                labelProps={{
                    className: 'hidden'
                }}
                menuProps={{
                    className: 'rounded-[14px]'
                }}
                placeholder={placeholder}
                {...field}
                {...(selectProps as any)}
            >
                {options.map((option, index) => (
                    <Option key={index} value={option.value}>
                        {option.text}
                    </Option>
                ))}
            </MatSelect>
        </div>
    )
}

export default Select

'use client'
import React, { PropsWithChildren } from 'react'

interface FlatButtonProps extends PropsWithChildren {
    onClick?: () => void
}

export default function FlatButton({ children, onClick }: FlatButtonProps) {
    return (
        <button
            type='button'
            onClick={onClick}
            className='flex h-[68px] w-full items-center font-normal justify-center rounded-full bg-primary px-5'
        >
            <span className='text-lg leading-normal lg:text-[20px]'>
                {children}
            </span>
        </button>
    )
}

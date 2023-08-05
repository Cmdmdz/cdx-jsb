'use client'
import React, { PropsWithChildren } from 'react'
import { Typography } from '@material-tailwind/react'

const FormHeader = ({ children }: PropsWithChildren) => {
    return (
        <Typography
            as='h1'
            className='h-[60px] text-primary text-xl font-medium flex items-center justify-center'
        >
            {children}
        </Typography>
    )
}

export default FormHeader

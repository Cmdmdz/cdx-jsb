'use client'
import { Typography } from '@material-tailwind/react'
import React from 'react'

export default function PlaceHolderCard({ isLoading = false }) {
    return (
        <div className='w-[300px] flex items-stretch flex-shrink-0 rounded-2xl overflow-hidden min-h-[372px] bg-gradient-to-t from-gray-400 to-gray-100'>
            <div className='w-full min-h-full bg-gray-200 animate-pulse flex items-center justify-center'>
                {!isLoading && (
                    <Typography className='text-gray-500 text-3xl font-medium'>
                        Coming soon
                    </Typography>
                )}
            </div>
        </div>
    )
}

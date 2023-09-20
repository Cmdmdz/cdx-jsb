// components/ChatPopup.tsx
'use client'
import React, { useState } from 'react'

const ButtonLine: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleButtons = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='fixed z-90 bottom-10 right-8 flex flex-col space-y-2'>
                <button
                    onClick={() =>
                        (window.location.href =
                            'https://line.me/ti/p/~@552szrln#~')
                    }
                    className={'w-16 h-16 rounded-full shadow-2xl'}
                >
                    <img src='/images/line.png' alt='Chat' />
                </button>
            </div>
        </div>
    )
}

export default ButtonLine

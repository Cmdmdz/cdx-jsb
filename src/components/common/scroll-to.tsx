'use client'
import React from 'react'
import {
    BsFillArrowDownCircleFill,
    BsFillArrowUpCircleFill
} from 'react-icons/bs'
import { useWindowScroll } from '@uidotdev/usehooks'

const ScrollToTopBottom = () => {
    const [{ x, y }, scrollTo] = useWindowScroll()
    const yValue = y || 0

    const scrollToTop = () => {
        scrollTo({ top: 0, behavior: 'smooth' })
    }

    const scrollToBottom = () => {
        if (window) {
            const { scrollHeight } = window.document.body
            scrollTo({
                top: scrollHeight,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className='fixed right-0 bottom-0 z-[9999] p-6 lg:p-10'>
            {yValue > 100 && (
                <button
                    onClick={scrollToTop}
                    className='w-14 lg:w-20 aspect-square'
                >
                    <BsFillArrowUpCircleFill className='w-full h-full drop-shadow-lg' />
                </button>
            )}
            {yValue < 100 && (
                <button
                    onClick={scrollToBottom}
                    className='w-14 lg:w-20 aspect-square'
                >
                    <BsFillArrowDownCircleFill className='w-full h-full drop-shadow-lg' />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopBottom

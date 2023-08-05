'use client'

import Link from 'next/link'
import { FaSearchPlus } from 'react-icons/fa'

export default function SeeAllButton(props: SeeAllButtonProps) {
    return (
        <Link
            href={props.href || '#'}
            className={`font-nunito inline-flex h-[175px] w-[175px] flex-col items-center justify-center gap-2.5 rounded-[100px] bg-white text-left font-semibold text-[#C1222F] drop-shadow-lg ${props.className}`}
            style={props.style}
        >
            <FaSearchPlus className='h-8 w-8' />
            <p className='text-[32px]'>ดูทั้งหมด</p>
        </Link>
    )
}

interface SeeAllButtonProps {
    className?: string
    style?: Object
    href?: string
}

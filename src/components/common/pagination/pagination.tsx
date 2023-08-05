'use client'
import { IconButton } from '@material-tailwind/react'

interface PaginationProps {
    length?: number
    currentPage?: number
    onPageChange: (page: number) => void
}

function Pagination({
    length = 0,
    currentPage,
    onPageChange
}: PaginationProps) {
    const getItemProps = (index: number) =>
        ({
            variant: 'filled',
            color: currentPage === index ? 'red' : 'blue-gray',
            onClick: () => onPageChange(index),
            className: 'rounded-full'
        }) as any

    if (length < 1) return null

    return (
        <div className='flex items-center gap-2 py-2'>
            {Array(length)
                .fill(null)
                .map((_, i) => (
                    <IconButton key={i} {...getItemProps(i + 1)}>
                        {i + 1}
                    </IconButton>
                ))}
        </div>
    )
}

export default Pagination

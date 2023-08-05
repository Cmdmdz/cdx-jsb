'use client'
import classNames from 'classnames'

export default function SectionHeader({
    style,
    className,
    id,
    title,
    reverse = false,
    titleClassName,
    onSeeAll
}: SectionHeaderProps) {
    return (
        <div
            id={id}
            className={classNames(
                'inline-flex',
                'h-20',
                'w-screen',

                'gap-2.5',
                'bg-[#C1222F]',
                'px-6',
                'text-center',
                'text-white',
                className
            )}
            style={style}
        >
            <div
                className={classNames(
                    'flex items-center justify-between w-full h-full max-w-screen-2xl m-auto',
                    reverse && '2xl:flex-row-reverse'
                )}
            >
                <span
                    className={classNames(
                        'text-2xl text-left leading-normal 2xl:w-[300px] 2xl:text-center',
                        titleClassName
                    )}
                >
                    {title}
                </span>
                {onSeeAll && (
                    <button
                        type='button'
                        className='text-2xl leading-norma 2xl:hidden'
                        onClick={onSeeAll}
                    >
                        ดูทั้งหมด +
                    </button>
                )}
            </div>
        </div>
    )
}

interface SectionHeaderProps {
    className?: string
    titleClassName?: string
    style?: Object
    id?: string
    title: string
    reverse?: boolean
    onSeeAll?: () => void
}

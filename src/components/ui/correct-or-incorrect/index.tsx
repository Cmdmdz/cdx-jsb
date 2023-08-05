import classNames from 'classnames'
import { FaCheck } from 'react-icons/fa'
import { IoAlert } from 'react-icons/io5'

interface CorrectnessProps {
    className?: string
}

export function InCorrect(props: { className?: string }) {
    return (
        <div
            className={classNames(
                'inline-flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-primary',
                'shadow-md shadow-red-500/50',
                props.className
            )}
        >
            <IoAlert className='h-[18px] text-white' />
        </div>
    )
}

export function Correct({ className }: CorrectnessProps) {
    return (
        <div
            className={classNames(
                'inline-flex flex-shrink-0 h-6 w-6 items-center justify-center rounded-full bg-green-500',
                'shadow-md shadow-green-500/50',
                className
            )}
        >
            <FaCheck className='h-3 w-3.5 text-white' />
        </div>
    )
}

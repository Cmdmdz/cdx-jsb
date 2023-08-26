import React, { FunctionComponent, PropsWithChildren } from 'react'

interface LoadingProps {
    children?: React.ReactNode
    /* Define your other props here */
}
const LoadingSpinner: FunctionComponent<
    PropsWithChildren<LoadingProps>
> = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500'></div>
        </div>
    )
}

export default LoadingSpinner

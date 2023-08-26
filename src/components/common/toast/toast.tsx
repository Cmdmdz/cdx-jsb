import React, { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

interface ToastProps {
    children?: React.ReactNode
    /* Define your other props here */
}

const Toast = (_: PropsWithChildren<ToastProps>) => {
    return <Toaster position='bottom-right' />
}

export default Toast

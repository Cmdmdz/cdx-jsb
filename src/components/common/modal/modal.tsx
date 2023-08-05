'use client'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Dialog
} from '@material-tailwind/react'
import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { CrossIcon } from '../icons'

interface ModalProps {
    isOpen: boolean
    handleOpen: (state: boolean) => void
    body: ReactElement
    footer: ReactElement
    className?: string
}

const Modal = ({
    isOpen = false,
    handleOpen = (state: boolean) => {},
    body,
    footer,
    className
}: ModalProps) => {
    return (
        <Dialog
            open={isOpen}
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.8, y: 100 }
            }}
            handler={handleOpen}
            className={classNames(
                'relative duration-150 !w-screen rounded-3xl !max-w-[90vw] bg-transparent shadow-sm,shadow-md,shadow-2xl !outline-none max-h-[95vh] flex flex-col xl:!max-w-[70vw]',
                className
            )}
        >
            <Button
                type='button'
                onClick={() => handleOpen(false)}
                variant='gradient'
                color='red'
                className='!absolute right-0 top-0 z-50 rounded-full p-2 translate-x-1/4 -translate-y-1/4'
            >
                <CrossIcon color='primary' />
            </Button>
            <Card className='flex-1 rounded-3xl overflow-auto'>
                {body && (
                    <CardBody className='p-0 relative w-full'>{body}</CardBody>
                )}
                <CardFooter className='relative top-0 p-0'>{footer}</CardFooter>
            </Card>
        </Dialog>
    )
}

export default Modal

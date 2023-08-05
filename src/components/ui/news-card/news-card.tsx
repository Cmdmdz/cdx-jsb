'use client'
import classNames from 'classnames'
import ImagePlaceholder from '@/components/common/image-placeholder'
import { Typography } from '@material-tailwind/react'
import { MouseEventHandler, useState } from 'react'
import Modal from '@/components/common/modal/modal'
import Youtube from 'react-youtube'
import { useYoutubeVideo } from '@/hooks/media/useYoutubeVideo'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import ScrollableImage from '@/components/common/scrollable-image'

export default function NewsCard({
    title,

    content,
    contentImageUrl: contentImage = [],
    thumbnailUrl: source,
    youtubeUrl,
    ...props
}: NewsCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    const { videoId: youtubeId, thumbnail: youtubeThumbnail } =
        useYoutubeVideo(youtubeUrl)

    const handleOpen = (state: boolean) => setIsOpen(state)

    const onClickCard: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        handleOpen(true)
    }

    return (
        <>
            <div
                className={classNames(
                    'flex',
                    'h-auto',
                    'w-[300px]',
                    'items-center',
                    'flex-shrink-0',
                    'justify-center',
                    'cursor-pointer',
                    'text-black',
                    'rounded-[20px] overflow-hidden',
                    'shadow-xl',
                    props.className
                )}
                onClick={onClickCard}
                style={props.style}
            >
                <div className='h-full w-full bg-white drop-shadow-lg'>
                    <div className='relative w-[300px] h-[300px] bg-black flex-1 flex-shrink-0 overflow-hidden mb-2'>
                        {youtubeThumbnail ? (
                            <div className='relative w-full h-full'>
                                <div className='absolute left-0 bottom-0 flex z-30 px-3 pb-1 opacity-50'>
                                    <BsFillPlayBtnFill className='h-14 w-auto fill-white' />
                                </div>
                                <ImagePlaceholder
                                    src={youtubeThumbnail}
                                    alt='youtube thumbnail'
                                    className='object-scale-down z-10 backdrop-blur-md'
                                />
                                <ImagePlaceholder
                                    src={youtubeThumbnail}
                                    alt='youtube thumbnail'
                                    className='object-fill'
                                />
                            </div>
                        ) : (
                            source && (
                                <ImagePlaceholder
                                    src={source}
                                    alt='thumbnail'
                                    className='object-top'
                                />
                            )
                        )}
                    </div>
                    <div className='font-medium px-4 text-gray-900'>
                        <p
                            className={classNames(
                                'bottom-[18px] left-2.5 text-xl leading-normal',
                                content ? 'line-clamp-1' : 'line-clamp-2'
                            )}
                        >
                            {title}
                        </p>
                    </div>
                    <div className='flex p-2 px-4 text-xs'>
                        <span className='flex-1 leading-normal line-clamp-1 whitespace-pre-wrap text-gray-900 font-thin'>
                            {content}
                        </span>
                        {content && (
                            <a
                                className='font-medium cursor-pointer'
                                onClick={() => handleOpen(true)}
                            >
                                (อ่านต่อ...)
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                handleOpen={handleOpen}
                body={
                    youtubeId ? (
                        <Youtube
                            videoId={youtubeId}
                            iframeClassName='w-full h-full'
                            className='w-full object-fill aspect-video'
                        />
                    ) : (
                        <ScrollableImage urls={contentImage} />
                    )
                }
                footer={
                    <div className='relative py-4'>
                        {title && (
                            <Typography
                                as='div'
                                className='sticky rounded-t-3xl top-0 bottom-0 text-center bg-white/30 whitespace-pre-wrap backdrop-blur px-6 py-4 text-2xl font-medium line-clamp-2'
                            >
                                {title}
                            </Typography>
                        )}
                        {content && (
                            <Typography className='text-base px-6 whitespace-pre-wrap'>
                                {content}
                            </Typography>
                        )}
                    </div>
                }
            />
        </>
    )
}

interface NewsCardProps {
    className?: string
    style?: Object
    title?: string
    content?: string
    thumbnailUrl?: string
    contentImageUrl?: string[]
    youtubeUrl?: string
}

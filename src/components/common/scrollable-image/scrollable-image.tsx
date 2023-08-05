import ImagePlaceholder from '@/components/common/image-placeholder'
import Pagination from '@/components/common/pagination'
import { useEffect, useState } from 'react'
import useElementScroll from '@/hooks/element/useElementScroll'

interface ScrollableImageProps {
    urls: string[]
}

const ScrollableImage = ({ urls = [] }: ScrollableImageProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const { ref: scrollDivRef, x: scrollX } = useElementScroll<HTMLDivElement>()

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        const scrollWidth = scrollDivRef?.current?.scrollWidth ?? 0

        const pageWidth = scrollWidth / urls.length

        if (scrollDivRef.current) {
            scrollDivRef.current.scrollTo({
                left: pageWidth * (page - 1),
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        const scrollWidth = scrollDivRef?.current?.scrollWidth ?? 0
        const pageWidth = scrollWidth / urls.length

        const newPage = Math.floor(
            Math.max(0, Math.min(scrollX / pageWidth + 1, urls.length))
        )
        setCurrentPage((prev) => {
            if (prev !== newPage) return newPage
            return prev
        })
    }, [scrollDivRef, scrollX, urls.length])

    return (
        <div className='relative'>
            <div className='absolute bottom-0 w-full flex justify-center z-50'>
                <Pagination
                    length={urls.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
            <div
                ref={scrollDivRef}
                className='flex overflow-x-auto snap-x snap-mandatory relative hidden-scrollbar'
            >
                {urls.map((url, i) => (
                    <div
                        key={i}
                        className='snap-center flex-shrink-0 w-full h-[40vh] relative lg:h-[50vh]'
                    >
                        <ImagePlaceholder
                            src={url}
                            alt='image content'
                            className='!object-contain z-10'
                        />
                        <ImagePlaceholder
                            src={url}
                            alt='image content'
                            className='!object-cover z-0 blur-md opacity-50'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ScrollableImage

import classNames from 'classnames'
import Image from 'next/image'

interface ImagePlaceholderProps {
    src: any
    alt: string
    className?: string
    fill?: boolean
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    src,
    alt,
    className,
    fill = true
}) => {
    if (!src) return
    return (
        <Image
            src={src}
            blurDataURL={
                typeof src === 'string' ? '/images/placeholder.png' : undefined
            }
            placeholder='blur'
            alt={alt}
            fill={fill}
            className={classNames('object-cover', className)}
        />
    )
}

export default ImagePlaceholder

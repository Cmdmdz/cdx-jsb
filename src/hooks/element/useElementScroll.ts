import { useEffect, useRef, useState } from 'react'

const useElementScroll = <T extends HTMLElement>() => {
    const ref = useRef<T>(null)
    const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { scrollLeft, scrollTop } = ref.current
                setScrollPosition({ x: scrollLeft, y: scrollTop })
            }
        }

        if (ref.current) {
            ref.current.addEventListener('scroll', handleScroll, {
                passive: true
            })
        }

        return () => {
            if (ref.current) {
                ref.current.removeEventListener('scroll', handleScroll)
            }
        }
    }, [ref])

    return {
        ref,
        ...scrollPosition
    }
}

export default useElementScroll

'use client'
import React, {
    ReactElement,
    useLayoutEffect,
    useMemo,
    useRef,
    useState
} from 'react'
import {
    Collapse,
    Navbar as MatNavbar,
    Typography
} from '@material-tailwind/react'
import Image from 'next/image'
import StopGamblingLogo from '@/assets/vectors/horizontal-logo.svg'
import {
    CrossIcon,
    FileEditIcon,
    HomeAltIcon,
    MenuIcon,
    NewsPaperOutlineIcon
} from '../icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

interface NavItem {
    text: string
    collapseText?: string
    icon?: ReactElement
    path: string
}

interface NavListProps {
    onClickLink?(): void
}

function NavList({ onClickLink }: NavListProps) {
    const pathname = usePathname()
    const navItems = useMemo<NavItem[]>(
        () => [
            {
                text: 'หน้าหลัก',
                icon: <HomeAltIcon className='w-8 h-8' />,
                path: '/'
            },
            {
                text: 'แจ้งเบาะแสเว็บพนัน',
                collapseText: 'แจ้งเบาะแส',
                icon: <FileEditIcon className='w-8 h-8' />,
                path: '/report-gambling'
            },
            {
                text: 'ผู้เสียหายร้องเรียนพนัน',
                collapseText: 'ร้องเรียน',
                icon: <FileEditIcon className='w-8 h-8' />,
                path: '/report-appeal'
            },
            {
                text: 'รณรงณ์ / ข่าวสาร',
                icon: <NewsPaperOutlineIcon className='w-8 h-8' />,
                path: '/news'
            }
        ],
        []
    )

    const activeNavClasses = 'bg-primary text-white fill-color'

    return (
        <ul className='flex flex-col lg:flex-row z-50 divide-x divide-gray-100'>
            {navItems.map((item, i) => (
                <Link
                    key={i}
                    onClick={onClickLink}
                    href={item.path}
                    className={classNames(
                        'px-4 font-normal h-[68px] w-full flex gap-2.5 items-center text-gray-900',
                        'hover:bg-primary hover:text-white transition-all',
                        pathname === item.path && activeNavClasses
                    )}
                >
                    <span>{item.icon}</span>
                    <Typography className='lg:hidden xl:inline whitespace-nowrap'>
                        {item.text}
                    </Typography>
                    <Typography className='hidden lg:inline xl:hidden whitespace-nowrap'>
                        {item.collapseText || item.text}
                    </Typography>
                </Link>
            ))}
        </ul>
    )
}

export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null)

    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

    useLayoutEffect(() => {
        const handler = (e: MouseEvent) => {
            if (navRef.current) {
                if (!navRef.current.contains(e.target as any)) {
                    setIsOpenMobileMenu(false)
                }
            }
        }

        document.addEventListener('mousedown', handler)

        return document.removeEventListener('mousedown', handler)
    }, [])

    return (
        <MatNavbar
            ref={navRef}
            className='sticky top-0 z-10 flex shadow-2xl shadow-black/[0.08] rounded-none w-screen min-h-[68px] !max-w-none p-0 h-auto border-none'
        >
            <div className='w-full max-w-screen-2xl shadow-none rounded-none py-0 px-[18px] items-center m-auto'>
                <div className='flex w-full h-[68px] relative items-center justify-between text-blue-gray-900'>
                    <button
                        className='flex h-fit self-center lg:hidden'
                        onClick={() => setIsOpenMobileMenu((prev) => !prev)}
                    >
                        {!isOpenMobileMenu ? (
                            <MenuIcon className='w-8 h-auto text-primary' />
                        ) : (
                            <CrossIcon className='w-8 h-auto text-primary' />
                        )}
                    </button>
                    <div className='py-2.5 flex-shrink-0 lg:absolute'>
                        <Image
                            src={StopGamblingLogo}
                            alt='web-logo'
                            className='h-full'
                        />
                    </div>
                    <div className='hidden lg:block m-auto'>
                        <NavList />
                    </div>
                </div>
                <Collapse
                    open={isOpenMobileMenu}
                    className='-mx-[18px] w-screen lg:hidden'
                >
                    <NavList onClickLink={() => setIsOpenMobileMenu(false)} />
                </Collapse>
            </div>
        </MatNavbar>
    )
}

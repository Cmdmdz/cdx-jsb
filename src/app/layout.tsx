import './globals.css'
import type { Metadata } from 'next'
import { Kanit, Poppins } from 'next/font/google'
import Navbar from '@/components/common/navbar/navbar'
import classNames from 'classnames'
import ThemeProvider from '@/components/common/theme-provider'
import Footer from '@/components/common/footer/footer'
import ScrollToTopBottom from '@/components/common/scroll-to'
import { themeConfig } from '@/config/theme'
import { Toaster } from 'react-hot-toast'

const kanit = Kanit({
    subsets: ['latin'],
    variable: '--font-kanit',
    weight: ['300', '400', '500', '600', '700']
})

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: 'Just Stop Gambling',
    description: 'แจ้งเบาะแสเว็บพนัน / ร้องเรียนพนัน'
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html
            lang='en'
            className={classNames(kanit.variable, poppins.variable)}
        >
            <body className='min-h-screen bg-white'>
                <Toaster />
                <ThemeProvider value={themeConfig}>
                    <ScrollToTopBottom />
                    <div className='min-h-screen flex flex-col'>
                        <Navbar />
                        <div className='flex flex-col flex-1'>
                            {children}
                            <div className='mt-auto w-screen'>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    )
}

import { textarea, TextareaStylesType } from '@material-tailwind/react'

export const textareaTheme: TextareaStylesType = {
    styles: {
        variants: {
            outlined: {
                base: {
                    textarea: ['border-t-gray-400']
                },
                success: {
                    textarea: [
                        'border-transparent shadow-lg shadow-green-500/20',
                        'border !border-green-500 focus:!border-green-500'
                    ]
                },
                error: {
                    textarea: [
                        'border-transparent shadow-lg shadow-red-500/20',
                        'border !border-red-500 focus:!border-red-500'
                    ]
                }
            },
            standard: textarea.styles?.variants?.standard!,
            static: textarea.styles?.variants?.static!
        }
    }
}

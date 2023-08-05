import { SelectStylesType } from '@material-tailwind/react'
import { select } from '@material-tailwind/react/theme'

export const selectTheme: SelectStylesType = {
    styles: {
        base: {
            arrow: {
                active: [select.styles?.base?.arrow?.active, 'w-6 h-6']
            }
        },
        variants: {
            outlined: {
                base: {
                    select: ['border-t-gray-400']
                },
                success: {
                    select: {
                        initial: [
                            'border-transparent shadow-lg shadow-green-500/20',
                            'border !border-green-500 focus:!border-green-500'
                        ]
                    }
                },
                error: {
                    select: {
                        initial: [
                            'border-transparent shadow-lg shadow-red-500/20',
                            'border !border-red-500 focus:!border-red-500'
                        ]
                    }
                }
            },
            standard: select.styles?.variants?.standard!,
            static: select.styles?.variants?.static!
        }
    }
}

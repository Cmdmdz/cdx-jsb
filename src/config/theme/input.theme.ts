import { input, InputStylesType } from '@material-tailwind/react/theme'

export const inputTheme: InputStylesType = {
    styles: {
        base: {
            icon: [input.styles?.base?.icon, 'w-6 h-6']
        },
        variants: {
            outlined: {
                base: {
                    input: ['border-t-gray-400']
                },
                success: {
                    input: [
                        'border-transparent shadow-lg shadow-green-500/20',
                        'border !border-green-500 focus:!border-green-500'
                    ]
                },
                error: {
                    input: [
                        'border-transparent shadow-lg shadow-red-500/20',
                        'border !border-red-500 focus:!border-red-500'
                    ]
                }
            },
            standard: input.styles?.variants?.standard!,
            static: input.styles?.variants?.static!
        }
    }
}

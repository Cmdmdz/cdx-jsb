import { dialog, DialogStylesType } from '@material-tailwind/react/theme'

export const dialogTheme: DialogStylesType = {
    styles: {
        base: {
            backdrop: [dialog.styles?.base?.backdrop, 'bg-white/25']
        }
    }
}

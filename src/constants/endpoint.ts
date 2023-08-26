const BASE_URL = 'https://c.juststopgambling.com'

export const INVITER_OPTIONS = BASE_URL + '/api/inviter-options'
export const INVITE_TUNNEL_OPTIONS = BASE_URL + '/api/invite-tunnel-options'
export const GAMBLING_TYPE_OPTIONS = BASE_URL + '/api/gambling-type-options'
export const UPLOAD_FILE = BASE_URL + '/api/upload'
export const CREATE_FORM = BASE_URL + '/api/forms'

export const GET_NEWS =
    BASE_URL + '/api/articles?filters[category][$eq]=news&populate=*'
export const GET_CAMPAIGN =
    BASE_URL + '/api/articles?filters[category][$eq]=campaign&populate=*'

export function prependBaseUrl(url: string): string {
    return BASE_URL + url
}

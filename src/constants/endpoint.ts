const BASE_URL = 'http://localhost:3001'

export const INVITER_OPTIONS = BASE_URL + '/api/inviter-options'
export const INVITE_TUNNEL_OPTIONS = BASE_URL + '/api/invite-tunnel-options'
export const GAMBLING_TYPE_OPTIONS = BASE_URL + '/api/gambling-type-options'
export const UPLOAD_FILE = BASE_URL + '/api/upload'
export const CREATE_FORM = BASE_URL + '/api/forms'
export const PERIOD_OPTIONS = BASE_URL + '/api/period-options'
export const CAUSE_OPTIONS = BASE_URL + '/api/cause-options'
export const REASON_OPTIONS = BASE_URL + '/api/reason-options'

export const GET_NEWS =
    BASE_URL + '/api/articles?filters[category][$eq]=news&populate=*'
export const GET_CAMPAIGN =
    BASE_URL + '/api/articles?filters[category][$eq]=campaign&populate=*'

export function prependBaseUrl(url: string): string {
    return BASE_URL + url
}

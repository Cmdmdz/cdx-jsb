import axios from 'axios'
import { TypeOption, TypeOptionsResponse } from '@/constants/common-type'
import { INVITE_TUNNEL_OPTIONS } from '@/constants/endpoint'

export default async function fetchInviteTunnelOptions(): Promise<
    TypeOption[]
> {
    try {
        const response = await axios.get<TypeOptionsResponse>(
            INVITE_TUNNEL_OPTIONS
        )
        return response.data.data
    } catch (error) {
        throw error
    }
}

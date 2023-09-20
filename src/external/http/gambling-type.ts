import axios from 'axios'
import { TypeOption, TypeOptionsResponse } from '@/constants/common-type'
import { GAMBLING_TYPE_OPTIONS } from '@/constants/endpoint'

export default async function fetchGamblingTypeOptions(): Promise<
    TypeOption[]
> {
    try {
        const response = await axios.get<TypeOptionsResponse>(
            GAMBLING_TYPE_OPTIONS
        )
        return response.data.data
    } catch (error) {
        throw error
    }
}

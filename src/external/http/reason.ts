import axios from 'axios'
import { TypeOption, TypeOptionsResponse } from '@/constants/common-type'
import { REASON_OPTIONS } from '@/constants/endpoint'

export default async function fetchReasonOptions(): Promise<TypeOption[]> {
    try {
        const response = await axios.get<TypeOptionsResponse>(REASON_OPTIONS)
        return response.data.data
    } catch (error) {
        throw error
    }
}

import axios from 'axios'
import { TypeOption, TypeOptionsResponse } from '@/constants/common-type'
import { PERIOD_OPTIONS } from '@/constants/endpoint'

export default async function fetchPeriodOptions(): Promise<TypeOption[]> {
    try {
        const response = await axios.get<TypeOptionsResponse>(PERIOD_OPTIONS)
        return response.data.data
    } catch (error) {
        throw error
    }
}

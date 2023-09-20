import axios from 'axios'
import { TypeOption, TypeOptionsResponse } from '@/constants/common-type'
import { CAUSE_OPTIONS } from '@/constants/endpoint'

export default async function fetchCauseOptions(): Promise<TypeOption[]> {
    try {
        const response = await axios.get<TypeOptionsResponse>(CAUSE_OPTIONS)
        return response.data.data
    } catch (error) {
        throw error
    }
}

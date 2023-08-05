import axios from 'axios';
import {TypeOption, TypeOptionsResponse} from "@/constants/common-type";
import {INVITER_OPTIONS} from "@/constants/endpoint";


export default async function fetchInviterTypeOptions(): Promise<TypeOption[]> {
    try {
        const response = await axios.get<TypeOptionsResponse>(INVITER_OPTIONS);
        return response.data.data;
    } catch (error) {
        console.error('Failed to fetch gambling type options', error);
        throw error;
    }
};


import axios from 'axios';

// upload the file to your API
interface FileFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
}

interface Evidence {
    id: number;
    name: string;
    alternativeText: null | string;
    caption: null | string;
    width: number;
    height: number;
    formats: {
        large: FileFormat;
        small: FileFormat;
        medium: FileFormat;
        thumbnail: FileFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null | string;
    provider: string;
    provider_metadata: null | string;
    createdAt: string;
    updatedAt: string;
}

interface Connection {
    id: number;
    position: {
        end: boolean;
    };
}

interface FormRequest {
    website_url: string;
    description: string;
    damage_value: number;
    callback_agreement: boolean;
    locale: string;
    evidences: Evidence[];
    type: {
        disconnect: any[];
        connect: Connection[];
    };
    gambling_type: {
        disconnect: any[];
        connect: Connection[];
    };
    inviter: {
        disconnect: any[];
        connect: Connection[];
    };
    tunnel: {
        disconnect: any[];
        connect: Connection[];
    };
}


export const createForm = async (file: File, req: FormRequest) => {
    const formData = new FormData();
    formData.append('files', file);
    try {
        const response = await axios.post('http://localhost:/api/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log(response.data);

        const formReqData = {
            ...req,
            evidences: response.data
        };
        await axios.post('http://localhost:/api/forms', formReqData);

    } catch (err) {
        console.error(err);
    }
};

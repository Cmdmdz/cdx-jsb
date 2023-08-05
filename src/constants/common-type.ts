interface TypeAttributes {
    label: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface TypeOption {
    id: number;
    attributes: TypeAttributes;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

interface Meta {
    pagination: Pagination;
}

export interface TypeOptionsResponse {
    data: TypeOption[];
    meta: Meta;
}
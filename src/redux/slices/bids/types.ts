export type BidsDataType = {
    id: number,
    firstName: string,
    lastName: string,
    phone: string,
    createdAt: string,
    updatedAt: string
};

export type EditBidsDataType = {
    firstName: string,
    lastName: string,
    phone: string,
    isReaded: boolean
};

export type BidsInitioalStateTypes = {
    loading: boolean
    bidsData: BidsDataType[] | null
}



export type OfferDataType = {
    id: number,
    image: string,
}

export type CreateOfferDataType = {
    image: string,
}


export type HomeCreateSliterType = {
    image: string,
    mobile_image: string,
    titleAm: string,
    titleRu: string,
    titleEn: string,
    subTitleAm: string,
    subTitleRu: string,
    subTitleEn: string,
}

export type HomeSliterNamesType = {
    id: number,
    titleAm: string;
}

export type OfferInitialStateTypes = {
    loading: boolean,
    allOfferData: OfferDataType[] | [],
    offerForCreate: CreateOfferDataType
}

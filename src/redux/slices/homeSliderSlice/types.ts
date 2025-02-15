

export type HomeSliterType = {
    id: number,
    image: string,
    mobile_image: string,
    titleAm: string,
    titleRu: string,
    titleEn: string,
    subTitleAm: string,
    subTitleRu: string,
    subTitleEn: string,
    createdAt: null,
    updatedAt: null
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

export type HomeStateTypes = {
    sliderData: HomeSliterType | null;
    sliderNames: HomeSliterNamesType[];
    currentSlider: HomeSliterType | null,
    createSliderData: HomeCreateSliterType,
    loading: boolean
}

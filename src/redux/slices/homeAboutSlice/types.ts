

export type HomeAboutUsShortType = {
    image_1: string,
    image_2: string,
    image_3: string,
    image_4: string,
    textAm: string,
    textEn: string,
    textRu: string,
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
    // sliderData: HomeSliterType | null;
    // sliderNames: HomeSliterNamesType[];
    // currentSlider: HomeSliterType | null,
    // createSliderData: HomeCreateSliterType,
    loading: boolean
    currentAboutUsData: HomeAboutUsShortType | null
}

export type AboutDataType = {
    image_11: string,
    image_12: string,
    image_13: string,
    image_14: string,
    image_21: string,
    image_22: string,
    image_23: string,
    image_24: string,
    textAm_1: string,
    textAm_2: string,
    textEn_1: string,
    textEn_2: string,
    textRu_1: string,
    textRu_2: string,
}


export type AboutInitialState = {
    aboutData: AboutDataType | null,
    loading: boolean,
}
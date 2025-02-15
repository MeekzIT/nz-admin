interface InterfaceImages {
    id: number
    image: string
}

export type MapCreateImagesTypes = {
    imagesData: InterfaceImages[] | []
    setImageIdForDlete: (id: number) => void
}
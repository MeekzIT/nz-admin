import { ActionCreatorWithPayload } from "@reduxjs/toolkit";


export type TapsForChangeImagesComponentProps = {
    tabDataForMap: {
        value: string;
        label: string;
    }[],
    dataForChange: object,
    forCreateFlag?: boolean,
    onChangeImageInObject: ActionCreatorWithPayload<{ key: string; text: string; forCreateFlag?: boolean; }>
}
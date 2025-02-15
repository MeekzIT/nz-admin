import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

interface ITabDataForMap {
    value: string,
    label: string
}

export type TapsComponentProps = {
    dataForChange: object,
    tabDataForMap: ITabDataForMap[],
    forCreateFlag?: boolean
    handleChangeProjectData: ActionCreatorWithPayload<{
        key: string;
        text: string;
        forCreateFlag?: boolean;
    }>
}
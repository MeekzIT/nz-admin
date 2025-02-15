import { Tabs, Tab, Avatar, Box } from '@mui/material'
import React, { useState } from 'react'
import { TapsForChangeImagesComponentProps } from './types';
import ImageModalComponent from '../imageUploadModal';
import { useAppDispatch } from '../../../redux/hooke';
import { getValue, isEmptyObject } from '../../../utils/objectUtils';

const TapsForChangeImagesComponent = ({ tabDataForMap, dataForChange, onChangeImageInObject, forCreateFlag = false }: TapsForChangeImagesComponentProps) => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [value, setValue] = useState<string>(Object.values(tabDataForMap)[0].value || "");
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const handleChangeImgaeFild = (newValue: string) => {
        dispatch(onChangeImageInObject({ key: value, text: newValue, forCreateFlag }))
        setIsOpenModal(false)
    }

    return (
        <>
            {
                !isEmptyObject(dataForChange) &&
                <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="secondary tabs example"
                    >
                        {tabDataForMap.map((tab) => {
                            return (
                                <Tab value={tab.value} label={tab.label} key={tab.label} />
                            )
                        })}
                    </Tabs>

                    <Box onClick={() => setIsOpenModal(true)} sx={{ display: "flex", justifyContent: "center", m: 5 }}>
                        <Avatar src={getValue(value, dataForChange)} sx={{ width: 200, height: 200 }} variant="square" />
                    </Box>

                    <ImageModalComponent
                        open={isOpenModal}
                        handleClose={() => setIsOpenModal(false)}
                        handleImageChange={handleChangeImgaeFild}
                        name="qurduli"
                    />
                </Box>
            }
        </>
    )
}

export default TapsForChangeImagesComponent

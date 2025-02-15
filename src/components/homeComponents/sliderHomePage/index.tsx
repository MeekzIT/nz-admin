import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooke'
import { fetchCreateSlider, fetchDeleteSlider, fetchEditSlider, fetchGetSliderData, fetchGetSlidersData } from '../../../redux/slices/homeSliderSlice/fetchService'
import Loader from '../../common/loader'
import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material'
import { BlockWithBackgroundBlend, Container, PageTitle } from '../../../commonStyles'
import TapsForChangeTextComponent from '../../common/tapsForChangeTextComponent'
import { isEmptyObject } from '../../../utils/objectUtils'
import { sliderImageTypeKeys, sliderTypeKeys } from './constants'
import { handleChangeTextFilds, resetStates } from '../../../redux/slices/homeSliderSlice'
import TapsForChangeImagesComponent from '../../common/tapsForChangeImagesComponent'
import QuestionModel from '../../common/questionModel'
import BaseModal from '../../common/modal'

const SliderHomePage = () => {
    const dispatch = useAppDispatch()
    const { sliderNames, currentSlider, loading, createSliderData } = useAppSelector((state) => state.home)

    const [currentSliderID, setCurrentSliderID] = useState<number | string>("")
    const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [isOpenCreateProjectModal, setIsOpenCreateProjectModal] = useState(false)



    useEffect(() => {
        if (sliderNames.length > 0) {
            setCurrentSliderID(sliderNames[0].id)
        }
    }, [sliderNames])

    useEffect(() => {
        dispatch(fetchGetSlidersData())
    }, [dispatch])

    useEffect(() => {
        if (currentSliderID) {
            dispatch(fetchGetSliderData(Number(currentSliderID)))
        }
    }, [currentSliderID, dispatch])


    const handleChangeCurrentSlider = (event: SelectChangeEvent) => {
        setCurrentSliderID(event.target.value as string);
    };


    const deleteSlider = () => {
        dispatch(fetchDeleteSlider(Number(currentSliderID))).then(() => {
            // dispatch(resetStates())
            dispatch(fetchGetSlidersData())
        })
    }

    const saveDataHandler = () => {
        if (currentSliderID && currentSlider) {
            dispatch(fetchEditSlider({ id: Number(currentSliderID), data: currentSlider }))
        }
    }

    const createNewSlider = () => {
        dispatch(fetchCreateSlider(createSliderData)).then(() => {
            dispatch(fetchGetSlidersData())
        })
        setIsOpenCreateProjectModal(false)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Box >
            <PageTitle>Լուսանկարների սլայդեր</PageTitle>
            <Button sx={{ textAlign: "right", mb: 3 }} variant="contained" onClick={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}>Ավելացրեք սլայդերը</Button>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Slider</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={currentSliderID.toString()}
                        label="Slider"
                        onChange={handleChangeCurrentSlider}
                    >
                        {sliderNames.length && sliderNames.map((product) => {
                            return (
                                <MenuItem value={product.id} key={product.id}>{product.titleAm}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Box>
            {!isEmptyObject(currentSlider) &&
                <Container>
                    <BlockWithBackgroundBlend>
                        <TapsForChangeTextComponent
                            handleChangeProjectData={handleChangeTextFilds}
                            tabDataForMap={sliderTypeKeys}
                            dataForChange={currentSlider!}
                        />
                    </BlockWithBackgroundBlend>

                    <BlockWithBackgroundBlend>
                        <PageTitle>Լուսանկարներ</PageTitle>
                        <TapsForChangeImagesComponent tabDataForMap={sliderImageTypeKeys} dataForChange={currentSlider!} onChangeImageInObject={handleChangeTextFilds} />
                    </BlockWithBackgroundBlend>

                    <BlockWithBackgroundBlend sx={{ display: "flex", gap: 1 }}>
                        <Button variant="contained" onClick={saveDataHandler} sx={{ p: 2, width: "100%" }} color="success">Պահպանել</Button>
                        <Button variant="contained" onClick={() => setIsOpenDeleteModal(true)} sx={{ p: 2, width: "100%" }} color="error">Ջնջել նախագիծը</Button>
                    </BlockWithBackgroundBlend>
                </Container>}

            <QuestionModel
                actionHandler={deleteSlider}
                handleClose={() => setIsOpenDeleteModal(false)}
                isOpenDeleteModal={isOpenDeleteModal}
                title="Դուք իսկապես ցանկանում եք ջնջել սլայդերը?"
            />

            <BaseModal
                isOpen={isOpenCreateProjectModal}
                handleClose={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}
                title="Ավելացնել նոր սլայդեր"
            >
                <Box m={2}>
                    <TapsForChangeTextComponent
                        handleChangeProjectData={handleChangeTextFilds}
                        tabDataForMap={sliderTypeKeys}
                        dataForChange={createSliderData}
                        forCreateFlag
                    />
                    <TapsForChangeImagesComponent
                        tabDataForMap={sliderImageTypeKeys}
                        dataForChange={createSliderData}
                        onChangeImageInObject={handleChangeTextFilds}
                        forCreateFlag
                    />
                    <Button variant="contained" onClick={createNewSlider}>Պահպանել</Button>
                </Box>
            </BaseModal>
        </Box>
    )
}

export default SliderHomePage

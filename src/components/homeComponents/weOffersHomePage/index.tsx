import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooke'
import { fetchCreateOfferData, fetchDeleteOfferData, fetchGetOfferData } from '../../../redux/slices/homeOffers/fetchService'
import MapCreateImages from '../../mapImagesData'
import AddImageBlock from '../../common/addImageBlock'
import { Box, Button } from '@mui/material'
import BaseModal from '../../common/modal'
import TapsForChangeImagesComponent from '../../common/tapsForChangeImagesComponent'
import { PageTitle } from '../../../commonStyles'
import { offerImageKey } from './constants'
import { handleChangeTextFildsOffer, resetOfferForCreateData } from '../../../redux/slices/homeOffers'
import Loader from '../../common/loader'
import QuestionModel from '../../common/questionModel'

const WeOffersHomePage = () => {
    const dispatch = useAppDispatch()
    const { allOfferData, offerForCreate, loading } = useAppSelector((state) => state.homeOffer)
    const [isOpenCreateProjectModal, setIsOpenCreateProjectModal] = useState(false)
    const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false)
    const [imageIdForDlete, setImageIdForDlete] = useState<number | null>(null)


    useEffect(() => {
        dispatch(fetchGetOfferData())
    }, [dispatch])

    const createOfferHandler = () => {
        dispatch(fetchCreateOfferData(offerForCreate)).then(() => {
            dispatch(fetchGetOfferData())
            setIsOpenCreateProjectModal(false)
            dispatch(resetOfferForCreateData())
        })
    }

    const deleteOffer = () => {
        if (imageIdForDlete) {
            dispatch(fetchDeleteOfferData(imageIdForDlete)).then(() => {
                dispatch(fetchGetOfferData())
                setIsOpenQuestionModal(false)
            })
        }
    }

    const setImageIdOpenQuestionModal = (id: number) => {
        setIsOpenQuestionModal(true)
        setImageIdForDlete(id)
    }

    if (loading) {
        return <Loader />
    }

    return (
        <Box>
            <PageTitle>Մենք առաջարկում ենք</PageTitle>
            <Box sx={{ display: "flex", gap: 2 }}>
                <MapCreateImages imagesData={allOfferData} setImageIdForDlete={setImageIdOpenQuestionModal} />
                <AddImageBlock action={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)} />
            </Box>

            <QuestionModel
                title='Ջնջել լուսանկարը'
                isOpenDeleteModal={isOpenQuestionModal}
                handleClose={() => setIsOpenQuestionModal(false)}
                actionHandler={deleteOffer}
            />

            <BaseModal
                isOpen={isOpenCreateProjectModal}
                handleClose={() => setIsOpenCreateProjectModal(!isOpenCreateProjectModal)}
                title="Ավելացնել նոր լուսանկար"
            >
                <Box m={2}>

                    <TapsForChangeImagesComponent
                        tabDataForMap={offerImageKey}
                        dataForChange={offerForCreate}
                        onChangeImageInObject={handleChangeTextFildsOffer}
                        forCreateFlag
                    />
                    <Button variant="contained" onClick={createOfferHandler}>Պահպանել</Button>
                </Box>
            </BaseModal>
        </Box>
    )
}

export default WeOffersHomePage

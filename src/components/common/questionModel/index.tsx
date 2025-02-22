import React from 'react'
import { Box, Button } from '@mui/material'
import BaseModal from '../modal'
import { useAppDispatch, useAppSelector } from '../../../redux/hooke'
import { resetQuestionModalData, toggleModalStatus } from '../../../redux/slices/questionModalSlice'
import { FetchDeleteContact } from '../../../redux/slices/contactsSlice/fetchService'
import { QuestionModalActions } from '../../../types'
import { fetchDeleteSlider } from '../../../redux/slices/homeSliderSlice/fetchService'
import { fetchDeleteOfferData } from '../../../redux/slices/homeOffers/fetchService'
import { fetchDeleteProject } from '../../../redux/slices/projectsSlice/fetchService'
import { FetchDeleteBid } from '../../../redux/slices/bids/fetchService'

const QuestionModel = () => {
    const dispatch = useAppDispatch()
    const { isOpenModal, title, actionKey, elemetId } = useAppSelector((state) => state.questionModal)

    const actionsMap: Record<string, () => void> = {
        [QuestionModalActions.DELETE_CONTACT]: () =>
            elemetId ? dispatch(FetchDeleteContact(elemetId)) : () => { },
        [QuestionModalActions.DELETE_SLIDER]: () =>
            elemetId ? dispatch(fetchDeleteSlider(Number(elemetId))) : () => { },
        [QuestionModalActions.DELETE_OFFER]: () =>
            elemetId ? dispatch(fetchDeleteOfferData(elemetId)) : () => { },
        [QuestionModalActions.DELETE_PROJECT]: () =>
            elemetId ? dispatch(fetchDeleteProject(elemetId)) : () => { },
        [QuestionModalActions.DELETE_BID]: () =>
            elemetId ? dispatch(FetchDeleteBid(elemetId)) : () => { },
    };

    const handleConfirm = () => {
        if (actionKey && actionsMap[actionKey]) {
            actionsMap[actionKey]();
            dispatch(resetQuestionModalData());
        }
    };

    return (
        <BaseModal isOpen={isOpenModal}
            handleClose={() => dispatch(toggleModalStatus())}
            title={title}>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "end", }}>
                <Button onClick={() => dispatch(toggleModalStatus())} color='error' variant='contained'>Ոչ</Button>
                <Button onClick={handleConfirm} color='success' variant='contained'>Այո՛</Button>
            </Box>
        </BaseModal>
    )
}

export default QuestionModel

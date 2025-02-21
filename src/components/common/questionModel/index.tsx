import React from 'react'
import { Box, Button } from '@mui/material'
import BaseModal from '../modal'
import { useAppDispatch, useAppSelector } from '../../../redux/hooke'
import { resetQuestionModalData, toggleModalStatus } from '../../../redux/slices/questionModalSlice'
import { FetchDeleteContact, fetchGetContactsData } from '../../../redux/slices/contactsSlice/fetchService'
import { QuestionModalActions } from '../../../types'
import { fetchDeleteSlider, fetchGetSlidersData } from '../../../redux/slices/homeSliderSlice/fetchService'
import { resetStates } from '../../../redux/slices/homeSliderSlice'
import { fetchDeleteOfferData, fetchGetOfferData } from '../../../redux/slices/homeOffers/fetchService'
import { fetchDeleteProject, fetchGetInfoProjects } from '../../../redux/slices/projectsSlice/fetchService'
import { resetCurrentProjectData } from '../../../redux/slices/projectsSlice'

const QuestionModel = () => {
    const dispatch = useAppDispatch()
    const { isOpenModal, title, actionKey, elemetId } = useAppSelector((state) => state.questionModal)

    const actionsMap: Record<string, () => void> = {
        [QuestionModalActions.DELETE_CONTACT]: () =>
            elemetId ?
                dispatch(FetchDeleteContact(elemetId))
                    .then(() => dispatch(fetchGetContactsData()))
                : () => { },
        [QuestionModalActions.DELETE_SLIDER]: () =>
            elemetId ?
                dispatch(fetchDeleteSlider(Number(elemetId)))
                    .then(() => {
                        dispatch(fetchGetSlidersData())
                        dispatch(resetStates())
                    }) : () => { },
        [QuestionModalActions.DELETE_OFFER]: () =>
            elemetId ?
                dispatch(fetchDeleteOfferData(elemetId)).then(() => {
                    dispatch(fetchGetOfferData())
                })
                : () => { },
        [QuestionModalActions.DELETE_PROJECT]: () =>
            elemetId ?
                dispatch(fetchDeleteProject(elemetId)).then(() => {
                    dispatch(resetCurrentProjectData())
                    dispatch(fetchGetInfoProjects())
                })
                : () => { },
    };

    const handleConfirm = () => {
        if (actionKey && actionsMap[actionKey]) {
            actionsMap[actionKey](); // Вызываем функцию по ключу
            dispatch(resetQuestionModalData()); // Закрываем модалку
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

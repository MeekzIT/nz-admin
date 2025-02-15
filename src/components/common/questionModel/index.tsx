import React from 'react'
import { Box, Button } from '@mui/material'
import BaseModal from '../modal'
import { QuestionModelType } from './types'

const QuestionModel = ({ isOpenDeleteModal, handleClose, title, actionHandler }: QuestionModelType) => {
    return (
        <BaseModal isOpen={isOpenDeleteModal}
            handleClose={handleClose}
            title={title}>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "end", }}>
                <Button onClick={handleClose} color='error' variant='contained'>Ոչ</Button>
                <Button onClick={actionHandler} color='success' variant='contained'>Այո՛</Button>
            </Box>
        </BaseModal>
    )
}

export default QuestionModel

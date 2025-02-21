import React, { Fragment } from 'react'
import { ContactsTableBodyProps } from './types'
import { Skeleton, TableRow } from '@mui/material';
import { StyledTableCellBody } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../redux/hooke';
import { setElemetId, setTitleForQuestionModal, toggleModalStatus, setActionKey } from '../../../redux/slices/questionModalSlice';
import { QuestionModalActions } from '../../../types';

const ContactsTableBody = ({ tableBodyData, loading }: ContactsTableBodyProps) => {
  const dispatch = useAppDispatch()

  const openModalQuestionForDeleteContact = (contactId: number) => {
    dispatch(toggleModalStatus())
    dispatch(setTitleForQuestionModal({ titleModal: 'Իսկապե՞ս ուզում եք ջնջել կոնտակտը:' }))
    dispatch(setElemetId({ id: contactId }))
    dispatch(setActionKey({actionKey: QuestionModalActions.DELETE_CONTACT}))
  }

  return (
    <>
      {tableBodyData?.map((item, idx) => {
        return (
          <Fragment key={idx}>
            {loading ? (
              <TableRow
              >
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
                <StyledTableCellBody>
                  <Skeleton variant="text" animation="wave" />
                </StyledTableCellBody>
              </TableRow>
            ) : (
              <TableRow>
                <StyledTableCellBody>{item.firstName}</StyledTableCellBody>
                <StyledTableCellBody>{item.lastName}</StyledTableCellBody>
                <StyledTableCellBody>{item.phone}</StyledTableCellBody>
                <StyledTableCellBody>{item.email}</StyledTableCellBody>
                <StyledTableCellBody>{item.message}</StyledTableCellBody>
                <StyledTableCellBody>
                  <DeleteIcon color='error' sx={{ cursor: "pointer" }} onClick={() => openModalQuestionForDeleteContact(item.id)} />
                </StyledTableCellBody>
              </TableRow>
            )}
          </Fragment>
        );
      })}
    </>
  );
}

export default ContactsTableBody

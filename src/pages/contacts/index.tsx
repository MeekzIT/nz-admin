import React, { useEffect } from 'react'
import { TableContainer, Paper, Table, TableBody } from '@mui/material'
import TableSectionsNames from '../../components/common/tabel/tableSections'
import ContactsTableBody from './contactsTableBody'
import { useAppDispatch, useAppSelector } from '../../redux/hooke'
import { fetchGetContactsData } from '../../redux/slices/contactsSlice/fetchService'
import { contsctRowData } from './constants'
import { PageTitle } from '../../commonStyles'

const ContactsPage = () => {
    const { contactsData, loading } = useAppSelector((state) => state.contacts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGetContactsData())
    }, [dispatch])

    return (
        <>
            <PageTitle>ԿԱՊ ՄԵԶ ՀԵՏ</PageTitle>
            {contactsData && <TableContainer
                component={Paper}
                sx={{
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                    mt: "24px",
                }}>
                <Table
                    aria-label="customized table"
                    size="medium"
                    sx={{ borderCollapse: "inherit !important" }}>
                    <TableSectionsNames loading={false} rowNamesData={contsctRowData} />
                    <TableBody>
                        <ContactsTableBody
                            tableBodyData={contactsData}
                            loading={loading}
                        />
                    </TableBody>
                </Table>
            </TableContainer>}
        </>
    )
}

export default ContactsPage

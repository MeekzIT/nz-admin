import React, { useEffect } from 'react'
import { TableContainer, Paper, Table, TableBody } from '@mui/material'
import TableSectionsNames from '../../components/common/tabel/tableSections'
import contsctRowData from './constants'
import ContactsTableBody from './contactsTableBody'
import { useAppDispatch, useAppSelector } from '../../redux/hooke'
import { fetchGetContactsData } from '../../redux/slices/contactsSlice/fetchService'
import Loader from '../../components/common/loader'

const ContactsPage = () => {
    const { contactsData, loading } = useAppSelector((state) => state.contacts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchGetContactsData())
    }, [dispatch])

    if (loading) {
        return <Loader />
    }

    return (
        <>

            {contactsData && <TableContainer
                component={Paper}
                sx={{
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                    mt: "24px",
                }}
            >
                <Table
                    aria-label="customized table"
                    size="medium"
                    sx={{ borderCollapse: "inherit !important" }}
                >
                    <TableSectionsNames loadingExperts={false} rowNamesData={contsctRowData} />

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

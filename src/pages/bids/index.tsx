import React, { useEffect } from 'react'
import { Box, Paper, Table, TableBody, TableContainer } from '@mui/material'
import { PageTitle } from '../../commonStyles'
import { useAppDispatch, useAppSelector } from '../../redux/hooke'
import { fetchGetBidsData } from '../../redux/slices/bids/fetchService'
import TableSectionsNames from '../../components/common/tabel/tableSections'
import BidsTableBody from './bidsTableBody'
import { bidsRowData } from './constants'

const BidsPage = () => {
    const dispatch = useAppDispatch()
    const { bidsData, loading } = useAppSelector((state) => state.bids)

    useEffect(() => {
        dispatch(fetchGetBidsData())
    }, [dispatch])

    return (
        <Box>
            <PageTitle>ՀԱՅՏԵՐ</PageTitle>
            {bidsData && <TableContainer
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
                    <TableSectionsNames loading={loading} rowNamesData={bidsRowData} />
                    <TableBody>
                        <BidsTableBody
                            tableBodyData={bidsData}
                            loading={loading}
                        />
                    </TableBody>
                </Table>
            </TableContainer>}
        </Box>
    )
}

export default BidsPage

import React from 'react'
import { Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { AddImageBlockTypes } from './types';
import { styles } from './styles';


const AddImageBlock = ({ action }: AddImageBlockTypes) => {
    return (
        <Box onClick={action} sx={styles.container}        >
            <AddIcon sx={{ width: "30%", height: "30%" }} />
        </Box>
    )
}

export default AddImageBlock

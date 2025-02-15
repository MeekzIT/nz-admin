import React from 'react'
import { MapCreateImagesTypes } from './types'
import { Avatar, Box } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import { styles } from './styles';

const MapCreateImages = ({ imagesData, setImageIdForDlete }: MapCreateImagesTypes) => {
    return (
        <Box sx={{ display: "flex", gap: 1 }}>
            {imagesData.length > 0 && imagesData.map((item) => {
                return (
                    <Box key={item.id} position={"relative"}>
                        <Box sx={styles.deleteBlock} onClick={() => setImageIdForDlete(item.id)}>
                            <ClearIcon sx={{ color: "white" }} />
                        </Box>
                        <Avatar src={item.image} alt='images offer' variant='rounded' sx={{
                            width: "150px",
                            height: "150px",
                        }} />
                    </Box>
                )
            })}

        </Box>
    )
}

export default MapCreateImages

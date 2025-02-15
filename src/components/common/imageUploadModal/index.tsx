import { Box, Modal, Typography } from "@mui/material";

import { useState } from "react";
import CloudinaryUploadWidget from "../cloudinaryUploadWidget";
import { ImageUploadModalProps } from "./types";

function ImageModalComponent  ({ open, handleClose, name, handleImageChange }: ImageUploadModalProps) {

    const [cloudName] = useState("djof2fcfk");
    const [uploadPreset] = useState("qurduli");

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        cropping: false,
        multiple: false,
    });
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: `3px solid black`,
        boxShadow: 24,
        p: 4,
        borderRadius: "10px",
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography>You can upload new image</Typography>
                <CloudinaryUploadWidget
                    uwConfig={uwConfig}
                    name={name}
                    handleUpload={handleImageChange}
                />
            </Box>
        </Modal>
    );
};

export default ImageModalComponent;

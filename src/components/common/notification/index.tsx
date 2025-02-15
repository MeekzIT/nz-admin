import { Snackbar, Stack } from '@mui/material'
import MuiAlert, { AlertProps } from "@mui/material/Alert";

import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooke';
import { setNotification } from '../../../redux/slices/notificatinSlice';
import { notificationEnum } from '../../../redux/slices/notificatinSlice/types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notification = () => {
    const notificationData = useAppSelector(state => state.notification)
    const { dataAboutNotification } = notificationData
    const { messageNotification, statusNotification } = dataAboutNotification
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(setNotification({ messageNotification: "", statusNotification: notificationEnum.OFF }))
    };

    return (
        <Stack spacing={2} sx={{ width: "100%" }}>
            <Snackbar
                open={
                    statusNotification === notificationEnum.OFF ? false : true
                }
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={handleClose}
                    severity={statusNotification === notificationEnum.ERROR ? "error" : "success"}
                    sx={{ width: "100%", right: 0 }}
                >
                    {messageNotification}
                </Alert>
            </Snackbar>
        </Stack>
    )
}

export default Notification

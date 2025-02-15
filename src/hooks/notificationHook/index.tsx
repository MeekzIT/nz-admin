import { setNotification } from "../../redux/slices/notificatinSlice"
import { notificationEnum } from "../../redux/slices/notificatinSlice/types"
import { NotificationHookeType } from "./types"

export const notificationHooke = ({ errorText, successText }: NotificationHookeType) => {
    if (!errorText && !successText) {
        setNotification({
            message: "",
            statusNotification: notificationEnum.OFF
        })
    }

    if (errorText || successText) {
        if (errorText) {
            setNotification({
                message: errorText,
                statusNotification: notificationEnum.ERROR
            })
        }
        if (successText) {
            setNotification({
                message: successText,
                statusNotification: notificationEnum.SUCCESS
            })
        }
    }
}
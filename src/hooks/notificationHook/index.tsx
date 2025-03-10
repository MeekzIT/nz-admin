import { setNotification } from "../../redux/slices/notificatinSlice";
import { notificationEnum } from "../../redux/slices/notificatinSlice/types";
import { NotificationHookeType } from "./types";

export const notificationHooke = ({
  errorText,
  successText,
}: NotificationHookeType) => {
  if (!errorText && !successText) {
    setNotification({
      messageNotification: "",
      statusNotification: notificationEnum.OFF,
    });
  }

  if (errorText || successText) {
    if (errorText) {
      setNotification({
        messageNotification: errorText,
        statusNotification: notificationEnum.ERROR,
      });
    }
    if (successText) {
      setNotification({
        messageNotification: successText,
        statusNotification: notificationEnum.SUCCESS,
      });
    }
  }
};

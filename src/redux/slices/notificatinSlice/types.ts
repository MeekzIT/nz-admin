
export enum notificationEnum {
    SUCCESS = "success",
    ERROR = "error",
    OFF = "off"
}

export type DataAboutNotificationType = {
    statusNotification: notificationEnum
    messageNotification: string
}

export type NotificationState = {
    dataAboutNotification: {
        messageNotification: string;
        statusNotification: notificationEnum;
    };
}

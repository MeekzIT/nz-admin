export type TableRow = {
    createdAt: string;
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    isReaded: boolean
};

export type CreateTableRow = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
    isReaded: boolean
};

export type ContactsStateTypes = {
    loading: boolean
    contactsData: TableRow[] | []
}

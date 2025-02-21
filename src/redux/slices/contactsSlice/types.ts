export type TableRow = {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
};

export type CreateTableRow = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
};

export type ContactsStateTypes = {
    loading: boolean
    contactsData: TableRow[] | []
}

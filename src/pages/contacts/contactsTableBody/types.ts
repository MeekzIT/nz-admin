import { TableRow } from "../../../redux/slices/contactsSlice/types"

export type ContactsTableBodyProps = {
  tableBodyData: [] | TableRow[]
  loading: boolean
}
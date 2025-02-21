import { SectionsNamesTypes } from "../../components/common/tabel/tableSections/types";

const contsctRowData: SectionsNamesTypes[] = [
  { name: "Անուն" },
  { name: "Ազգանուն" },
  { name: "Հեռախոսահամար" },
  { name: "Փոստ" },
  { name: "Հաղորդագրություն" },
  { name: "Ջնջել" },
];

export default contsctRowData;

export type TableRow = {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
};
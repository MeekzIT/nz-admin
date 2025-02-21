import styled from "@emotion/styled";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(() => ({
  maxWidth: "200px",
  minWidth: "100px",

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#08412E",
    color: "white",
  },
}));

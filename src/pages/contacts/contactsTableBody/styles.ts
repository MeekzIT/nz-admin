import { styled, TableCell } from "@mui/material";

export const StyledTableCellBody = styled(TableCell)<any>(({ status }) => ({
  maxWidth: "200px",
  minWidth: "100px",

  wordBreak: "break-word", // Переносит длинные слова
  overflowWrap: "break-word", // Гарантирует перенос слов
  whiteSpace: "normal", // Позволяет перенос строк

  // color:
  //   status === ExpertDisplayStatus.visible_for_admin || status ===  ExpertActivityStatus.inactive
  //     ? `${$colorVariables.$yellow01}`
  //     : status === ExpertDisplayStatus.visible_false  || status ===  "deleted"
  //     ? `${$colorVariables.$red}`
  //     : status === ExpertDisplayStatus.visible_for_all || status ===  ExpertActivityStatus.active
  //     ? `${$colorVariables.$green01}`
  //     : "",
  fontWeight: status ? 900 : "",

  [`&.MuiTableRow-root`]: {
    borderCollapse: "inherit !important",
  },
}));

// import { styled, TableCell, tableCellClasses } from "@mui/material";

// export const StyledTableCellBody = styled(TableCell)<any>(({ status }) => ({
//   maxWidth: "200px",
//   minWidth: "100px",
//   wordBreak: "break-word", // Переносит длинные слова
//   overflowWrap: "break-word", // Гарантирует перенос слов
//   whiteSpace: "normal", // Позволяет перенос строк

//   fontWeight: status ? 900 : "",

//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: "red",
//     color: "red",
//   },

//   borderLeft:
//     status === "isActive"
//       ? `8px solid #0eba63`
//       : status === "InActive"
//         ? `8px solid rgba(237, 82, 82, 0.16)`
//         : "",

//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },

//   [`&.MuiTableRow-root`]: {
//     borderCollapse: "inherit !important",
//   },
// }));

import { styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCellBody = styled(TableCell)<{ status?: string }>(
  (props) => ({
    maxWidth: "200px",
    minWidth: "100px",
    wordBreak: "break-word", // Переносит длинные слова
    overflowWrap: "break-word", // Гарантирует перенос слов
    whiteSpace: "normal", // Позволяет перенос строк
    fontWeight: props.status ? 900 : "",

    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "red",
      color: "red",
    },

    borderLeft:
      props.status === "isActive"
        ? `8px solid #0eba63`
        : props.status === "InActive"
        ? `8px solid rgba(237, 82, 82, 0.16)`
        : "",

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },

    [`&.MuiTableRow-root`]: {
      borderCollapse: "inherit !important",
    },

    "@media (max-width: 768px)": {
      maxWidth: "150px",
      minWidth: "80px",
      fontSize: 12,
    },

    "@media (max-width: 480px)": {
      maxWidth: "120px",
      minWidth: "60px",
      fontSize: 10,
    },
  })
);

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

export const StyledTableCellBody = styled(TableCell)<{ status: string }>(
  ({ status }) => ({
    maxWidth: "200px",
    minWidth: "100px",
    wordBreak: "break-word", // Переносит длинные слова
    overflowWrap: "break-word", // Гарантирует перенос слов
    whiteSpace: "normal", // Позволяет перенос строк
    fontWeight: status ? 900 : "",

    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "red",
      color: "red",
    },

    borderLeft:
      status === "isActive"
        ? `8px solid #0eba63`
        : status === "InActive"
        ? `8px solid rgba(237, 82, 82, 0.16)`
        : "",

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },

    [`&.MuiTableRow-root`]: {
      borderCollapse: "inherit !important",
    },

    // Медиа-запросы для планшетов и мобильных устройств
    '@media (max-width: 768px)': {
      maxWidth: "150px",
      minWidth: "80px",
      fontSize: 12,
      // Другие стили по необходимости
    },

    '@media (max-width: 480px)': {
      maxWidth: "120px",
      minWidth: "60px",
      fontSize: 10,
      // Другие стили по необходимости
    },
  })
);

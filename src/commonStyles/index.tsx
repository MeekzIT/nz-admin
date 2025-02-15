import { Box, TextareaAutosize } from "@mui/material";
import { styled } from "@mui/material/styles";


export const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
}));

export const Block = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // По умолчанию 3 колонки
  gap: "15px",
  padding: "20px",
  background: theme.palette.grey[100],
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s",

  "&:hover": {
    transform: "scale(1.02)",
  },

  // **Адаптация под планшеты (до 1024px)**
  [theme.breakpoints.down("md")]: {
    // gridTemplateColumns: "repeat(2, 1fr)", // 2 колонки
    // gap: "10px",
    gridTemplateColumns: "1fr", // Одна колонка
    gap: "8px",
    padding: "15px",
  },

  // **Адаптация под мобильные устройства (до 600px)**
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr", // Одна колонка
    gap: "8px",
    padding: "15px",
  },
}));


export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: "100%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "16px",
  minHeight: "280px",
  resize: "vertical",
  transition: "border 0.3s, box-shadow 0.3s",

  "&:focus": {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 8px ${theme.palette.primary.light}`,
    outline: "none",
  },
}));

export const PageTitle = styled(Box)(({ theme }) => ({
  fontSize: "24px",
  width: "100%",
  color: "#08412E",
  textAlign: "right",
  padding:"10px"
}));


export const BlockWithBackgroundBlend = styled(Box)(({ theme }) => ({
  backgroundColor: "#f5f5f5",
  borderRadius: "12px",
  padding: "10px",
}));


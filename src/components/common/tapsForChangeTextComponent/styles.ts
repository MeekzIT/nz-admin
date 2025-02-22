import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";

// Стили для контейнера Tabs
export const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "1px solid #ccc",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1976d2",
  },

  // Для планшетов (ширина < 960px)
  [theme.breakpoints.down("md")]: {
    "& .MuiTab-root": {
      fontSize: "14px",
      minWidth: "80px",
    },
  },

  // Для мобильных устройств (ширина < 600px)
  [theme.breakpoints.down("sm")]: {
    "& .MuiTab-root": {
      fontSize: "12px",
      minWidth: "60px",
      padding: "6px",
    },
  },
}));

// Стили для отдельных вкладок
export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",

  // Для планшетов
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },

  // Для мобильных устройств
  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "4px",
  },
}));

import { styled } from "@mui/material/styles";
import { Tabs, Tab, Avatar, Box } from "@mui/material";

// Стили для Tabs с горизонтальным скроллом
export const StyledTabs = styled(Tabs)(({ theme }) => ({
  borderBottom: "1px solid #ccc",
  overflowX: "auto", // Горизонтальный скролл
  scrollbarWidth: "thin",
  scrollbarColor: "#ccc transparent",

  "&::-webkit-scrollbar": {
    height: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#bbb",
    borderRadius: "4px",
  },

  "& .MuiTabs-flexContainer": {
    flexWrap: "nowrap",
  },

  "& .MuiTabs-indicator": {
    backgroundColor: "#1976d2",
  },

  [theme.breakpoints.down("md")]: {
    "& .MuiTab-root": {
      fontSize: "14px",
      minWidth: "100px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTab-root": {
      fontSize: "12px",
      minWidth: "80px",
      padding: "6px",
    },
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  fontWeight: "bold",

  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    padding: "4px",
  },
}));

export const StyledAvatarWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  margin: "40px 0",
  cursor: "pointer",
});

// Круглая аватарка
export const StyledAvatar = styled(Avatar)({
  width: 200,
  height: 200,
});

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#14213d",
      light: "rgb(67, 77, 99)",
      dark: "rgb(14, 23, 42)",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d4a418",
      light: "rgb(220, 182, 70)",
      dark: "rgb(148, 114, 16)",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;

// #f1f1e6

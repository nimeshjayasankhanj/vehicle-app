import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", //blue
      light: "#fff", //white
    },
    secondary: {
      main: "#19857b", //gray
    },
    error: {
      main: "#ff1744", //red
    },
  },
});

export default theme;

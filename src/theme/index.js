import { createTheme } from "@mui/material/styles"

const spacing = (factor) => factor * 8
export const theme = createTheme({
  spacing,
  palette: {
    primary: {
      main: "#2d3649", // bluish tint
      background: "#102131", // darker bluish tint
    },
    secondary: {
      main: "#63ECBC", // green
      accent: "#E5E5E5", // silver
    },
  },
  typography: {
    // Main Font
    fontFamily: "'Roboto Mono', monospace;",
    h1: {
      fontSize: "1.25rem", // 20px
      fontWeight: 700, // bold
      color: "#fff",
    },
    h2: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600, // semi-bold
      color: "#fff",
    },
    h3: {
      fontSize: "1.125rem", // 18px
      fontWeight: 700, // bold
      color: "#fff",
    },
    h4: {
      fontSize: "1.125rem", // 18px
      fontWeight: 600, // semi-bold
      color: "#fff",
    },
    h5: {
      fontSize: "1rem", // 16px
      fontWeight: 700, // bold
      color: "#fff",
    },
    h6: {
      fontSize: "1rem", // 16px
      fontWeight: 600, // semi-bold
      color: "#fff",
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 600, // semi-bold
      fontFamily: "'Open Sans', sans-serif",
      color: "#fff",
    },
    body2: {
      fontSize: "1rem", // 14px
      fontWeight: 500, // regular
      fontFamily: "'Open Sans', sans-serif",
      color: "#fff",
    },
    subtitle1: {
      fontSize: "1rem", // 16px
      fontWeight: 500, // medium
      color: "#fff",
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 500, // medium
      color: "#fff",
    },
    caption: {
      fontSize: "0.7625rem", // 10px
      color: "#fff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1076,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: "'Roboto Mono', monospace;",
          fontWeight: 500,
          fontSize: "0.875rem",
          backgroundColor: "#E5E5E5",
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#63ECBC",
              borderWidth: 2,
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#63ECBC",
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: 200,
          height: 360,
          position: "relative",
          marginTop: theme.spacing(3),
          marginRight: theme.spacing(3),
        }),
      },
    },
  },
})

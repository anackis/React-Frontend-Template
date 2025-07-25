import { createTheme, Theme } from "@mui/material/styles"

declare module "@mui/material/styles" {
  interface Palette {
    backgroundSecondary: string
    toggleBackground: string
  }
  interface PaletteOptions {
    backgroundSecondary?: string
    toggleBackground?: string
  }
}

export const getAppTheme = (
  mode: "light" | "dark",
  primaryColor: string
): Theme =>
  createTheme({
    palette: {
      mode,
      primary: { main: primaryColor },
      ...(mode === "dark"
        ? {
            background: { default: "#222", paper: "#262626" },
            text: { primary: "#fff" },
            backgroundSecondary: "#3c3c3c",
            toggleBackground: "#3c3c3c",
          }
        : {
            background: { default: "#f5f5f5", paper: "#f5f5f5" },
            text: { primary: "#222" },
            backgroundSecondary: "#3c3c3c",
            toggleBackground: "#fff",
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            letterSpacing: "2px",
            borderRadius: 8,
          },
          contained: ({ theme }) => ({
            "&:hover": {
              backgroundColor: primaryColor,
              boxShadow:
                "0 0 2px #fff, 0 0 3px var(--primary-color), 0 0 4px var(--primary-color), 0 0 5px var(--primary-color)",
            },
          }),
          outlined: ({ theme }) => ({
            borderWidth: 2,
            ...(theme.palette.mode === "dark" && {
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: theme.palette.primary.main,
                boxShadow:
                  "0 0 2px #fff, 0 0 3px var(--primary-color), 0 0 4px var(--primary-color), 0 0 5px var(--primary-color)",
              },
            }),
            ...(theme.palette.mode === "light" && {
              "&:hover": {
                borderColor: "#E49292",
                boxShadow:
                  "0 0 2px #fff, 0 0 3px #E49292, 0 0 4px #E49292, 0 0 5px #E49292",
              },
            }),
          }),
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 12,
            border: `2px solid ${primaryColor}`,
            boxShadow: `0 0 4px ${primaryColor}`,
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: {
            padding: "8px 12px 12px 8px",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
          notchedOutline: {
            borderRadius: 10,
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: 10,
          },
        },
      },
    },
  })

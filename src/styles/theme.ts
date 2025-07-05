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
            background: { default: "#fff", paper: "#fff" },
            text: { primary: "#222" },
            backgroundSecondary: "#3c3c3c",
            toggleBackground: "#fff",
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
          outlined: ({ theme }) => ({
            borderWidth: 2,
            ...(theme.palette.mode === "dark" && {
              borderColor: "#888",
              color: "#fff",
              borderWidth: 2,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.08)",
                borderColor: theme.palette.primary.main,
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
    },
  })

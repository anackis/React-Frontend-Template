import { createTheme, Theme } from "@mui/material/styles"

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
            background: { default: "#222", paper: "#3C3C3C" },
            text: { primary: "#fff" },
          }
        : {
            background: { default: "#fff", paper: "#f8f8f8" },
            text: { primary: "#222" },
          }),
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
          },
          outlined: ({ theme }) => ({
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

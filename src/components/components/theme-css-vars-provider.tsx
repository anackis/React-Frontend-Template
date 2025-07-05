import { ReactNode } from "react"
import { useTheme } from "@mui/material"

interface ThemeCssVarsProviderProps {
  children: ReactNode
}

export function ThemeCssVarsProvider({ children }: ThemeCssVarsProviderProps) {
  const muiTheme = useTheme()

  return (
    <div
      style={{
        ["--primary-color" as any]: muiTheme.palette.primary.main,
      }}
    >
      {children}
    </div>
  )
}

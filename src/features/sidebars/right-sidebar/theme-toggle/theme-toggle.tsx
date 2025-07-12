import { useTheme } from "@mui/material"
import { IconComponent } from "../../../../components/components/icon/icon"
import "./theme-toggle.scss"
import { useStyleContext } from "../../../../components/providers/style-provider"

export const ThemeToggle = () => {
  const { themeMode, setThemeMode } = useStyleContext()
  const muiTheme = useTheme()
  const backgroundColor = muiTheme.palette.toggleBackground

  return (
    <div className="theme-toggle-switch">
      <button
        className={`theme-switch ${themeMode}`}
        style={{ backgroundColor }}
        onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
      >
        <div className="toggle-indicator">
          <IconComponent name="sun" size={20} className="theme-icon sun-icon" />

          <IconComponent
            name="moon"
            size={20}
            className="theme-icon moon-icon"
          />
        </div>
      </button>
    </div>
  )
}

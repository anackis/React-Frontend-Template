import { IconComponent } from "../../../components/components/icon/icon"
import { ThemeToggle } from "./theme-toggle/theme-toggle"
import { ColorPickers } from "./color-pickers/color-pickers"
import "./right-sidebar.scss"
import { useTheme } from "@mui/material"

interface RightSidebarProps {
  isVisible: boolean
  toggleSidebar: () => void
  primaryColor: string
  setPrimaryColor: (color: string) => void
  theme: "light" | "dark"
  setTheme: (mode: "light" | "dark") => void
}

export const RightSidebar = ({
  isVisible,
  toggleSidebar,
  primaryColor,
  setPrimaryColor,
  theme,
  setTheme,
}: RightSidebarProps) => {
  const muiTheme = useTheme()
  const predefinedColors = ["#f0650f", "#007bff", "#28a745", "#6f42c1"]

  return (
    <div
      className={`right-sidebar ${isVisible ? "visible" : "hidden"}`}
      style={{
        background: muiTheme.palette.background.paper,
        color: muiTheme.palette.text.primary,
        borderLeft: `2px solid ${muiTheme.palette.backgroundSecondary}`,
      }}
    >
      <h2>App Customizer</h2>
      <div className="neon-divider" />

      <h3>Theme</h3>
      <ThemeToggle theme={theme} handleSetTheme={setTheme} />

      <h3>Primary Color</h3>
      <ColorPickers
        primaryColor={primaryColor}
        predefinedColors={predefinedColors}
        handleSetPrimaryColor={setPrimaryColor}
      />

      <button
        onClick={toggleSidebar}
        className="right-sidebar-toggle-button"
        style={{
          backgroundColor: muiTheme.palette.primary.main,
        }}
      >
        <IconComponent name="settings" size={30} />
      </button>
    </div>
  )
}

import "./right-sidebar.scss"

import { IconComponent } from "../../../components/components/icon/icon"
import { ThemeToggle } from "./theme-toggle/theme-toggle"
import { ColorPicker } from "./color-pickers/color-picker"
import { useTheme } from "@mui/material"
import { useStyleContext } from "../../../providers/style-provider"

interface RightSidebarProps {
  isVisible: boolean
  toggleSidebar: () => void
}

export const RightSidebar = ({
  isVisible,
  toggleSidebar,
}: RightSidebarProps) => {
  const { primaryColor, setPrimaryColor } = useStyleContext()
  const muiTheme = useTheme()

  const predefinedColors = ["#DB5D0F", "#007bff", "#28a745", "#6f42c1"]

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
      <ThemeToggle />

      <h3>Primary Color</h3>
      <ColorPicker
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

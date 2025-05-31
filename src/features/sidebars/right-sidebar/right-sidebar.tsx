import { useState } from "react"
import { IconComponent } from "../../../components/components/icon/icon"
import { ThemeToggle } from "./theme-toggle/theme-toggle"
import { ColorPickers } from "./color-pickers/color-pickers"
import "./right-sidebar.scss"
import { isDarkColor } from "../../../utils/common/utils"

interface RightSidebarProps {
  isVisible: boolean
  toggleSidebar: () => void
}

export const RightSidebar = ({
  isVisible,
  toggleSidebar,
}: RightSidebarProps) => {
  const predefinedColors = ["#f0650f", "#007bff", "#28a745", "#6f42c1"]
  const [primaryColor, setPrimaryColor] = useState("#f0650f")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  const handleSetPrimaryColor = (color: string) => {
    setPrimaryColor(color)
    document.documentElement.style.setProperty("--primary-color", color)

    const secondary = isDarkColor(color)
      ? "#f8f8f8"
      : "var(--background-primary-color)"
    document.documentElement.style.setProperty("--secondary-color", secondary)
  }

  const handleSetTheme = (mode: "dark" | "light") => {
    setTheme(mode)
    document.documentElement.setAttribute("data-theme", mode)
  }

  return (
    <div className={`right-sidebar ${isVisible ? "visible" : "hidden"}`}>
      <h2>App Customizer</h2>
      <div className="neon-divider" />

      <h3>Theme</h3>
      <ThemeToggle theme={theme} handleSetTheme={handleSetTheme} />

      <h3>Primary Color</h3>
      <ColorPickers
        primaryColor={primaryColor}
        predefinedColors={predefinedColors}
        handleSetPrimaryColor={handleSetPrimaryColor}
      />

      <button onClick={toggleSidebar} className="right-sidebar-toggle-button">
        <IconComponent
          name="settings"
          size={30}
          color="var(--secondary-color)"
        />
      </button>
    </div>
  )
}

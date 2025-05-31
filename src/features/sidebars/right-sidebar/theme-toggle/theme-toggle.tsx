import { IconComponent } from "../../../../components/components/icon/icon"
import "./theme-toggle.scss"

interface ThemeToggleProps {
  theme: "dark" | "light"
  handleSetTheme: (theme: "dark" | "light") => void
}

export const ThemeToggle = ({ theme, handleSetTheme }: ThemeToggleProps) => {
  return (
    <div className="theme-toggle-switch">
      <button
        className={`theme-switch ${theme}`}
        onClick={() => handleSetTheme(theme === "dark" ? "light" : "dark")}
      >
        <div className="toggle-indicator">
          <IconComponent
            name="sun"
            size={20}
            color="var(--secondary-color)"
            className="theme-icon sun-icon"
          />

          <IconComponent
            name="moon"
            size={20}
            color="var(--secondary-color)"
            className="theme-icon moon-icon"
          />
        </div>
      </button>
    </div>
  )
}

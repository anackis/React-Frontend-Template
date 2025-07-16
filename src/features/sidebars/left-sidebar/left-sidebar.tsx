import { useTheme } from "@mui/material"
import { IconComponent } from "../../../components/components/icon/icon"
import "./left-sidebar.scss"

interface SidebarProps {
  isVisible: boolean
  toggleSidebar: () => void
}

export const LeftSidebar = ({ isVisible, toggleSidebar }: SidebarProps) => {
  const muiTheme = useTheme()

  return (
    <div
      className={`sidebar ${isVisible ? "" : "hidden"}`}
      style={{
        background: muiTheme.palette.background.paper,
        color: muiTheme.palette.text.primary,
        borderRight: `2px solid ${muiTheme.palette.backgroundSecondary}`,
      }}
    >
      <h1>Hello left sidebar</h1>

      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        <IconComponent name="arrowTo" size={30} />
      </button>
    </div>
  )
}

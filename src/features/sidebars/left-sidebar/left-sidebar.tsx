import { IconComponent } from "../../../components/components/icon/icon"
import "./left-sidebar.scss"

interface SidebarProps {
  isVisible: boolean
  toggleSidebar: () => void
}

export const LeftSidebar = ({ isVisible, toggleSidebar }: SidebarProps) => {
  return (
    <div className={`sidebar ${isVisible ? "" : "hidden"}`}>
      <h1>Hello left sidebar</h1>

      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        <IconComponent
          name="arrowTo"
          size={30}
          color="var(--secondary-color)"
        />
      </button>
    </div>
  )
}

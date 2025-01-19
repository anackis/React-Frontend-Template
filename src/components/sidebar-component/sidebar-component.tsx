import { IconComponent } from "../icon-component/icon-component";
import "./sidebar-component.scss";

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void;
}

export const Sidebar = ({ isVisible, toggleSidebar }: SidebarProps) => {
  return (
    <div className={`sidebar ${isVisible ? "" : "hidden"}`}>
      <h1>Hello left sidebar</h1>

      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        {isVisible ? (
          <IconComponent
            name="arrowTo"
            size={30}
            color="var(--background-third-color)"
          />
        ) : (
          <IconComponent
            name="arrowFrom"
            size={30}
            color="var(--background-third-color)"
          />
        )}
      </button>
    </div>
  );
};

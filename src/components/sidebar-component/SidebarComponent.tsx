
import IconComponent from '../icon-component/IconComponent';
import './SidebarComponent.scss';

interface SidebarProps {
  isVisible: boolean;
  toggleSidebar: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ isVisible, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
      <h1>Hello left sidebar</h1>
      <button onClick={toggleSidebar} className="sidebar-toggle-button">
        {isVisible ? <IconComponent name="arrowTo" size={30} color="var(--background-third-color)" />  : <IconComponent name="arrowFrom" size={30} color="var(--background-third-color)" /> }
      </button>
    </div>
  );
}

export default Sidebar;

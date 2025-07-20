import "./navbar.scss"
import { IconComponent } from "../../components/components/icon/icon"
import { useFirebaseAuth } from "../../hooks/firebase-hooks/useFirebaseAuth"
import { NavLink, useNavigate } from "react-router-dom"

interface NavbarProps {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const navigate = useNavigate()
  const { currentUser } = useFirebaseAuth()

  const handleAccountClick = () => {
    if (currentUser) {
      navigate("/account-settings")
    } else {
      navigate("/login")
    }
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-left">
          <div className="navbar-brand" onClick={() => navigate("/")}>
            <span>LOGO</span>
          </div>
          <div className="navbar-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              to="/about"
            >
              About
            </NavLink>
            {currentUser ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                to="/login"
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                to="/login"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <button className="settings-btn" onClick={handleAccountClick}>
            <IconComponent name="account" size={24} />
          </button>
          <button className="settings-btn" onClick={toggleSidebar}>
            <IconComponent name="settings" size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}

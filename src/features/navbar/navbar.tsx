import "./navbar.scss"
import { IconComponent } from "../../components/components/icon/icon"
import { useFirebaseAuth } from "../../hooks/firebase-hooks/useFirebaseAuth"
import { NavLink, useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material"
import { useStyleContext } from "../../providers/style-provider"

interface NavbarProps {
  toggleSidebar: () => void
}

export const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const navigate = useNavigate()
  const muiTheme = useTheme()
  const { currentUser } = useFirebaseAuth()
  const { themeMode } = useStyleContext()

  const handleAccountClick = () => {
    if (currentUser) {
      navigate("/account-settings")
    } else {
      navigate("/login")
    }
  }

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: muiTheme.palette.background.paper,
        color: muiTheme.palette.text.primary,
      }}
    >
      <div className="nav-container">
        <div className="navbar-left">
          <div
            className="navbar-brand"
            onClick={() => navigate("/")}
            style={{
              color:
                themeMode === "light"
                  ? muiTheme.palette.text.primary
                  : undefined,
            }}
          >
            <span>LOGO</span>
          </div>
          <div className="navbar-links">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              to="/"
              style={{
                color:
                  themeMode === "light"
                    ? muiTheme.palette.primary.main
                    : undefined,
              }}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              to="/about"
              style={{
                color:
                  themeMode === "light"
                    ? muiTheme.palette.primary.main
                    : undefined,
              }}
            >
              About
            </NavLink>
            {currentUser ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                to="/login"
                style={{
                  color:
                    themeMode === "light"
                      ? muiTheme.palette.primary.main
                      : undefined,
                }}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navbar-link active" : "navbar-link"
                }
                to="/login"
                style={{
                  color:
                    themeMode === "light"
                      ? muiTheme.palette.primary.main
                      : undefined,
                }}
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <button
            className="settings-btn"
            onClick={handleAccountClick}
            style={{
              backgroundColor: muiTheme.palette.background.paper,
            }}
          >
            <IconComponent
              name="account"
              size={20}
              color={
                themeMode === "light"
                  ? muiTheme.palette.primary.main
                  : undefined
              }
            />
          </button>
          <button
            className="settings-btn"
            onClick={toggleSidebar}
            style={{
              backgroundColor: muiTheme.palette.background.paper,
            }}
          >
            <IconComponent
              name="settings"
              size={22}
              color={
                themeMode === "light"
                  ? muiTheme.palette.primary.main
                  : undefined
              }
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

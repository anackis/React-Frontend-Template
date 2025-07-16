import "./navbar.scss"
import { NavLink, useNavigate } from "react-router-dom"

export const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <div className="nav-container">
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
          <NavLink
            className={({ isActive }) =>
              isActive ? "navbar-link active" : "navbar-link"
            }
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

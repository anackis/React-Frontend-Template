import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.scss";
// import logo from '../../assets/icons/web-art.svg';

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="navbar-brand" onClick={() => navigate("/")}>
          {/* <img src={logo} alt="logo" /> */}
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
  );
};

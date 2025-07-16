import { NavLink } from "react-router-dom";
import { handleLogout } from "./login-handlers";

export function AlreadyLoggedInNotification({ setError }: { setError: (msg: string) => void }) {
  return (
    <div className="login-component">
      <div className="login-notification">
        <div className="login-notification-wrapper">
          <h1>You are already logged in</h1>
          <div className="login-notification-buttons">
            <button className="button" onClick={() => handleLogout(setError)}>
              Logout
            </button>
            <NavLink className="button ghost" to="/">
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
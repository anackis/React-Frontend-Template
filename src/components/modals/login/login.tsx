import { useState } from "react"
import { useFirebaseAuth } from "../../../hooks/firebase-hooks/useFirebaseAuth"
import { NavLink, useNavigate } from "react-router-dom"
import { Spinner } from "../../components/spinner/spinner"
import { ErrorComponent } from "../error/error"
import { useTheme } from "@mui/material"
import "./login.scss"
import { darken, lighten } from "../../../utils/common/utils"
import { useOnPrimaryColor } from "../../../hooks/useThemeHelpers"
import { handleLogout, handleSignIn, handleSignUp } from "./login-handlers"

export function LoginComponenet() {
  const { currentUser, loading } = useFirebaseAuth()
  const [isRightPanelActive, setRightPanelActive] = useState(false)
  const [email, setEmail] = useState("test@inbox.lv")
  const [password, setPassword] = useState("test1234")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const muiTheme = useTheme()
  const mainColor = muiTheme.palette.primary.main
  const gradientDark = darken(mainColor, 20)
  const gradientLight = lighten(mainColor, 40)

  const onPrimaryColor = useOnPrimaryColor()

  if (loading) {
    return (
      <div className="login-component">
        <Spinner />
      </div>
    )
  }

  if (currentUser) {
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

  return (
    <>
      <div
        className="login-component"
        style={
          {
            "--gradient-main": mainColor,
            "--gradient-dark": gradientDark,
            "--gradient-light": gradientLight,
          } as React.CSSProperties
        }
      >
        <div
          className={`login-component-container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="login-component-container"
        >
          <div className="form-container sign-up-container">
            <form
              onSubmit={(e) =>
                handleSignUp(e, email, password, setError, navigate)
              }
            >
              <h1 style={{ color: "#fff" }}>Create Account</h1>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="button"
                type="submit"
                style={{ marginTop: "6px", color: onPrimaryColor }}
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form
              onSubmit={(e) =>
                handleSignIn(e, email, password, setError, navigate)
              }
            >
              <h1 style={{ color: "#fff" }}>Sign in</h1>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="button"
                type="submit"
                style={{
                  backgroundColor: mainColor,
                  borderColor: mainColor,
                  color: onPrimaryColor,
                  marginTop: "6px",
                }}
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div
                className="overlay-panel overlay-left"
                style={{ color: onPrimaryColor }}
              >
                <h1>Sign In</h1>
                <p>Please, login to use the app</p>

                <button
                  className="button ghost"
                  id="signIn"
                  onClick={() => setRightPanelActive(false)}
                >
                  Sign In
                </button>
              </div>

              <div
                className="overlay-panel overlay-right"
                style={{ color: onPrimaryColor }}
              >
                <h1>Sign Up</h1>
                <p>
                  Create an account to start <br /> the journey with us
                </p>

                <button
                  className="button ghost"
                  id="signUp"
                  onClick={() => setRightPanelActive(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>

        {error && <ErrorComponent message={error} />}
      </div>
    </>
  )
}

import { useState } from "react";
import { signIn, signUp, logOut } from "../../firebase/auth";
import { useFirebaseAuth } from "../../hooks/firebase-hooks/useFirebaseAuth";
import { NavLink, useNavigate } from "react-router-dom";
import { Spinner } from "../spinner-component/spinner-component";
import { ErrorComponent } from "../error-component/error-component";
import "./login-component.scss";

export function LoginComponenet() {
  const { currentUser, loading } = useFirebaseAuth();
  const [isRightPanelActive, setRightPanelActive] = useState(false);
  const [email, setEmail] = useState("test@inbox.lv");
  const [password, setPassword] = useState("test1234");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  };

  const handleSignIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to log out");
    }
  };

  if (loading) {
    return (
      <div className="login-component">
        <Spinner />
      </div>
    );
  }

  if (currentUser) {
    return (
      <div className="login-component">
        <div className="login-notification">
          <div className="login-notification-wrapper">
            <h1>You are logged in.</h1>
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              to="/"
            >
              Home Page
            </NavLink>
            <span>Or</span>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="login-component">
        <div
          className={`login-component-container ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="login-component-container"
        >
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignUp}>
              <h1>Create Account</h1>

              {/* <input type="text" placeholder="Name" /> */}
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

              <button className="button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleSignIn}>
              <h1>Sign in</h1>

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

              <button className="button" type="submit">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Sign In</h1>

                <p>Please, login to use the app.</p>

                <button
                  className="button ghost"
                  id="signIn"
                  onClick={() => setRightPanelActive(false)}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Sign Up</h1>

                <p>Create an account to start the journey with us.</p>

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
  );
}

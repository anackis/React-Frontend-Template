// import { ErrorComponent } from "../../components/modals/error/error"
import { LoginComponenet } from "../../components/modals/login/login"
import "./login-page.scss"

export function Login() {
  return (
    <main className="login-page">
      <LoginComponenet />
      {/* <ErrorComponent message={"Error"} /> */}
    </main>
  )
}

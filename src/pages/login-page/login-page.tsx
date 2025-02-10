// import ErrorComponent from '../../components/error-component/error-component';
import { LoginComponenet } from "../../components/modals/login/login";
import "./login-page.scss";

export function Login() {
  return (
    <main className="login-page">
      <LoginComponenet />
      {/* <ErrorComponent message={"Error"}/> */}
    </main>
  );
}


// import ErrorComponent from '../../components/error-component/error-component';
import LoginComponenet from '../../components/login-component/LoginComponent';
import './Login.scss';

function Login() {

  return (
    <main className='login-page'>
      <LoginComponenet />
      {/* <ErrorComponent message={"Error"}/> */}
    </main>
  );
}

export default Login;

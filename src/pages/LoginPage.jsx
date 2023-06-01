import { LoginForm } from '../components';
import { SignLayout } from '../layouts';

const LoginPage = () => {
  return <SignLayout svgName="welcome-login" Form={<LoginForm />} />;
};

export default LoginPage;

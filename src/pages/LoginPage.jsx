import { LoginForm } from '../components/LoginForm';
import { SignLayout } from '../layouts/SignLayout';

const LoginPage = () => {
  return <SignLayout svgName="welcome-login" Form={<LoginForm />} />;
};

export default LoginPage;

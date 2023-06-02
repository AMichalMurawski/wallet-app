import { LoginForm } from '../components/forms';
import { SignLayout } from '../layouts';

const LoginPage = () => {
  return <SignLayout svgName="welcome-login" Form={<LoginForm />} />;
};

export default LoginPage;

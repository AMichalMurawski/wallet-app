import { LoginForm } from '../../components/LoginForm/LoginForm';
import { SignLayout } from '../../layouts/SignLayout';
// import scss from './LoginPage.module.scss';

const LoginPage = () => {
  return <SignLayout svgName="welcome-login" Form={<LoginForm />} />;
};

export default LoginPage;

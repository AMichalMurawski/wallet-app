import { LoginForm } from '../../components/LoginForm/LoginForm';
import WelcomeLayout from '../../layouts/WelcomeLayout/WelcomeLayout';
// import scss from './LoginPage.module.scss';

const LoginPage = () => {
  return <WelcomeLayout svgName="welcome-login" Form={<LoginForm />} />;
};

export default LoginPage;

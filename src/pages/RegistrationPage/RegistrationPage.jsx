import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import WelcomeLayout from '../../layouts/WelcomeLayout/WelcomeLayout';
// import scss from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <WelcomeLayout svgName="welcome-registration" Form={<RegistrationForm />} />
  );
};

export default RegistrationPage;

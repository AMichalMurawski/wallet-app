import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
import { SignLayout } from '../../layouts/SignLayout/SignLayout';
// import scss from './RegistrationPage.module.scss';

const RegistrationPage = () => {
  return (
    <SignLayout svgName="welcome-registration" Form={<RegistrationForm />} />
  );
};

export default RegistrationPage;

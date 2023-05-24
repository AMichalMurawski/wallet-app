import { RegistrationForm } from '../components/RegistrationForm';
import { SignLayout } from '../layouts/SignLayout';

const RegistrationPage = () => {
  return (
    <SignLayout svgName="welcome-registration" Form={<RegistrationForm />} />
  );
};

export default RegistrationPage;

import { RegistrationForm } from '../components';
import { SignLayout } from '../layouts';

const RegistrationPage = () => {
  return (
    <SignLayout svgName="welcome-registration" Form={<RegistrationForm />} />
  );
};

export default RegistrationPage;

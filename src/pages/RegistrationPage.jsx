import { RegistrationForm } from '../components/forms';
import { SignLayout } from '../layouts';

const RegistrationPage = () => {
  return (
    <SignLayout svgName="welcome-registration" Form={<RegistrationForm />} />
  );
};

export default RegistrationPage;

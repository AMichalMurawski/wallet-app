import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useMediaMui } from '../../hooks';
import { SignupSchema } from '../../utils/validationSchema';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { SignTextField, SignButton } from '../utils';
import PasswordStrengthBar from 'react-password-strength-bar';

export const RegistrationForm = () => {
  const mediaMui = useMediaMui();

  const handleSubmit = e => {
    const { email, password, userName } = e;
    window.alert(
      'ToDo: Send registration data to API. Email: ' +
        email +
        ' / Password: ' +
        password +
        ' / User name: ' +
        userName
    );
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignupSchema,
    onSubmit: e => handleSubmit(e),
  });

  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        maxWidth: mediaMui.tablet ? '533px' : '460px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}
      onSubmit={formik.handleSubmit}
    >
      <SignTextField
        name="email"
        type="email"
        placeholder="Email"
        formik={formik}
        Icon={EmailIcon}
      />
      <SignTextField
        name="password"
        type="password"
        placeholder="Password"
        formik={formik}
        Icon={LockIcon}
        children={
          <PasswordStrengthBar
            password={formik.values.password}
            style={{
              display: formik.values.password.length < 4 ? 'none' : 'block',
              position: 'absolute',
              width: '100%',
              top: '24.5px',
              backgroundColor: 'transparent',
            }}
          />
        }
      />
      <SignTextField
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        formik={formik}
        Icon={LockIcon}
      />
      <SignTextField
        name="userName"
        type="text"
        placeholder="User name"
        formik={formik}
        Icon={PersonIcon}
      />
      <Box
        container="true"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <SignButton type="submit" text="Register" />
        <SignButton type="link" linkTo="/login" text="Log in" />
      </Box>
    </Box>
  );
};

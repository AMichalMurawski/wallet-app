import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useMediaMui } from '../hooks';
import { SigninSchema } from '../utils/validationSchema';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { SignTextField, SignButton } from './utils';

export const LoginForm = () => {
  const mediaMui = useMediaMui();

  const handleSubmit = e => {
    const { email, password } = e;
    window.alert(
      'ToDo: Send login data to API. Email: ' +
        email +
        ' / Password: ' +
        password
    );
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: handleSubmit,
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
        <SignButton type="submit" text="Log in" />
        <SignButton type="button" text="Register" />
      </Box>
    </Box>
  );
};

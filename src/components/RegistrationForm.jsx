import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useMediaMui } from '../hooks';
import { SignupSchema } from '../utils/validationSchema';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

const cssTextField = ({ Icon, formik, focus }) => {
  return {
    fullWidth: true,
    variant: 'standard',
    onChange: formik.handleChange,
    sx: {
      height: '32px',
      maxHeight: '32px',
    },
    InputProps: {
      startAdornment: (
        <Icon
          sx={{
            color: focus ? 'icon.active' : 'icon.nonactive',
            width: '24px',
            height: '24px',
            marginInline: '12.5px',
          }}
        />
      ),
    },
  };
};

const cssButton = type => {
  const css =
    type === 'submit'
      ? {
          border: 'none',
          backgroundColor: 'button.main',
          color: 'text.alternative',
        }
      : {
          border: '1px solid',
          borderColor: 'button.alternative',
          color: 'button.alternative',
        };
  return {
    ...css,
    width: '100%',
    maxWidth: '300px',
    height: '50px',
    borderRadius: '20px',
  };
};

const initialFocus = {
  email: false,
  password: false,
  confirmPassword: false,
  userName: false,
};

export const RegistrationForm = () => {
  const mediaMui = useMediaMui();
  const [focus, setFocus] = useState(initialFocus);

  const handleBlur = e => {
    formik.handleBlur(e);
    setFocus(initialFocus);
  };

  const handleFocus = e => {
    switch (e.target.name) {
      case 'email':
        setFocus({ ...initialFocus, email: true });
        break;
      case 'password':
        setFocus({ ...initialFocus, password: true });
        break;
      case 'confirmPassword':
        setFocus({ ...initialFocus, confirmPassword: true });
        break;
      case 'userName':
        setFocus({ ...initialFocus, userName: true });
        break;
      default:
        console.log('wrong focus switch');
    }
  };

  const handleSubmit = e => {
    const { email, password, userName } = e;
    console.log(
      'ToDo: Send registration data to API. Email: ' +
        email +
        ' / Password: ' +
        password +
        ' / User name: ' +
        userName
    );
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
      <TextField
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formik.values.email}
        {...cssTextField({
          Icon: EmailIcon,
          formik,
          focus: focus.email,
        })}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TextField
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        value={formik.values.password}
        {...cssTextField({
          Icon: LockIcon,
          formik,
          focus: focus.password,
        })}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        placeholder="Confirm password"
        value={formik.values.confirmPassword}
        {...cssTextField({
          Icon: LockIcon,
          formik,
          focus: focus.confirmPassword,
        })}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <TextField
        id="userName"
        name="userName"
        type="text"
        placeholder="User name"
        value={formik.values.userName}
        {...cssTextField({
          Icon: PersonIcon,
          formik,
          focus: focus.userName,
        })}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
        onBlur={handleBlur}
        onFocus={handleFocus}
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
        <Button type="submit" sx={cssButton('submit')}>
          Register
        </Button>
        <Button type="button" sx={cssButton('')}>
          Log in
        </Button>
      </Box>
    </Box>
  );
};

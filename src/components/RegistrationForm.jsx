import { Box, Button, TextField } from '@mui/material';
import { IconSVG } from './IconSVG';
import { useFormik } from 'formik';
import { useMediaMui } from '../hooks';
import { SignupSchema } from '../utils/validationSchema';

const cssTextField = ({
  name,
  type,
  placeholder,
  svgName,
  formik,
  handleChange,
}) => {
  return {
    fullWidth: true,
    id: name,
    name,
    type,
    variant: 'standard',
    value: formik.values[name],
    onChange: handleChange,
    placeholder,
    sx: {
      height: '32px',
      maxHeight: '32px',
    },
    InputProps: {
      startAdornment: (
        <IconSVG
          name={svgName}
          sx={{
            color: 'icon.nonactive',
            width: '24px',
            height: '24px',
            marginLeft: '12.5px',
            marginRight: '20px',
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

export const RegistrationForm = () => {
  const mediaMui = useMediaMui();

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

  const handleChange = e => {
    formik.handleChange(e);
    formik.touched[e.target.name] = true;
  };

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
        {...cssTextField({
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          svgName: 'email',
          formik,
          handleChange,
        })}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        {...cssTextField({
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          svgName: 'lock',
          formik,
          handleChange,
        })}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        {...cssTextField({
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm password',
          svgName: 'lock',
          formik,
          handleChange,
        })}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />

      <TextField
        {...cssTextField({
          name: 'userName',
          type: 'text',
          placeholder: 'User name',
          svgName: 'user',
          formik,
          handleChange,
        })}
        error={formik.touched.userName && Boolean(formik.errors.userName)}
        helperText={formik.touched.userName && formik.errors.userName}
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

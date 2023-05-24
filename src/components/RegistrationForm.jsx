import { Box, Button, TextField } from '@mui/material';
import { IconSVG } from './IconSVG';
import { useFormik } from 'formik';
import { useMediaMui } from '../hooks';

const cssTextField = ({ name, type, placeholder, svgName, formik }) => {
  return {
    fullWidth: true,
    id: name,
    name: name,
    type: type,
    variant: 'standard',
    value: formik.values[name],
    onChange: formik.handleChange,
    placeholder: placeholder,
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
    console.log(e);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    },
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
        {...cssTextField({
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          svgName: 'email',
          formik: formik,
        })}
      />
      <TextField
        {...cssTextField({
          name: 'password',
          type: 'password',
          placeholder: 'Password',
          svgName: 'lock',
          formik: formik,
        })}
      />
      <TextField
        {...cssTextField({
          name: 'confirmPassword',
          type: 'password',
          placeholder: 'Confirm password',
          svgName: 'lock',
          formik: formik,
        })}
      />

      <TextField
        {...cssTextField({
          name: 'userName',
          type: 'text',
          placeholder: 'User name',
          svgName: 'user',
          formik: formik,
        })}
      />

      <Box
        container
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

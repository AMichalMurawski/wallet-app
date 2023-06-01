import { TextField } from '@mui/material';
import { useState } from 'react';

const cssTextField = ({ Icon, formik, isFocus }) => {
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
            color: isFocus ? 'icon.active' : 'icon.nonactive',
            width: '24px',
            height: '24px',
            marginInline: '12.5px',
          }}
        />
      ),
    },
  };
};

export const SignTextField = ({ name, type, placeholder, formik, Icon }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = e => {
    setIsFocus(true);
  };

  const handleBlur = e => {
    setIsFocus(false);
    formik.handleBlur(e);
  };

  return (
    <TextField
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      value={formik.values[name]}
      {...cssTextField({
        Icon,
        formik,
        isFocus,
      })}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onBlur={handleBlur}
      onFocus={handleFocus}
    />
  );
};

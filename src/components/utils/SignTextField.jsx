import { Button, TextField } from '@mui/material';
import { createRef, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const SignTextField = ({
  name,
  type,
  placeholder,
  formik,
  Icon,
  children,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const inputText = createRef();

  const handleFocus = e => {
    setIsFocus(true);
    formik.handleBlur(e);
  };

  const handleBlur = e => {
    setIsFocus(false);
    formik.handleBlur(e);
  };

  const handlePasswordShow = e => {
    inputText.current.focus();
    setPasswordShow(!passwordShow);
  };

  return (
    <div style={{ position: 'relative' }}>
      <TextField
        id={name}
        name={name}
        inputRef={inputText}
        type={type !== 'password' ? type : !passwordShow ? 'password' : 'text'}
        placeholder={placeholder}
        value={formik.values[name]}
        fullWidth="true"
        variant="standard"
        onChange={formik.handleChange}
        sx={{
          position: !!children && 'relative',
          height: '32px',
          maxHeight: '32px',
        }}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
        onBlur={handleBlur}
        onFocus={handleFocus}
        InputProps={{
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
          endAdornment: (
            <>
              {type === 'password' ? (
                !passwordShow ? (
                  <VisibilityOffIcon
                    sx={{
                      color: isFocus ? 'icon.active' : 'icon.nonactive',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                    }}
                    onClick={handlePasswordShow}
                  />
                ) : (
                  <VisibilityIcon
                    sx={{
                      color: isFocus ? 'icon.active' : 'icon.nonactive',
                      width: '24px',
                      height: '24px',
                      cursor: 'pointer',
                    }}
                    onClick={handlePasswordShow}
                  />
                )
              ) : null}
            </>
          ),
        }}
      />
      {children}
    </div>
  );
};

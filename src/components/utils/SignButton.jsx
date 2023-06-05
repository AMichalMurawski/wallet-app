import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

export const SignButton = ({ type, linkTo, text }) => {
  return (
    <Button
      type={type === 'link' ? null : type === 'submit' ? 'sumbit' : 'button'}
      component={type === 'link' ? Link : null}
      to={type === 'link' ? linkTo : null}
      sx={cssButton(type)}
    >
      {text}
    </Button>
  );
};

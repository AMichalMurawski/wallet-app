import { Button } from '@mui/material';

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

export const SignButton = ({ type, text }) => {
  return (
    <Button type={type === 'submit' ? 'submit' : 'button'} sx={cssButton(type)}>
      {text}
    </Button>
  );
};

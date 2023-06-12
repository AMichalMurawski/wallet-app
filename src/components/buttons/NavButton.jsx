import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavButton = ({ text, linkTo }) => {
  return (
    <Button
      component={Link}
      to={linkTo}
      sx={{
        width: '100%',
        maxWidth: '300px',
        height: '50px',
        borderRadius: '20px',
        border: '1px solid',
        borderColor: 'button.alternative',
        color: 'button.alternative',
      }}
    >
      {text}
    </Button>
  );
};

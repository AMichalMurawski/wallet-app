import { Button } from '@mui/material';

export const SubmitButton = ({ text }) => {
  return (
    <Button
      type="submit"
      sx={{
        width: '100%',
        maxWidth: '300px',
        height: '50px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: 'button.main',
        color: 'text.alternative',
      }}
    >
      {text}
    </Button>
  );
};

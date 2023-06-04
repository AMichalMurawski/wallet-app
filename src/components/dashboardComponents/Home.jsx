import { AppBar, Box, Container, Typography } from '@mui/material';
import { IconLogo } from '../icons';

export const Home = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'background.elements',
      }}
    >
      <Container
        sx={{
          padding: '20px 16px',
          minWidth: '320px',
          maxWidth: '1280px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconLogo />
        <Box>
          <Typography sx={{ color: 'text.main' }}>Name | Exit</Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

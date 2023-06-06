import { Box } from '@mui/material';
import { Header } from '../components/dashboard';
import { useMediaMui } from '../hooks';
import { Suspense } from 'react';
import { Navigation } from '../components/dashboard/Navigation';
import { Outlet } from 'react-router-dom/dist';

const DahboardPage = () => {
  const mediaMui = useMediaMui();

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          minWidth: '320px',
          margin: '0 auto',
          padding: '40px 16px',
          display: 'flex',
          flexDirection: mediaMui.desktop ? 'row-reverse' : 'column-reverse',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box component="main">
          <Suspense>
            <Outlet />
          </Suspense>
        </Box>
        <Box component="aside">
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
};

export default DahboardPage;

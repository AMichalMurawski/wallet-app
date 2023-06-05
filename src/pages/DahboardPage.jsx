import { Box } from '@mui/material';
import { Header } from '../components/dashboard';
import { useMediaMui } from '../hooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Navigation } from '../components/dashboard/Navigation';

const HomeTab = lazy(() => import('../components/dashboard/home/HomeTab'));
const DiagramTab = lazy(() =>
  import('../components/dashboard/diagram/DiagramTab')
);

const DahboardPage = () => {
  const mediaMui = useMediaMui();

  return (
    <Box sx={{ minHeight: '100%', height: '100%' }}>
      <Header />
      <Box
        sx={{
          width: '100%',
          maxWidth: '1280px',
          minWidth: '320px',
          height: '100%',
          minHeight: '100%',
          backgroundColor: 'gray',
          margin: '0 auto',
          display: 'flex',
          flexDirection: mediaMui.desktop ? 'row-reverse' : 'column-reverse',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box component="main">
          <Routes>
            <Route path="home" element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
            <Route path="*" element={<Navigate to="home" />} />
          </Routes>
        </Box>
        <Box
          component="aside"
          sx={{
            padding: '40px 16px',
          }}
        >
          <Navigation />
        </Box>
      </Box>
    </Box>
  );
};

export default DahboardPage;

import { Box } from '@mui/material';
import { Header } from '../components/dashboard';
import { useMediaMui } from '../hooks';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomeTab = lazy(() => import('../components/dashboard/home/HomeTab'));
const DiagramTab = lazy(() =>
  import('../components/dashboard/diagram/DiagramTab')
);

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
        }}
      >
        <Box
          sx={{
            width: '100%',
            minWidth: '100%',
            height: '100%',
            minHeight: '100%',
            display: 'flex',
            flexDirection: mediaMui.desktop ? 'row-reverse' : 'column-reverse',
          }}
        >
          <Box component="main">
            <Routes>
              <Route path="home" element={<HomeTab />} />
              <Route path="diagram" element={<DiagramTab />} />
              <Route path="*" element={<Navigate to="home" />} />
            </Routes>
          </Box>
          <Box component="aside"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DahboardPage;

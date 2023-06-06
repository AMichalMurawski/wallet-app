import { Box } from '@mui/material';
import { Header, Navigation, Balance, Currency } from '../components/dashboard';
import { useMediaMui } from '../hooks';
import { Suspense } from 'react';
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
        <Box
          component="aside"
          sx={{
            width: '100%',
            display: mediaMui.tablet ? 'flex' : null,
            flexWrap: mediaMui.tablet && !mediaMui.desktop && 'wrap',
            flexDirection: mediaMui.desktop ? 'column' : null,
            gap: mediaMui.tablet ? '30px' : null,
          }}
        >
          <Box
            sx={{
              flexBasis:
                mediaMui.tablet &&
                !mediaMui.desktop &&
                'calc((100% - 30px) / 2)',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              alignItems: !mediaMui.tablet ? 'center' : null,
              gap: '30px',
            }}
          >
            <Navigation />
            <Balance />
          </Box>
          <Box
            sx={{
              flexBasis:
                mediaMui.tablet &&
                !mediaMui.desktop &&
                'calc((100% - 30px) / 2)',
            }}
          >
            <Currency />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DahboardPage;

import { Box } from '@mui/material';
import { Header, Navigation, Balance, Currency } from '../components/dashboard';
import { useMediaMui } from '../hooks';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';

const DahboardPage = () => {
  const mediaMui = useMediaMui();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Box
        sx={{
          width: 1,
          height: 1,
          maxWidth: 1280,
          minWidth: 320,
          margin: '0 auto',
          padding: '40px 16px',
          display: 'flex',
          flexDirection: mediaMui.desktop ? 'row-reverse' : 'column-reverse',
          gap: mediaMui.desktop ? '69px' : '20px',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <Box component="main" sx={{ width: 1 }}>
          <Suspense>
            <Outlet />
          </Suspense>
        </Box>
        {mediaMui.desktop ? (
          <Box sx={{ height: 1, boxShadow: '0 0 1px 1px #000' }}></Box>
        ) : null}
        <Box
          component="aside"
          sx={{
            width: !mediaMui.desktop ? 1 : null,
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
            {mediaMui.tablet ? <Balance /> : null}
          </Box>
          {mediaMui.tablet ? (
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
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default DahboardPage;

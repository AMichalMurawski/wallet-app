import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { IconSVG } from '../components/IconSVG/IconSVG';
import { Box } from '@mui/material';
import { useMediaMui } from '../hooks';

export const BackgroundLayout = () => {
  const mediaMui = useMediaMui();

  return (
    <div>
      {mediaMui.tablet ? (
        <Box
          position="fixed"
          minWidth="100vw"
          minHeight="100vh"
          sx={{ backgroundColor: 'background.main' }}
          zIndex="background.main"
        >
          <IconSVG
            name="ellipse"
            sx={{
              color: 'icon.ellipse1',
              width: '67.98vh',
              height: '60.17vh',
              position: 'absolute',
              bottom: '-29.04vh',
              left: '-23.32vh',
              transform: 'rotate(16.86deg)',
            }}
          />
          <IconSVG
            name="ellipse"
            sx={{
              color: 'icon.ellipse2',
              width: '67.98vh',
              height: '60.17vh',
              position: 'absolute',
              top: '-27.83vh',
              right: '-35.42vh',
              transform: 'rotate(21.94deg)',
            }}
          />
        </Box>
      ) : (
        <Box
          position="fixed"
          minWidth="100vw"
          minHeight="100vh"
          sx={{ backgroundColor: 'background.alternative' }}
        />
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

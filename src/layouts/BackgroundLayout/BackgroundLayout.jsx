import { Suspense } from 'react';
import scss from './BackgroundLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { IconSVG } from '../../components/icons/IconSVG/IconSVG';
import { Box } from '@mui/material';

export const BackgroundLayout = () => {
  return (
    <div>
      <Box fixed minWidth="100vw" minHeight="100%" className={scss.bg}>
        <Box className={scss['bg-ellipse1']}>
          <IconSVG
            name={'ellipse'}
            width={'618px'}
            height={'547px'}
            fill={'--icon-elipse1'}
          />
        </Box>
        <Box className={scss['bg-ellipse2']}>
          <IconSVG
            name={'ellipse'}
            width={'618px'}
            height={'547px'}
            fill={'--icon-elipse2'}
          />
        </Box>
      </Box>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

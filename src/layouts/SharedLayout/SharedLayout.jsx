import { Suspense } from 'react';
// import scss from './SharedLayout.module.scss';
import { Outlet } from 'react-router-dom';
import { IconSVG } from '../../components/utils/IconSVG/IconSVG';

export const SharedLayout = () => {
  return (
    <div>
      <div>
        <IconSVG
          name={'ellipse'}
          width={'100px'}
          height={'100px'}
          fill={'blue'}
        />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

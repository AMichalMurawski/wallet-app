import { Suspense } from 'react';
// import scss from './SharedLayout.module.scss';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <div></div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

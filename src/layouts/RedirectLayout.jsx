import { Suspense } from 'react';
import { Outlet } from 'react-router-dom/dist';

export const RedirectLayout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

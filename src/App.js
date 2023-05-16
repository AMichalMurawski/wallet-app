import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './layouts/SharedLayout/SharedLayout';
import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

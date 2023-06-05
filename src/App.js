import { Navigate, Route, Routes } from 'react-router-dom';
import { BackgroundLayout } from './layouts/BackgroundLayout';
import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const DashboardPage = lazy(() => import('./pages/DahboardPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BackgroundLayout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="/*" element={<DashboardPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

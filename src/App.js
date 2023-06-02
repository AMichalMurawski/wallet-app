import { Navigate, Route, Routes } from 'react-router-dom';
import { BackgroundLayout } from './layouts/BackgroundLayout';
import { lazy } from 'react';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BackgroundLayout />}>
        <Route index element={<Navigate to="registration" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;

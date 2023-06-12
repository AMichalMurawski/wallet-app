import { Navigate, Route, Routes } from 'react-router-dom';
import { BackgroundLayout } from './layouts/BackgroundLayout';
import { lazy } from 'react';
import { useMediaMui } from './hooks';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const DashboardPage = lazy(() => import('./pages/DahboardPage'));
const HomeTab = lazy(() => import('./components/dashboard/home/HomeTab'));
const DiagramTab = lazy(() =>
  import('./components/dashboard/diagram/DiagramTab')
);
const CurrencyTab = lazy(() =>
  import('./components/dashboard/currency/CurrencyTab')
);

const App = () => {
  const mediaMui = useMediaMui();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/wallet" />} />
      <Route path="wallet" element={<BackgroundLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="*" element={<DashboardPage />}>
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
          {!mediaMui.tablet ? (
            <Route path="currency" element={<CurrencyTab />} />
          ) : null}
          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/wallet/home" />} />
    </Routes>
  );
};

export default App;

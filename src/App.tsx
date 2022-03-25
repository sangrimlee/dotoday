import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { PAGE_URL } from './constants/url';
import { useAuthContext } from './contexts/AuthContext';
import { DashboardLayout } from './components/layouts/DashboardLayout';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import EmailLoginPage from './pages/EmailLoginPage';
import FindPasswordPage from './pages/FindPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import DashboardPage from './pages/DashboardPage';
import CalendarPage from './pages/CalendarPage';
import ProjectsPage from './pages/ProjectsPage';
import AccountPage from './pages/AccountPage';

export default function App() {
  const { isLoggedIn, isLanding } = useAuthContext();

  if (isLanding) {
    return <LandingPage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_URL.HOMEPAGE} element={<HomePage />} />
        <Route path={PAGE_URL.LOGIN} element={<LoginPage />} />
        <Route path={PAGE_URL.REGISTER} element={<RegisterPage />} />
        <Route path={PAGE_URL.EMAIL_LOGIN} element={<EmailLoginPage />} />
        <Route path={PAGE_URL.FIND_PASSWORD} element={<FindPasswordPage />} />
        <Route path={PAGE_URL.RESET_PASSWORD} element={<ResetPasswordPage />} />
        {isLoggedIn && (
          <Route path={PAGE_URL.DASHBOARD} element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path={PAGE_URL.CALENDAR} element={<CalendarPage />} />
            <Route path={PAGE_URL.PROJECTS} element={<ProjectsPage />} />
            <Route path={PAGE_URL.ACCOUNT} element={<AccountPage />} />
          </Route>
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

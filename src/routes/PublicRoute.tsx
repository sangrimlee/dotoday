import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PAGE_URL } from '@/constants/url';

import LoginPage from '@/pages/LoginPage';
import EmailLoginPage from '@/pages/EmailLoginPage';
import RegisterPage from '@/pages/RegisterPage';
import FindPasswordPage from '@/pages/FindPasswordPage';
import ResetPasswordPage from '@/pages/ResetPasswordPage';
import LandingPage from '@/pages/LandingPage';

export default function PublicRoute() {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Redirect to={PAGE_URL.LOGIN} /> */}
        <LandingPage />
      </Route>
      <Route path={PAGE_URL.EMAIL_LOGIN}>
        <EmailLoginPage />
      </Route>
      <Route path={PAGE_URL.LOGIN}>
        <LoginPage />
      </Route>
      <Route path={PAGE_URL.REGISTER}>
        <RegisterPage />
      </Route>
      <Route path={PAGE_URL.FIND_PASSWORD}>
        <FindPasswordPage />
      </Route>
      <Route path={PAGE_URL.RESET_PASSWORD}>
        <ResetPasswordPage />
      </Route>
    </Switch>
  );
}

import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '@/pages/LoginPage';

export default function PublicRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Switch>
  );
}

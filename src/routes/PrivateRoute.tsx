import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppPage from '@/pages/AppPage';

export default function PrivateRoute() {
  return (
    <Switch>
      <Route exact path="/app">
        <AppPage />
      </Route>
    </Switch>
  );
}

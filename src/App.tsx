import React, { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app">
          {isLoggedIn ? <PrivateRoute /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <PublicRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

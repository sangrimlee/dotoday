import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useAuthContext } from './contexts/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import LandingPage from './pages/LandingPage';
import { PAGE_URL } from './constants/url';

export default function App() {
  const { isLoggedIn, isLanding } = useAuthContext();

  if (isLanding) {
    return <LandingPage />;
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app">
          {isLoggedIn ? <PrivateRoute /> : <Redirect to={PAGE_URL.LOGIN} />}
        </Route>
        <Route path="/">
          {!isLoggedIn ? <PublicRoute /> : <Redirect to={PAGE_URL.APP} />}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

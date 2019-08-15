import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentRoute from './contentRoute';

export default () => (
  <Switch>
    <Route
      path={'/login'}
      component={() => (<h1>登陆</h1>)}
    />
    <Route path={'/'} component={ContentRoute} />
  </Switch>
);

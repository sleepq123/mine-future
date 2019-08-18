/** 路由管理 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentRoute from './contentRoute';

import Login from '@src/pages/Login';

export default () => (
  <Switch>
    <Route
      path={'/login'}
      component={Login}
    />
    <Route path={'/'} component={ContentRoute} />
  </Switch>
);

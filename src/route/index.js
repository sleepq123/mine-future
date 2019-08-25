/** 路由管理 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentRoute from './contentRoute';

import Login from '@src/pages/Login';
import Main from '@src/pages/_layout/Main'


export default () => (
  <Switch>
    <Route
      path='/login'
      component={Login}
    />
    <Route path='/' component={() => {
      return <Main content={<ContentRoute/>}></Main>
    }} />
  </Switch>
);

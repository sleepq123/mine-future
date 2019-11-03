import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '@src/pages/Home';

export default () => (
  <Switch>
    <Route path="/home" component={Home} />
  </Switch>
);

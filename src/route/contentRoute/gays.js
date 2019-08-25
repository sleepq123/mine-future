import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Gays from '@src/pages/Gays';

export default () => (
  <Switch>
    <Route path="/" component={Gays} />
  </Switch>
);

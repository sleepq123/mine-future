import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '@src/pages/About';

export default () => (
  <Switch>
    <Route path="/" component={About} />
  </Switch>
);

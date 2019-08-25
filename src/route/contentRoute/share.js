import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Share from '@src/pages/Share';

export default () => (
  <Switch>
    <Route path="/" component={Share} />
  </Switch>
);

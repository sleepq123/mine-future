import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path="/content02/default" component={() => <h1>content02</h1>} />
  </Switch>
);

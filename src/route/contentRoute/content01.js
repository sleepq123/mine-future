import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default () => (
  <Switch>
    <Route path="/content01/default" component={() => <h1>content01</h1>} />
  </Switch>
);

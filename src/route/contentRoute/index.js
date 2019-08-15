import React from 'react';
import { Switch, Route } from 'react-router-dom';
import content01 from './content01';
import content02 from './content02';

export default () => (
  <Switch>
    <Route path="/content01" component={content01} />
    <Route path="/content02" component={content02} />
  </Switch>
);

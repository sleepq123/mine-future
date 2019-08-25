import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '@src/pages/Blog';

export default () => (
  <Switch>
    <Route path="/blog" component={Blog} />
  </Switch>
);

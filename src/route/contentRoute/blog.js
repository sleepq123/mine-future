import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from '@src/pages/Blog';
import BlogInfo from '@src/pages/Blog/blogInfo';

export default () => (
  <Switch>
    <Route path="/blog/info/:id"  component={BlogInfo} />
    <Route path="/blog" component={Blog} />
  </Switch>
);

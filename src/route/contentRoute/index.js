import React from 'react';
import { Switch, Route } from 'react-router-dom';
import blog from './blog';
import share from './share';
import about from './about';
import gays from './gays';

export default () => (
  <Switch>
    <Route path="/blog" component={blog} />
    <Route path="/share" component={share} />
    <Route path="/about" component={about}/>
    <Route path="/gays" component={gays}/>
  </Switch>
);

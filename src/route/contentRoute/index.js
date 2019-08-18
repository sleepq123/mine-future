import React from 'react';
import { Switch, Route } from 'react-router-dom';
import content01 from './content01';
import content02 from './content02';

import Main from '@src/pages/Main';

export default () => (
  <Switch>
    <Route path="/" component={Main}/>
    <Route path="/content01" component={content01} />
    <Route path="/content02" component={content02} />
  </Switch>
);

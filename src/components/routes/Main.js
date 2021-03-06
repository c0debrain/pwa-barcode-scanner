import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CameraHandler from '../cameraHandler';
import ProductDisplay from '../productDisplay';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={CameraHandler}/>
      <Route path='/product/:id' component={ProductDisplay}/>
    </Switch>
  </main>
);

export default Main;

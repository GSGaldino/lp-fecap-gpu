import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GPUHomepage from './pages/GPUHomepage';

export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={GPUHomepage} />
        
      </Switch>
    </BrowserRouter>
  )
}

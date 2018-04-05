import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './HomePage';
import ThunkAsync from './ThunkAsync';
import PromiseAsync from './PromiseAsync';
import SagaAsync from './SagaAsync';
import AsyncAwaitAsync from './AsyncAwaitAsync';
import ObservablesAsync from './ObservablesAsync';

const Main = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path="/thunks" component={ThunkAsync} />
      <Route path="/promises" component={PromiseAsync} />
      <Route path="/async-await" component={AsyncAwaitAsync} />
      <Route path="/sagas" component={SagaAsync} />
      <Route path="/observables" component={ObservablesAsync} />
    </Switch>
  </div>
);

export default Main;




import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Counter from './components/Counter';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Switch>
        <Route path="/" component={Counter} />
        <Route path="/counter" component={Counter} />
        <Redirect to="/" />
      </Switch>
    </RecoilRoot>
  );
}

export default App;

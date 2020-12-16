import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Counter from './components/Counter';
import { RecoilRoot } from 'recoil';
import Todo from 'components/Todo';

function App() {
  return (
    <RecoilRoot>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/todo" component={Todo} />
        <Route path="/" component={Counter} />
        <Redirect to="/" />
      </Switch>
    </RecoilRoot>
  );
}

export default App;

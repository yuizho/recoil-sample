import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';
import Counter from './components/Counter';
import { RecoilRoot } from 'recoil';
import Todo from 'components/Todo';
import Home from 'components/Home';

function App() {
  return (
    <RecoilRoot>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/todo" component={Todo} />
        <Route path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </RecoilRoot>
  );
}

export default App;

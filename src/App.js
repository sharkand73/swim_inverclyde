import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar';
import SwimMeet from './components/swim-meet/SwimMeet';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/swim-meet' component = {SwimMeet} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

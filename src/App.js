import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/home/Home';
import SwimMeet from './components/swim-meet/SwimMeet';
import News from './components/news/News';


function App() {
  return (  
    <Router>
      <Header />
      <NavBar />
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route path = '/swim-meet' component = {SwimMeet} />
          <Route path = '/news' component = {News} />
        </Switch>
      </Router>
  );
}

export default App;

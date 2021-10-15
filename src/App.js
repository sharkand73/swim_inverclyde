import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SwimMeet from './components/SwimMeet';
import News from './components/News';
import Membership from './components/Membership';
import Other from './components/Other';
import About from './components/About';
import Policies from './components/Policies';
import Contact from './components/Contact';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    fetch('https://swim-inverclyde-default-rtdb.europe-west1.firebasedatabase.app/.json')
    .then(results => results.json())
    .then(info => setData(info))
  }, []);

  if (!data) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (  
    <div className="container">
      <Router>
        <Header />
        <NavBar />
          <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/swim-meet' component = {SwimMeet} />
            <Route path = '/news' component = {News} />
            <Route path = '/membership' component = {Membership} />
            <Route path = '/about' component = {About} />
            <Route path = '/other' component = {Other} />
            <Route path = '/policies' component = {Policies} />
            <Route path = '/contact' component = {Contact} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;

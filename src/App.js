import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Spearfishing from './components/pages/Spearfishing';
import Resume from './components/pages/Resume';
import Links from './components/pages/Links';
import Octopusvideo from './components/pages/Octopusvideo';
import Halibutpic from './components/pages/Halibutpic';
import Corbinapic from './components/pages/Corbinapic';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/spearfishing' component={Spearfishing} />
          <Route path='/resume' component={Resume} />
          <Route path='/links' component={Links} />
          <Route path='/octopusvideo' component={Octopusvideo} />
          <Route path='/halibutpic' component={Halibutpic} />
          <Route path='/corbinapic' component={Corbinapic} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

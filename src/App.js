import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/about';
import Treks from './pages/treks';
import Points from './pages/points';
import Point from './pages/point';
import Contact from './pages/contact';
import QrScan from './pages/qr-scan';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Navbar from './components/Navbar';
import Home from './pages/';

function App() {
  return (
    <Router>
      <Home />
      <Switch>
        <Route path='/treks' component={Treks} />
        <Route path='/points' component={Points} />
        <Route path='/point' component={Point} />
        <Route path='/qr-scan' component={QrScan} />
        <Route path='/about-us' component={About} />
        <Route path='/contact-us' component={Contact} /> 
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;

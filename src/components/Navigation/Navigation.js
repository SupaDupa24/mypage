import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';

export const Navigation = () => {
    return (
    <Router>
        <nav className='navigation' id='navigation'>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            </ul>
        </nav>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    
  </Router>
    )
}
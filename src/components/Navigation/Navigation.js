import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Projects } from '../../pages/Projects/Projects';
import { BlogSpot } from '../../pages/BlogSpot/BlogSpot';
import './Navigation.css';

export const Navigation = () => {
    return (
    <Router>
         <ul className="topnav" id="myTopnav">
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>
              <li className='garage'>
                  <Link to="/">IndeX Garge</Link>
              </li>
              
            <div className='special'>
              <li>
                  <Link to="/projects">Projects</Link>
              </li>
              <li id='special'>
                  <Link to="/blogspot">BlogSpot</Link>
              </li>
            </div>
        </ul>

            <hr  />
        
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
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogspot">
          <BlogSpot />
        </Route>
      </Switch>
    
  </Router>
    )
}
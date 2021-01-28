import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Projects } from '../../pages/Projects/Projects';
import { BlogSpot } from '../../pages/BlogSpot/BlogSpot';
import NavbarPage from '../NavbarPage/NavbarPage';
import './Navigation.css';

export const Navigation = () => {
    return (
    <Router> 
        <NavbarPage />

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
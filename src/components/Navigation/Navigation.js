import React from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { About } from '../../pages/About/About';
import { Contact } from '../../pages/Contact/Contact';
import { Projects } from '../../pages/Projects/Projects';
import { BlogSpot } from '../../pages/BlogSpot/BlogSpot';
import Logo from '../assets/Logo.png';
import './Navigation.css';

export const Navigation = () => {
    return (
    <Router> 
        <ul className="topnav" id="myTopnav">
          <img src={Logo} alt='logo' style={{width:100, height:50}}/>
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
                    <Link to="/">INDEX GARAGE</Link>
                </li>
                
              <div className='special'>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/blogspot">BlogSpot</Link>
                </li>
              </div>
              <img src={Logo} alt='logo' style={{width:100, height:50}}/>
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
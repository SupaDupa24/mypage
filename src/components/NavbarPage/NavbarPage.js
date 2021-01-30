import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar className='barbus' color="black" dark expand="md" >
        <MDBNavbarBrand>
          <strong className="white-text">I|G|X</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">CONTACT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">INDEX GARAGE</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/projects">PROJECTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/blogspot">BLOGSPOT</MDBNavLink>
            </MDBNavItem>
           
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;
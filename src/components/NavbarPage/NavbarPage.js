import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,

} from "mdbreact";

import './NavbarPage.css';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    
      <MDBNavbar className='barbus' color="black" dark expand="md" >
        <MDBNavbarBrand>
          <strong className="white-text">I|G|X</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className='anime' to="/">HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='anime' to="/about">ABOUT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='anime' to="/contact">CONTACT</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='anime' to="/">INDEX GARAGE</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='anime' to="/projects">PROJECTS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className='anime' to="/blogspot">BLOGSPOT</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    
    );
  }
}

export default NavbarPage;
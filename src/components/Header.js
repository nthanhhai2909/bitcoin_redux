import React from 'react'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Header = ({}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={'/'} style={{color:'white'}}>BLOCKCHAIN</Link>
            </Navbar.Brand>
            <Nav>
                <NavItem onClick={()=>this.handleClick()}><Link to={'/login'} style={{color:'white'}}>Login</Link></NavItem>
            </Nav>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem to="about">GET A FREE WALLET</NavItem>
        </Nav>
    </Navbar>
)



export default Header


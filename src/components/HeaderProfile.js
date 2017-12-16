import React from 'react'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const HeaderProfile = ({history}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={'/'} style={{color:'white'}}>BLOCKCHAIN</Link>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem>Logout</NavItem>
        </Nav>
    </Navbar>
)



export default HeaderProfile


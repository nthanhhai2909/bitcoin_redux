import React from 'react'
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Header = ({history}) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to={'/'} style={{color:'white'}}>BLOCKCHAIN</Link>
            </Navbar.Brand>
            <Nav>
                <NavItem ><Link onClick={()=>history.push('/login')}to={'/login'} style={{color:'white'}}>Login</Link></NavItem>
            </Nav>
        </Navbar.Header>
        <Nav pullRight>
            <NavItem to="about" onClick={()=>history.push('/register')}>GET A FREE WALLET</NavItem>
        </Nav>
    </Navbar>
)



export default Header


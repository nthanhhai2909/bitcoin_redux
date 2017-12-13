import React from 'react'
import PropTypes from 'prop-types';
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav,Row, Col, Grid, Pager, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Login = ({message}) => (
    <div style={{backgroundColor:'#1A237E', height: 800}}>
        <div></div>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'} style={{color:'white'}}>BLOCKCHAIN</Link>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>

        <div className="signup"> 
        <Grid>
            <Row className="col-md-offset-3 login">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'red'}}>{message}</h4>
                            <h2 style={{textAlign:'center', color:'#1A237E'}}>#BlockChain</h2>
                            <h4 style={{color:'black'}}>Username</h4>
                            <TextField fullWidth={true} 
                                floatingLabelText="Enter username"/><br/>
                            <h4 style={{ color:'black', marginTop:20}}>Password</h4>
                            <TextField inputStyle={true} 
                                 fullWidth={true} type="password" 
                           
                                 floatingLabelText="Enter password"
                            />
                            <RaisedButton label="Login" primary={true} style={{marginRight:1, marginTop:50}} />
                            <RaisedButton label="Sign-up" secondary={true} >
                            </RaisedButton>
                        </div> 
                    </Paper>
                        
                </Col>
            </Row>
        </Grid>

    </div>

    </div>
)

Login.propTypes ={

}

export default Login
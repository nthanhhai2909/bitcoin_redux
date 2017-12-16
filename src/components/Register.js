import React from 'react'
import PropTypes from 'prop-types';
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav,Row, Col, Grid, Pager, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Register = ({history, setFullName, setUserName,
    setPassword, setCofirm, isvalidUsername, isvalidFullName,
    isvalidPassword, isvalidConfirm, isValidForm, messageUsername,
    submitForm }) => {
        return(
    <div style={{backgroundColor:'white', height: 800}}>
    
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={'/'} style={{color:'white'}}>BLOCKCHAIN</Link>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>

        <div className="signup"> 
        <Grid>
            <Row className="col-md-offset-3">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'red'}}>{isValidForm ? '' : 'REGISTER FAIL'}</h4>
                            <h2 style={{textAlign:'center', color:'white'}}>#Register</h2>
                            <h4 style={{color:'black'}}>Full name</h4>
                            <TextField fullWidth={true} 
                                onChange={(e) => setFullName(e.target.value)}
                                floatingLabelText="Enter name"
                                errorText={isvalidFullName ? '' : 'INVALID'}
                                /><br/>
                            <h4 style={{color:'black'}}>Username</h4>
                            <TextField fullWidth={true} 
                                onChange={(e) => setUserName(e.target.value)}
                                floatingLabelText="Enter username"
                                errorText={isvalidUsername ? '' : 'INVALID'}
                                /><br/>
                            <h4 style={{color:'black'}}>Password</h4>
                            <TextField inputStyle={true} 
                                fullWidth={true} type="password" 
                                onChange={(e) => setPassword(e.target.value)} 
                                floatingLabelText="Enter password"
                                errorText={isvalidPassword ? '' : 'INVALID'}
                            />
                            <h4 style={{color:'black'}}>Confirm</h4>
                            <TextField inputStyle="password" 
                                fullWidth={true} type="password"
                                onChange={(e) => setCofirm(e.target.value)}
                                floatingLabelText="Enter confirm"
                                errorText={isvalidConfirm ? '': 'INVALID'}
                              /><br/>   
                            <RaisedButton 
                                label="Sign-up"
                                style={{marginRight:1}}
                                primary={true}
                                onClick={() => submitForm()}
                                />
                            <RaisedButton label="Login" secondary={true} onClick={() => history.push('/login')}>
                            </RaisedButton>
                        </div> 
                    </Paper>
                        
                </Col>
            </Row>
        </Grid>

    </div>
    </div>
        )
}

Register.propTypes ={
    setUserName: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    setCofirm: PropTypes.func.isRequired, 
    isvalidUsername: PropTypes.bool.isRequired,
    isvalidPassword: PropTypes.bool.isRequired,
    isvalidConfirm: PropTypes.bool.isRequired,   
    isValidForm: PropTypes.bool.isRequired,
    submitForm: PropTypes.func.isRequired,
}

export default Register
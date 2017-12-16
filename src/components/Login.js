import React from 'react'
import PropTypes from 'prop-types'
import {Paper, RaisedButton,TextField  } from 'material-ui';
import {Navbar, NavItem, Nav,Row, Col, Grid} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Login = ({history, notification, setUsername, setPassword, submitForm}) => (
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
            <Row className="col-md-offset-3 login">
                <Col xs={6} md={8}>
                    <Paper  zDepth={3} >
                        <div  className="sign-form">
                            <h4 style={{textAlign:'center', color:'red'}}>{notification ? '' : 'LOGIN FAIL'}</h4>
                            <h2 style={{textAlign:'center', color:'white'}}>#Login</h2>
                            <h4 style={{color:'black'}}>Username</h4>
                            <TextField 
                                fullWidth={true} 
                                onChange={(e) => setUsername(e.target.value)}
                                floatingLabelText="Enter username"/>
                                <br/>
                            <h4 style={{ color:'black', marginTop:20}}>Password</h4>
                            <TextField
                                fullWidth={true} 
                                type="password" 
                                onChange={(e) => setPassword(e.target.value)}
                                floatingLabelText="Enter password"
                            />
                            <RaisedButton 
                                label="Login"
                                primary={true}
                                style={{marginRight:1, marginTop:50}} 
                                onClick={() => submitForm()}
                                />
                            <RaisedButton label="Sign-up" secondary={true} onClick={() => history.push('/register')} >
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
    notification: PropTypes.bool.isRequired,
    setUsername: PropTypes.func.isRequired, 
    setPassword: PropTypes.func.isRequired,
    submitForm:PropTypes.func.isRequired,
}


export default Login
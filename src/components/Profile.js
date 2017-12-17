import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Header from './HeaderProfile'
import ActionHome from 'material-ui/svg-icons/action/home'
import MostLatest  from './MostLatest'
import {Grid, Row, Col, Glyphicon, Button} from 'react-bootstrap'
import DialogSent from './DialogSent'
const Profile = ({balance, transactions, isShow,
     openDialog, closeDialog, setIdWalletSent,
     setAmountSent, setDescription, handleSent,
     isValidIDWalletSent,isValidAmountSent, isValidDescription, logout}) => (
    <div>
        <Header
            logout={() => logout()}/>
        <div>
            <Grid fluid={true} >
                <Row className='show-grid'>
                
                <Col xs={4} md={3} style={{backgroundColor: '#FAFAFA', height: 800}}>
                    <span style={{fontSize:15}}>
                        <Glyphicon glyph='glyphicon glyphicon-home' style={{marginRight:10}}/>
                        DASHBOARD
                    </span>
                    <br/>
                    <hr style={{color:'red'}}/>
                    <span style={{fontSize:15}}>
                        <Glyphicon glyph='glyphicon glyphicon-bitcoin' style={{marginRight:10}}/>
                        BITCOIN
                    </span>
                    <br/>
                    <span style={{fontSize:15}}>
                        <Glyphicon glyph='glyphicon glyphicon-user' style={{marginRight:10}}/>
                        USER
                    </span>
                </Col>
                <Col  xs={8} md={9} style={{backgroundColor: '#FAFAFA', height: 800}}>
                    <div>
                        <span style={{ fontSize: 30}}>BE YOUR OWN BANK.</span>
                        <span style={{float:'right',  fontSize: 20}}>Total Balance: {balance}</span>
                    </div>
                    <div style={{marginTop:20}}>
                        <Button 
                            style={{width: 100, marginRight: 10}}
                            onClick={() => openDialog()}
                            >SENT
                        </Button>
                        <Button style={{width: 100}}>RECEIVE</Button>
                        <DialogSent 
                            isShow={isShow}
                            closeDialog={() => closeDialog()}
                            setIdWalletSent={(value) => setIdWalletSent(value)}
                            setAmountSent={(value) => setAmountSent(value)}
                            setDescription={(value) => setDescription(value)}
                            handleSent={() => handleSent()}
                            isValidIDWalletSent={isValidIDWalletSent}
                            isValidAmountSent={isValidAmountSent}
                            isValidDescription={isValidDescription}
                        />
                        
                    </div>

                    <div style={{marginTop:20}}>
                        <MostLatest
                            transactions={transactions}
                        />
                    </div>
                </Col>  
                </Row>
            </Grid>
        </div>
    </div>
)

Profile.PropTypes = {
    balance: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
    isShow: PropTypes.bool.isRequired,
    openDialog: PropTypes.func.isRequired,
    closeDialog: PropTypes.func.isRequired,
    setAmountSent:PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    setIdWalletSent: PropTypes.func.isRequired,
    handleSent: PropTypes.func.isRequired,
    isValidIDWalletSent:  PropTypes.bool.isRequired,
    isValidAmountSent:  PropTypes.bool.isRequired,
    isValidDescription: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired,
}

export default Profile
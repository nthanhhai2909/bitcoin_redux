import React from 'react'
import PropTypes from 'prop-types'
import Header from './HeaderProfile'
import ActionHome from 'material-ui/svg-icons/action/home'
import MostLatest  from './MostLatest'
import {Grid, Row, Col, Glyphicon, Button} from 'react-bootstrap'
const Profile = ({}) => (
    <div>
        <Header/>
        <div>
            <Grid fluid={true} >
                <Row className='show-grid'>
                
                <Col xs={4} md={3} style={{backgroundColor: '#FAFAFA',}}>
                    <span style={{fontSize:15}}>
                        <Glyphicon glyph='glyphicon glyphicon-home' style={{marginRight:10}}/>
                        DASHBOARD
                    </span>
                    <br/>
                    <hr style={{color:'red'}}/>
                </Col>
                <Col  xs={8} md={9} style={{backgroundColor: '#FAFAFA'}}>
                    <div>
                        <span style={{ fontSize: 30}}>BE YOUR OWN BANK.</span>
                        <span style={{float:'right',  fontSize: 20}}>Total Balance</span>
                    </div>
                    <div style={{marginTop:20}}>
                        <Button style={{width: 100, marginRight: 10}}>SENT</Button>
                        <Button style={{width: 100}}>RECEIVE</Button>
                    </div>

                    <div style={{marginTop:20}}>
                        <MostLatest
                            transactions={[]}
                        />
                    </div>
                </Col>  
                </Row>
            </Grid>
        </div>
    </div>
)

Profile.PropTypes = {

}

export default Profile
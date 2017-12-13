import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import Login from '../components/Login'

class LoginContainer extends React.Component {

    render(){
        return(
            <div>
                <Login/>
            </div>
            
        )
    }
}

export default LoginContainer
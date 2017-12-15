import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import Login from '../components/Login'
import Header from '../components/Header'
class LoginContainer extends React.Component {

    render(){
        return(
            <div>
                <Login history={this.props.history} />    
            </div>
            
        )
    }
}


LoginContainer.propTypes = {

}
export default LoginContainer
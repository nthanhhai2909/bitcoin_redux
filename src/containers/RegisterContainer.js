import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import Register from '../components/Register'
import * as registerActions from '../actions/registerAction'
import { bindActionCreators } from 'redux';
import {
    changeUserName,
    changePassword,
    changeCofirm,
    changeFullName,
} from '../actions/registerAction'

class RegisterContainer extends React.Component{    
    render(){
        const {actions} = this.props;
        return(
            <div>
                <Register
                    history={this.props.history}
                    setFullName={(value) => actions.setFullName(value)}
                    setUserName={(value => actions.setUserName(value))}
                    setPassword={(value) => actions.setPassword(value)}
                    setCofirm={(value) => this.props.setConfirm(value)}
                    isvalidUsername={this.props.isvalidUsername}
                    isvalidPassword={this.props.isvalidConfirm}
                    isvalidConfirm={this.props.isvalidConfirm}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isvalidFullName: state.registerReducers.isValids.isvalidFullName,
    isvalidUsername: state.registerReducers.isValids.isvalidUsername,
    isvalidPassword: state.registerReducers.isValids.isvalidPassword,
    isvalidConfirm: state.registerReducers.isValids.isvalidConfirm,
})

const mapDispatchToProps = dispatch =>{
    return ({
        actions: bindActionCreators(registerActions, dispatch)
    })
}

  
RegisterContainer.propTypes = {
    isvalidFullName: PropTypes.bool.isRequired,
    isvalidUsername: PropTypes.bool.isRequired,
    isvalidPassword: PropTypes.bool.isRequired,
    isvalidConfirm: PropTypes.bool.isRequired,
}

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(RegisterContainer)
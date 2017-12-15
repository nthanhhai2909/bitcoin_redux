import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import Register from '../components/Register'
import * as registerActions from '../actions/registerAction'
import { bindActionCreators } from 'redux';

class RegisterContainer extends React.Component{
    componentWillReceiveProps(nextProps) {
        if(nextProps.isRegister){
            this.props.history.push('/login');
        }
    }    
    render(){
        const {actions} = this.props;
        return(
            <div>
                <Register
                    history={this.props.history}
                    setFullName={(value) => actions.setFullName(value)}
                    setUserName={(value => actions.setUserName(value))}
                    setPassword={(value) => actions.setPassword(value)}
                    setCofirm={(value) => actions.setConfirm(value)}
                    submitForm={() => actions.submitForm()}
                    isvalidUsername={this.props.isvalidUsername}
                    isvalidPassword={this.props.isvalidPassword}
                    isvalidConfirm={this.props.isvalidConfirm}
                    isValidForm={this.props.isValidForm}
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
    isValidForm: state.registerReducers.isValids.isValidForm,
    isRegister: state.registerReducers.submitForm.isRegister
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
    isValidForm:PropTypes.bool.isRequired,
    isRegister: PropTypes.bool.isRequired,
}

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(RegisterContainer)
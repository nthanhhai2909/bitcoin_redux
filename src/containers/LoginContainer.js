import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import Login from '../components/Login'
import * as loginActions from '../actions/loginAction'
import { bindActionCreators } from 'redux'
class LoginContainer extends React.Component {

    componentWillReceiveProps(nextProps) {
        if(nextProps.isLogin){
            this.props.history.push({
                pathname:"/profile/:user=" + this.props.username,
            });
            this.props.actions.resetInput();
            this.props.actions.resetSubmitFrom();
        }
    }    
    render(){
        const {actions} = this.props;
        return(
            <div>
                <Login 
                    history={this.props.history} 
                    notification={this.props.notification}
                    setUsername={(value) => actions.setUsername(value)}
                    setPassword={(value) => actions.setPassword(value)}
                    submitForm={() => actions.submitForm()}
                />    
            </div>
            
        )
    }
}
const mapStateToProps = state => ({
    notification: state.loginReducers.inputs.notification,
    isLogin: state.loginReducers.submitForm.isLogin,
    username: state.loginReducers.inputs.username,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(loginActions, dispatch)
})


LoginContainer.propTypes = {
    notification: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    username: PropTypes.string.isRequired,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (LoginContainer)
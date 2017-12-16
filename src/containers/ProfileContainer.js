import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Profile from '../components/Profile'
import {bindActionCreators} from 'redux'
import * as ProfileActions from '../actions/ProfileAction'
class ProfileContainer extends React.Component {

    componentDidMount(){
        
        if(!this.props.isLogin){
            this.props.history.push('/login');
        }
        let username = this.props.match.params.username.split("=", 2)[1];
        this.props.actions.getProfile(username);
    }

    render(){
        return(
            <div>
                <Profile

                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.loginReducers.submitForm.isLogin,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ProfileActions, dispatch)
})


ProfileContainer.propTypes = {
    isLogin: PropTypes.bool,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProfileContainer)
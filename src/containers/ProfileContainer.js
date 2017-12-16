import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Profile from '../components/Profile'
class ProfileContainer extends React.Component {

    componentDidMount(){
        if(!this.props.isLogin){
            this.props.history.push('/login');
        }
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

})


ProfileContainer.propTypes = {
    isLogin: PropTypes.bool,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProfileContainer)
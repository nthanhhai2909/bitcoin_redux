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
        this.props.actions.getTransactions(username);

    }

    render(){
        console.log("asdasd", this.props.transactions)
        return(
            <div>
                <Profile
                    balance={this.props.balance}
                    transactions={this.props.transactions}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.loginReducers.submitForm.isLogin,
    balance: state.ProfileReducers.infor.balance,
    transactions: state.ProfileReducers.transactions.transactions,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ProfileActions, dispatch)
})


ProfileContainer.propTypes = {
    isLogin: PropTypes.bool,
    balance: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProfileContainer)
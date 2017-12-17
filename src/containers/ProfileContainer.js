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
        return(
            <div>
                <Profile
                    balance={this.props.balance}
                    transactions={this.props.transactions}
                    isShow={this.props.isShow}
                    openDialog={() => this.props.actions.openDialogSent()}
                    closeDialog={() => this.props.actions.closeDialogSent()}
                    setIdWalletSent={(value) => this.props.actions.setIdWalletSent(value)}
                    setAmountSent={(value) => this.props.actions.setAmountSent(value)}
                    setDescription={(value) => this.props.actions.setDescription(value)}
                    handleSent={() => this.props.actions.handleSent()}
                    isValidIDWalletSent={this.props.isValidIDWalletSent}
                    isValidAmountSent={this.props.isValidAmountSent}
                    isValidDescription={this.props.isValidDescription}
                    logout={() => this.props.actions.logout()}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.loginReducers.submitForm.isLogin,
    balance: state.ProfileReducers.infor.balance,
    transactions: state.ProfileReducers.transactions.transactions,
    isShow: state.ProfileReducers.sent.isShow,
    isValidIDWalletSent:  state.ProfileReducers.isValidForm.isValidIDWalletSent,
    isValidAmountSent:  state.ProfileReducers.isValidForm.isValidAmountSent,
    isValidDescription: state.ProfileReducers.isValidForm.isValidDescription
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ProfileActions, dispatch)
})


ProfileContainer.propTypes = {
    isLogin: PropTypes.bool,
    balance: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
    isShow: PropTypes.bool.isRequired,
    isValidIDWalletSent:  PropTypes.bool.isRequired,
    isValidAmountSent:  PropTypes.bool.isRequired,
    isValidDescription: PropTypes.bool.isRequired,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (ProfileContainer)
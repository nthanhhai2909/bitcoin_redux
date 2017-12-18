import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Profile from '../components/Profile'
import {bindActionCreators} from 'redux'
import * as ProfileActions from '../actions/ProfileAction'
import axios from 'axios'
class ProfileContainer extends React.Component {
    componentWillReceiveProps(nextProps){
        if(nextProps.isLogout){
            this.props.history.push('/login');
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/authentication')
        .then((response) => {
            if(response.data.status === 'true'){
                let username = this.props.match.params.username.split("=", 2)[1];
                this.props.actions.getProfile(username);
                this.props.actions.getTransactions(username);
            }
            else{
                this.props.history.push('/login');
            }
        })
    }

    logout(){
        axios.get('http://localhost:3000/logout')
        this.props.history.push('/');
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
                    logout={() => this.logout()}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    balance: state.ProfileReducers.infor.balance,
    isLogout: state.ProfileReducers.infor.isLogout,
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
    isLogout: PropTypes.bool,
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
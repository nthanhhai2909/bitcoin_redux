import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import BlockChainInfor from '../components/BlockChainInfor'
import Header from '../components/Header'
import * as BlockChainInforActions from '../actions/blockChainInforAction'
import { bindActionCreators } from 'redux'
class BlockChainInforContainer extends React.Component{
    componentDidMount(){
        const {actions} = this.props;
        actions.loadForm();
    }
    render(){
        const {actions} = this.props;
        return(
            <div>
                <Header history={this.props.history}/>
                <BlockChainInfor    
                    transactions={this.props.transactions}
                />
            </div>
        )
    }
}

BlockChainInforContainer.propTypes = {
    transactions: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    transactions: state.blockChainInforReducers.inputs.transactions
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(BlockChainInforActions, dispatch)
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
) (BlockChainInforContainer)

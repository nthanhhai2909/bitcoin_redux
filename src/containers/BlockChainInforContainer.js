import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import BlockChainInfor from '../components/BlockChainInfor'
import Header from '../components/Header'

class BlockChainInforContainer extends React.Component{
    
    render(){
        
        return(
            <div>
                <Header history={this.props.history}/>
                <BlockChainInfor    
                />
            </div>
        )
    }
}

BlockChainInforContainer.propTypes = {

}

export default BlockChainInforContainer

import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'; 
import BlockChainInfor from '../components/BlockChainInfor'


class BlockChainInforContainer extends React.Component{

    
    render(){
        
        return(
            <div>
                <BlockChainInfor    
                />
            </div>
        )
    }
}

BlockChainInforContainer.propTypes = {

}

export default BlockChainInforContainer

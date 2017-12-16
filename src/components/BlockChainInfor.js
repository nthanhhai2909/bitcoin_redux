import React from 'react'
import PropTypes from 'prop-types';

import MostLatest from './MostLatest'
const BlockChainInfor = ({transactions}) => (
    <div>
        
        <div className="container">
        <h2>Most Latest</h2>
            <MostLatest transactions={transactions}/>
        </div>
    </div>
)

BlockChainInfor.propTypes = {
    transactions: PropTypes.array.isRequired,
} 

export default BlockChainInfor

import React from 'react'
import PropTypes from 'prop-types';

import MostLatest from './MostLatest'
const BlockChainInfor = ({}) => (
    <div>
        
        <div className="container">
        <h2>Most Latest</h2>
            <MostLatest list={[]}/>
        </div>
    </div>
)

BlockChainInfor.propTypes = {

}

export default BlockChainInfor

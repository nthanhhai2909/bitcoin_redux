import React from 'react'
import PropTypes from 'prop-types';
import Header from './Header'
import MostLatest from './MostLatest'
const BlockChainInfor = ({}) => (
    <div>
        <Header/>
        <div className="container">
        <h2>Most Latest</h2>
            <MostLatest list={[1,2,3,4,5,,1,1,1,1,1,1,1,11,1,1,1,1,,1,11,1,]}/>
        </div>
    </div>
)

BlockChainInfor.propTypes = {

}

export default BlockChainInfor

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap'
const MostLatest = ({list}) =>(
    <div>
        <div style={{maxHeight:500, overflow:'scroll'}}>
            <Table striped bordered condensed hover  >
                <thead>
                <tr>
                    <th>Stt</th>
                    <th>User sent</th>
                    <th>User receive</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    {   
                    list.map(e => <tr>
                        <td>{e}</td>
                    </tr>)
                    }
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                </tbody>
            </Table>
        </div>
        
    </div>
    
)

MostLatest.propTypes = {

}


export default MostLatest
import React, {Component} from 'react';
import PropTypes, { element } from 'prop-types';
import {Table} from 'react-bootstrap'
const MostLatest = ({transactions}) =>(
    <div>
        <div style={{maxHeight:500, overflowY:'scroll'}}>
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
                        transactions.map((element, index) => {
                            return(
                               <tr>
                                   <td>{index + 1}</td>
                                   <td>{element.username_sent}</td>
                                   <td>{element.username_receive}</td>
                                   <td>{element.transaction_amount}</td>
                                   <td>{(new Date(Number(element.date)).toString())}</td>
                                   <td>{element.description}</td>
                               </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
        
    </div>
    
)

MostLatest.propTypes = {
    transactions: PropTypes.array.isRequired
}


export default MostLatest
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { Button } from 'react-bootstrap'
const DialogSent = ({isShow,closeDialog, setIdWalletSent,setAmountSent,
     setDescription, handleSent, isValidIDWalletSent,isValidAmountSent, isValidDescription }) => {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={() => closeDialog()}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onClick={() => handleSent()}
        />,
      ];
      return(
        <div>
            <Dialog
            title="SENT BITCOIN"
            actions={actions}
            modal={false}
            open={isShow}
            onRequestClose={() => closeDialog()}
            >
                <div>
                    <span>To</span>
                    <br/>
                    <TextField
                        onChange={(e) => setIdWalletSent(e.target.value)}
                        fullWidth={true}
                        errorText={isValidIDWalletSent ? '' : 'INVALID'}
                    />
                    <br/>
                    <br/>
                    <span>Amount of money</span>
                    <br/>
                    <TextField
                        onChange={(e) => setAmountSent(e.target.value)}
                        fullWidth={true}
                        errorText={isValidAmountSent ? '' : 'INVALID'}
                    />
                    <br/>
                    <br/>
                    <span>Description</span>
                    <br/>
                    <TextField
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth={true}
                        errorText={isValidDescription ? '' : 'INVALID'}
                    />
                    <br/>
                </div>
            </Dialog>
        </div>
      )
}

DialogSent.propTypes = {
    isShow: PropTypes.bool.isRequired,
    closeDialog: PropTypes.func.isRequired,
    setAmountSent:PropTypes.func.isRequired,
    setDescription: PropTypes.func.isRequired,
    setIdWalletSent: PropTypes.func.isRequired,
    handleSent: PropTypes.func.isRequired,
    isValidIDWalletSent:  PropTypes.bool.isRequired,
    isValidAmountSent:  PropTypes.bool.isRequired,
    isValidDescription: PropTypes.bool.isRequired,
}

export default DialogSent
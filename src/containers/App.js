import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BlockChainInforContainer from './BlockChainInforContainer'
import '../css/index.css'
const App = () => (
    <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={BlockChainInforContainer}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App
import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BlockChainInforContainer from './BlockChainInforContainer'
import LoginContainer from './LoginContainer'
import '../css/index.css'
const App = () => (
    <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={BlockChainInforContainer}/>
                <Route exact path='/login' component={LoginContainer}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App
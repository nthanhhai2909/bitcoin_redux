import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import BlockChainInforContainer from './BlockChainInforContainer'
import RegisterContainer from '../containers/RegisterContainer'
import LoginContainer from './LoginContainer'
import ProfileContainer from './ProfileContainer'
import '../css/index.css'
const App = () => (
    <MuiThemeProvider>
        <Router>
            <Switch>
                <Route exact path='/' component={BlockChainInforContainer}/>
                <Route exact path='/login' component={LoginContainer}/>
                <Route exact path='/register' component={RegisterContainer}/>
                <Route exact path='/profile/:username' component={ProfileContainer} />
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App
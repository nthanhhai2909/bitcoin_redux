import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
const App = () => (
    <MuiThemeProvider>
        <Router>
            <Switch>
            </Switch>
        </Router>
    </MuiThemeProvider>
)

export default App
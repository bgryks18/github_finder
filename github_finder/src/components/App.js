import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import UserDetails from './UserDetails'
import RepoDetails from './RepoDetails'
import About from './About'
import NotFound from './NotFound'
import GithubState from '../contexts/githubfinder/githubState'
import AlertState from '../contexts/alert/alertState'


 const App = () => {

        return (
           <GithubState>
            <BrowserRouter>
            <Navbar/>
            <AlertState alert={alert}>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route exact path="/user/:login" component={UserDetails}/>
                        <Route path="/user/:whichUser/:whichRepo" component={RepoDetails}/>
                
                    <Route component={NotFound}/>
                    </Switch>
            </AlertState>
            </BrowserRouter>
           </GithubState>
        )
}

export default App

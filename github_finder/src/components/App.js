import React, { Component } from 'react'
import ax from 'axios'
import Loading from './Loading'
import Navbar from './Navbar'
import Search from './Search'
import Users from './Users'
import UserDetails from './UserDetails'
import RepoDetails from './RepoDetails'
import About from './About'
import NotFound from './NotFound.js'
import { BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom'
export class App extends Component {
    constructor(props){
        super(props);
        this.setUsers = this.setUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.removeUsers = this.removeUsers.bind(this);
        this.getUser = this.getUser.bind(this)
        this.getUserRepos = this.getUserRepos.bind(this);
        this.getUserRepo = this.getUserRepo.bind(this);
        this.NotFound = this.NotFound.bind(this);

        this.state = {
            loading:false,
            users:[],
            user:{},
            repos:[],
            repo:{},
            alert:null,
            keyw:'',
            issent:false,
            howmuch:0
        }
    }
    setUsers(keyword) {
        this.setState({loading:true});
            ax.get(`https://api.github.com/search/users?q=${keyword}`).then((res)=>(
                this.setState({users:res.data.items,loading:false,alert:null,keyw:keyword,issent:true,howmuch:this.state.howmuch+1})
            ))

    }
    getUser(username) {
        this.setState({
            loading:true
        });
        setTimeout(()=>{
            ax.get(`https://api.github.com/users/${username}`).then((res)=>(
                this.setState({
                    user:res.data,
                    loading:false
                })
            ))
            },1000)
    }
    getUserRepos(username) {
        this.setState({
            loading:true
        });
        setTimeout(()=>{
            ax.get(`https://api.github.com/users/${username}/repos`).then((res)=>(
                this.setState({
                    repos:res.data,
                    loading:false
                })
            ))
            },1000)

    }
    getUserRepo(username,repo) {
        this.setState({
            loading:true
        });
        setTimeout(()=>{
            ax.get(`https://api.github.com/repos/${username}/${repo}`).then((res)=>(
                this.setState({
                    repo:res.data,
                    loading:false
                })
            ))
            },1000)

    }
    setAlert(msg,type){
        if (!msg && !type) {
            this.setState({
                alert:null,
                issent:false
            })
        } else {
            this.setState({
                alert:{
                    msg:msg,
                    type:type
                }
            })
        }
    }
    removeUsers(){
        this.setState({loading:true});
        this.setState({users:[],loading:false,alert:null,keyw:'',issent:false})
    }
    NotFound(){
        return (
            <NotFound/>
        )
    }
    render() {
        return (
           <>
            <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route exact path="/" render={props=>(
                    <>
                        <Search propRemoveUsers={this.removeUsers} propSetUsers={this.setUsers} propSetAlert={this.setAlert} propAlertMessage={this.state.alert} propUser={(this.state.users.length>0)?true:false}/>
                        <Users propHowMuchSent={this.state.howmuch} propIsSent={this.state.issent} propUserList={this.state.users} propLoadingRightNow={this.state.loading} propKeyword={this.state.keyw}/>
                    </>
                    )}
                    />
                    <Route path="/home" render={props=>(
                    <>
                        <Search propRemoveUsers={this.removeUsers} propSetUsers={this.setUsers} propSetAlert={this.setAlert} propAlertMessage={this.state.alert} propUser={(this.state.users.length>0)?true:false}/>
                        <Users propHowMuchSent={this.state.howmuch} propIsSent={this.state.issent} propUserList={this.state.users} propLoadingRightNow={this.state.loading} propKeyword={this.state.keyw}/>
                    </>
                    )}
                    />
                    <Route path="/about" component={About}/>
                    <Route exact path="/user/:login" render={props=>(
                    <>
                        <UserDetails propGetUserRepos={this.getUserRepos} propUserRepos={this.state.repos} propLoadingRightNow={this.state.loading} {...props} propWhichUser={this.state.user} propGetUser={this.getUser} />
                    </>
                   )}/>
                   <Route path="/user/:whichUser/:whichRepo" render={props=>(
                    <>
                        <RepoDetails propGetUserRepo={this.getUserRepo} propUserRepo={this.state.repo} propLoadingRightNow={this.state.loading} {...props} propOwner={this.state.user}/>
                    </>
                   )} />
               
                <Route component={this.NotFound}/> </Switch>
            </BrowserRouter>
           </>
        )
    }
}

export default App

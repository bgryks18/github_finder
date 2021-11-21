import React,{ useReducer } from "react"
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import ax from 'axios'

const GithubState = (props) => {
    const initialState = {
        users:[],
        user:{},
        repos:[],
        repo:{},
        keyw:'',
        alert:null,
        issent:false,
        howmuch:0,
        loading:false
    }
    const [state,dispatch] = useReducer(GithubReducer,initialState)

    const Loading = () => {
        dispatch({type:"SET_LOADING"})
    }

    const setUsersList = (keyword,howmuch) => {

        Loading()

        ax.get(`https://api.github.com/search/users?q=${keyword}`).then((res)=>(
            dispatch({type:"SEARCH_USERS",payload:res.data.items,keyw:keyword,howmuch:howmuch})
        ))

    }

    const clearUsers = () => {
        Loading()
        dispatch({type:"CLEAR_USERS"})
    }

    
    const getUser = (username) => {
        Loading()
        setTimeout(()=>{
            ax.get(`https://api.github.com/users/${username}`).then((res)=>(
                dispatch({type:"GET_USER",payload:res.data})
            ))
            },1000)
    }

    
    const getUserRepos = (username) => {
        Loading()

        setTimeout(()=>{
            ax.get(`https://api.github.com/users/${username}/repos`).then((res)=>(
                dispatch({type:"GET_REPOS",payload:res.data})
            ))
            },1000)

    }
    const getUserRepo = (username,repo) => {
        Loading
        setTimeout(()=>{
            ax.get(`https://api.github.com/repos/${username}/${repo}`).then((res)=>(
                    dispatch({type:"GET_REPO",payload:res.data})
            ))
            },1000)

    }

    return (<GithubContext.Provider value={{
        loading:state.loading,
        users:state.users,
        user:state.user,
        repos:state.repos,
        repo:state.repo,
        keyw:state.keyw,
        issent:state.issent,
        howmuch:state.howmuch,
        setUsersList,
        clearUsers,
        getUser,
        getUserRepos,
        getUserRepo
        }}> 
        {props.children}
    </GithubContext.Provider>)
}
export default GithubState
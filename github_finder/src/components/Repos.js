import React, { useContext } from 'react'
import Repo from './Repo'
import GithubContext from '../contexts/githubfinder/githubContext'
const Repos = () => {
    const githubContext = useContext(GithubContext);
    const {repos} = githubContext;
    return repos.map((item)=>{return <Repo propRepoItem={item} key={item.id}/>})
}

export default Repos

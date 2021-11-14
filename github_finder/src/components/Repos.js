import React from 'react'
import Repo from './Repo'

const Repos = ({propRepo}) => {
    return propRepo.map((item,index)=>{return <Repo propRepoItem={item} key={index}/>})
}

export default Repos

import React from 'react'
import {Link} from 'react-router-dom'

const Repo = ({propRepoItem}) => {
    return (
        <li className="list-group-item">
            <Link to={`/user/${propRepoItem.owner.login}/${propRepoItem.name}`}><i className="far fa-dot-circle"></i> {propRepoItem.name}</Link>
        </li>
    )
}

export default Repo

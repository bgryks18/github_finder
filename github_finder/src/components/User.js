import React from 'react'
import {Link} from 'react-router-dom'

const User = (props) => {
    const {login,id,avatar_url,html_url} = props.propUserItem;
    return (
        <div className="col-md-3 col-sm-12 col-lg-3 py-2">
        <div className="card my-1">
        <img src={avatar_url} alt={login} className="card-img img-fluid"/>
        <div className="card-body">
            <h5 className="card-title">{login} {props.propLoadingRightNow}</h5>
            <Link to={`/user/${login}`} className="btn btn-outline-secondary btn-sm">View Profile</Link>
        </div>
    </div>
    </div>
    )
}

export default User

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading'
import Repos from './Repos'

export class UserDetails extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

                this.props.propGetUser(this.props.match.params.login);
                this.props.propGetUserRepos(this.props.match.params.login)

    }
 
    render() {
        const {propUserRepos} = this.props;
        const {login,id,name,html_url,avatar_url,location,bio,blog,followers,following,public_repos} = this.props.propWhichUser;
        if (this.props.propLoadingRightNow){
            return <Loading propWhichPage="kullanıcının sayfası"/>
        } else {
            return (
                <div className="container my-2">
                   <div className="row">
                       <div className="col-md-3">
                        <div className="card">
                            <img src={avatar_url} className="card-img-top"/>
                            <div className="card-body">
                                <h3>{name}</h3>
                                <p className="card-text">
                                    #{id}
                                </p>
                                <p className="card-text">
                                    {
                                    location&& (
                                        <>
                                        <i className="fas fa-map-marker-alt"></i>&nbsp;
                                        {location}
                                        </>
                                    )}
                                </p>
                                <p className="card-text">
                                    <a href={html_url} className="btn btn-outline-secondary btn-sm px-4" target="_blank"><i className="fas fa-eye"></i>&nbsp;View Github Profile</a>
                                </p>
                            </div>
                        </div>
                            
                       </div>
                       <div className="col-md-9">
                           <div className="card">
                                <div className="card-body">
                                    {
                                        bio &&
                                        <>   
                                            <h3>About</h3>
                                            <p className="card-text">
                                                {bio}
                                            </p>
                                        </>
                                    }
                                    {
                                        blog &&
                                        <>   
                                            <h3>Blog</h3>
                                            <p className="card-text">
                                                {blog}
                                            </p>
                                        </>
                                    }
                                <div>
                                    <span className="badge badge-primary m-1">Followers: {followers}</span>
                                    <span className="badge badge-danger m-1">Following: {following}</span>
                                    <span className="badge badge-success m-1">Public Repository: {public_repos}</span>
                                </div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <Repos propRepo={propUserRepos} />
                                </ul>
                           </div>
                       </div>
                   </div>

                </div>
            )
        } 

    }
}

export default UserDetails

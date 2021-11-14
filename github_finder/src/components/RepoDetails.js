import React, { Component } from 'react'
import Loading from './Loading'
export class RepoDetails extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.propGetUserRepo(this.props.match.params.whichUser,this.props.match.params.whichRepo);
}
    
    render() {
            const {login,id,name,html_url,avatar_url,location,bio,blog,followers,following,public_repos} = this.props.propOwner;
            if (this.props.propLoadingRightNow){
                return <Loading propWhichPage={`${login} kişisinin repositorysi`}/>
            }
            else {
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
                                        <p className="card-text">
                                                {this.props.propUserRepo.full_name}
                                        </p>
                                        {
                                            (this.props.propUserRepo.description)&&
                                            <p className="card-text">
                                                {this.props.propUserRepo.full_name}
                                            </p>
                                        }
                                        <p className="text">
                                            <a href={this.props.propUserRepo.html_url} className="btn btn-outline-secondary btn-sm"><i className="fas fa-eye"></i> View Repository</a>
                                        </p>
                                    <div>
                                        <span className="badge badge-primary m-1">Followers: {followers}</span>
                                        <span className="badge badge-danger m-1">Following: {following}</span>
                                        <span className="badge badge-success m-1">Public Repository: {public_repos}</span>
                                    </div>
                                    </div>
                               </div>
                           </div>
                       </div>

                    </div>
                )
            }

    }
}

export default RepoDetails

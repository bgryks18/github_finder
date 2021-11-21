import React,{useContext,useEffect} from 'react'
import Loading from './Loading'
import GithubContext from '../contexts/githubfinder/githubContext'
const RepoDetails = ({match}) => {
    const githubContext = useContext(GithubContext);
    const {getUserRepo,loading,repo,getUser,user,users} = githubContext;
        useEffect(()=>{
            getUser(match.params.whichUser);
            getUserRepo(match.params.whichUser,match.params.whichRepo)
    
        },[])
        const {login,id,name,html_url,avatar_url,location,bio,blog,followers,following,public_repos} = user;
            if (loading){
                return <Loading propWhichPage={`${match.params.whichUser} kişisinin repositorysi`}/>
            }
            else {
                console.log(users.filter(item=>item.login===login).length)
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
                                                {repo.full_name}
                                        </p>
                                        {
                                            (repo.description)&&
                                            <p className="card-text">
                                                {repo.description}
                                            </p>
                                        }
                                        <p className="text">
                                            <a href={repo.html_url} className="btn btn-outline-secondary btn-sm" target="_blank"><i className="fas fa-eye"></i> View Repository</a>
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

export default RepoDetails

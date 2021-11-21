import React, { useContext } from 'react'
import User from './User'
import Loading from './Loading'
import GithubContext from '../contexts/githubfinder/githubContext'
const Users = () => {
    const githubContext = useContext(GithubContext);
    const {users,loading,howmuch,issent,keyw} = githubContext
    if (loading){
        return <Loading propWhichPage="kullanıcı sayfası"/>
    }
    if (issent){
        if (users.length<1){
            return (
                <div className="container my-2">
                <p className="text-center"><strong>{keyw}</strong> ile ilgili sonuç bulunamadı.</p>
             </div>
            ) 
        }
        else {
            return (
                <div className="container my-2">
                    <p className="text-center"><strong>{keyw}</strong> ile ilgili {users.length} tane sonuç bulundu.</p>
                    <div className="row">
                        {users.map((item)=><User key={item.id} propUserItem={item}/>)}
                    </div>
                </div>
            )
        }
    } else {
        if (howmuch>0){
            return (
                <div className="container my-2">
                 <p className="text-center">Şu ana kadar topu topu {howmuch} kez veri ekledin.</p>
                </div>
            )
        } else {
            return (
                <div className="container my-2">
                 <p className="text-center">Daha hiçbir veri eklemedin. Eklesene ?</p>
                </div>
            )
        }
    }
}

export default Users

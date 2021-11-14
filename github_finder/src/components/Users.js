import React from 'react'
import User from './User'
import Loading from './Loading'
const Users = (props) => {
    if (props.propLoadingRightNow){
        return <Loading propWhichPage="kullanıcı sayfası"/>
    }
    if (props.propIsSent){
        if (props.propUserList.length<1){
            return (
                <div className="container my-2">
                <p className="text-center"><strong>{props.propKeyword}</strong> ile ilgili sonuç bulunamadı.</p>
             </div>
            ) 
        }
        else {
            return (
                <div className="container my-2">
                    <p className="text-center"><strong>{props.propKeyword}</strong> ile ilgili {props.propUserList.length} tane sonuç bulundu.</p>
                    <div className="row">
                        {props.propUserList.map((item,index)=><User key={index} propUserItem={item}/>)}
                    </div>
                </div>
            )
        }
    } else {
        if (props.propHowMuchSent>0){
            return (
                <div className="container my-2">
                 <p className="text-center">Şu ana kadar topu topu {props.propHowMuchSent} kez veri ekledin.</p>
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

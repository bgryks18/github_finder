import React from 'react'
import LoadingFile from './img/loading.gif'
const Loading = (props) => {
    return (
        <div className="container">
            <p className="text-center">{props.propWhichPage} yükleniyor...</p>
            <p className="text-center"><img src={`/${LoadingFile}`} style={{width:"100px",height:"100px"}}/></p>
        </div>
    )
}

export default Loading

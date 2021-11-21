import React, { useContext } from 'react'
import AlertContext from '../contexts/alert/alertContext'
const Alert = () => {
    const {alert,removeAlert} = useContext(AlertContext);

    if(alert){
    return (
        <div className="container">
            
            <div className={`alert alert-${alert.type} alert-dismissible fade show w-75 mx-auto my-2`} role="alert">
                {alert.msg}
            
            <button type="button" className="close" data-dismiss="alert" onClick={removeAlert} aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            
        </div>
    )
    } else {
        return <></>
    }
}

export default Alert

import React from 'react'

const Alert = (props) => {

    const removeAlert = () => {
        props.propRemoveAlert();
    }
    if(props.propAlertResult){
    return (
        <div className="container">
            
            <div className={`alert alert-${props.propAlertResult.type} alert-dismissible fade show w-75 mx-auto my-2`} role="alert">
                {props.propAlertResult.msg}
            
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

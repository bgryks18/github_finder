import React, { useReducer } from 'react'
import AlertReducer from './alertReducer'
import AlertContext from './alertContext'

const alertState = (props) => {

    const initalState = null;

    const [state,dispatch] = useReducer(AlertReducer,initalState);
    const setAlert = (msg,type) => {
        dispatch({type:"SET_ALERT",payload:{msg,type}})
    }
    const removeAlert = () => {
        dispatch({type:"REMOVE_ALERT"})
    }
    return (
        <AlertContext.Provider
        value={{
            alert:state,
            setAlert,
            removeAlert
        }}
        >{props.children}
        </AlertContext.Provider>
    )
}

export default alertState

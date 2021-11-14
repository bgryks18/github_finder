import React, { useState } from 'react'
import Alert from './Alert'

const Search = ({propSetUsers,propSetAlert,propUser,propAlertMessage,propRemoveUsers}) => {
    const [keyword,setKeyword] = useState('');

    const onChange = (e) => {
        setKeyword(e.target.value) // girdiğimiz parametre direkt olarak keyword'e set edilecek değer olarak algılanır.
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const q = keyword.trim();
        if (!q){
            propSetAlert("Lütfen boş bırakmayın.","danger")
        } else {
            propSetUsers(q);
            setKeyword('');
        }
    }
    const removeAlert = () => {
        propSetAlert(null,null);
    }
    const removeUsers = () =>{
        propRemoveUsers();
    }
        return (
        <>
            <Alert propAlertResult={propAlertMessage} propRemoveAlert={removeAlert}/>
            <div className="container my-2 w-50">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                <input type="text" className="form-control" value={keyword} onChange={onChange} placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                    {
                    propUser&&<button className="btn btn-outline-secondary" type="button" onClick={removeUsers}><i className="fas fa-trash-alt"></i></button>
                    }
                </div>
                </div>
            </form>
        </div>
        </>
        )
}

export default Search

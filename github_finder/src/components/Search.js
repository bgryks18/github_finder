import React, { useContext, useState } from 'react'
import Alert from './Alert'
import GithubContext from '../contexts/githubfinder/githubContext'
import AlertContext from '../contexts/alert/alertContext'
const Search = () => {
    const [keyword,setKeyword] = useState('');
    const githubContext = useContext(GithubContext);
    const {users,clearUsers,howmuch,setUsersList} = githubContext;
    const {setAlert,removeAlert} = useContext(AlertContext);
    const onChange = (e) => {
        setKeyword(e.target.value) // girdiğimiz parametre direkt olarak keyword'e set edilecek değer olarak algılanır.
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const q = keyword.trim();
        if (!q){
            setAlert("Lütfen boş bırakmayın.","danger")
        } else {
            setUsersList(q,howmuch);
            setKeyword('');
            removeAlert();
        }
    }
        return (
        <>
            <Alert/>
            <div className="container my-2 w-50">
            <form onSubmit={onSubmit}>
                <div className="input-group mb-3">
                <input type="text" className="form-control" value={keyword} onChange={onChange} placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                    {
                    users.length>0&&<button className="btn btn-outline-secondary" type="button" onClick={()=>{clearUsers(); removeAlert()}}><i className="fas fa-trash-alt"></i></button>
                    }
                </div>
                </div>
            </form>
        </div>
        </>
        )
}

export default Search

import React, { Component } from 'react'
import Alert from './Alert'

class Search extends Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.removeAlert = this.removeAlert.bind(this);
        this.removeUsers = this.removeUsers.bind(this);
        this.state = {
            keyword:''
        }
    }
    onChange(e) {
        this.setState({keyword:e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        const q = this.state.keyword.trim();
        if (!q){
            this.props.propSetAlert("Lütfen boş bırakmayın.","danger")
        } else {
            this.props.propSetUsers(q);
            this.setState({
                keyword:''
            })
        }
    }
    removeAlert(){
        this.props.propSetAlert(null,null);
    }
    removeUsers(){
        this.props.propRemoveUsers();
    }
    render() {
        return (
        <>
            <Alert propAlertResult={this.props.propAlertMessage} propRemoveAlert={this.removeAlert}/>
            <div className="container my-2 w-50">
            <form onSubmit={this.onSubmit}>
                <div className="input-group mb-3">
                <input type="text" className="form-control" value={this.state.keyword} onChange={this.onChange} placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="submit"><i className="fas fa-search"></i></button>
                    {
                    this.props.propUser&&<button className="btn btn-outline-secondary" type="button" onClick={this.removeUsers}><i className="fas fa-trash-alt"></i></button>
                    }
                </div>
                </div>
            </form>
        </div>
        </>
        )
    }
}

export default Search

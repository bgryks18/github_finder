import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SetPropType from 'prop-types'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <i className={props.propIcon}></i>&nbsp;{props.propTitle}
                </Link>
            
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                <li className="list-item">
                        <Link to="/home" className="nav-link" style={{color:"white"}}>Home</Link>
                    </li>
                    <li className="list-item">
                        <Link to="/about" className="nav-link" style={{color:"white"}}>About</Link>
                    </li>
                </ul>

            </div>
            </div>

        </nav>
    )
}
Navbar.defaultProps = {
    propTitle:"Github Finder",
    propIcon:"fab fa-github"
}
Navbar.propTypes = {
    propTitle:SetPropType.string.isRequired,
    propIcon:SetPropType.string.isRequired
}
export default Navbar

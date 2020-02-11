import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <nav className="navigation pt-2 mr-auto bg-light navbar-expand">
                    <ul className="nav nav-tabs">
                        <li className="nav-item ">
                            <NavLink to="/" exact className="nav-link">Exercises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/create" className="nav-link">Create Exercise Log</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user" className="nav-link">Create User</NavLink>
                        </li>
                    </ul>
            </nav>
        );
    }
}

export default Navbar;
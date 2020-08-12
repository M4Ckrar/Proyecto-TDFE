import React, { Component } from 'react'
import {NavLink} from "react-router-dom";

class Cabezal extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName="verde" exact to="/">Login</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="verde" exact to="/MisEstadisticas">DashBoard</NavLink>
                    </li>
                </ul>
                <hr/>
            </div>
        )
    }
}

export default Cabezal

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";

class MisEstadisticas extends Component {
    render() {
        return (
            <div>
                Soy las estadísticas papu~
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps)(MisEstadisticas)

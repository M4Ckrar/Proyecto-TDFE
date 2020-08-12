import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { connect } from 'react-redux'

class Inicio extends Component {

    buscar = e =>{
        fetch("https://api.openweathermap.org/data/2.5/forecast/daily?q=Montevideo&units=metric&cnt=7&appid=e62b2530fdb5f4ba3559c07c8634e5c7")
        .then(r=>r.json())
        .then(clima =>{
            console.log(clima);
            this.props.dispatch({type:"GUARDAR", payload:clima.list})
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Inicio
                </h1>
                <Link to="/hoy">Ver hoy</Link>
                <input type="button" value="Buscar" on onClick={this.buscar}/>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => ({
    login:state.login
})


export default connect(mapStateToProps)(Inicio)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";

 class Login extends Component {
    constructor(){
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.Mensaje = "";
    }

    Loguearse = () =>{
        fetch("http://xpense.develotion.com/login.php",{
            method: "POST",
            body:JSON.stringify({
                "usuario": this.username.current.value,
                "password":this.password.current.value
            }),
            headers:{'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            (respuesta.codigo===200)?
            this.props.dispatch({type:"LOGIN",payload:{idUsu:respuesta.id,apiKey:respuesta.apiKey}}):
            this.props.dispatch({type:"LOGINERROR",payload:{Mensaje:respuesta.mensaje}})
        })
    }

    Registrase = () =>{
        fetch("http://xpense.develotion.com/usuarios.php",{
            method: "POST",
            body:JSON.stringify({
                "usuario": this.username.current.value,
                "password":this.password.current.value
            }),
            headers:{'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            (respuesta.codigo===200)?
            this.props.dispatch({type:"REGISTER",payload:{idUsu:respuesta.id,apiKey:respuesta.apiKey}}):
            this.props.dispatch({type:"REGISTERERROR",payload:{Mensaje:respuesta.mensaje}})
            
        })
    }

    render() {
        let idUsuario = this.props.idUsuario;
        let Mensaje = this.props.Mensaje;
        if(idUsuario!==-1){
            return <Redirect to="/MisEstadisticas"/>
        }
        return (
            <div className="Fondo" id="LoginDiv">
                <div className="Elemento" style={{margin:"0 auto"}}>
                    <table>
                        <tbody>
                            <tr>
                                <td> <label htmlFor="Usu">Nombre de Usuario:</label> </td>
                                <td> <input id="Usu" type="text" ref={this.username} value="A123" /> </td>
                            </tr>
                            <tr>
                                <td> <label htmlFor="Pass">Contraseña:</label> </td> 
                                <td> <input id="Pass" type="text" ref={this.password} value="B123" /> </td>
                            </tr>
                            <tr>
                                <td className="centrar"> <input type="button" value="LogIn" onClick={this.Loguearse}/> </td>
                                <td className="centrar"> <input type="button" value="Registrarse" onClick={this.Registrase}/> </td>
                            </tr>
                        </tbody>
                    </table>
                    <h4>{Mensaje}</h4>     
                </div> 
            </div>
             
        )
    }
}

const mapStateToProps = (state) => ({
    idUsuario:state.idUsuario,
    Mensaje:state.Mensaje
})

export default connect(mapStateToProps)(Login)

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
        console.log(this.username.current.value);
        console.log(this.password.current.value);

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
             console.log(respuesta); 
            if(respuesta.codigo===200)this.props.dispatch({type:"LOGIN",payload:{idUsu:respuesta.id,apiKey:respuesta.apiKey}})
            else {this.props.dispatch({type:"LOGINERROR",payload:{Mensaje:respuesta.mensaje}})}
            
        })

        /* fetch("http://xpense.develotion.com/rubros.php",{
            method: "GET",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            console.log(respuesta);
        }) */  


         /* let url = "http://xpense.develotion.com/gastos.php";
        url+="?id=219";
        fetch(url,{
            method: "GET",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            console.log(respuesta);
        })  */ 


        /* fetch("http://xpense.develotion.com/gastos.php",{
            method: "POSt",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'},
            body:JSON.stringify({
                "nombre": "Revista Porno Gay, Limited edition delux <3",
                "monto":800,
                "idUsuario":219,
                "idRubro":1
            })
        })
        .then(r=>r.json())
        .then(respuesta =>{
            console.log(respuesta);
        })   */


        /* fetch("http://xpense.develotion.com/gastos.php",{
            method: "DEL",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'},
            body:JSON.stringify({
                "idGasto": 357
            })
        })
        .then(r=>r.json())
        .then(respuesta =>{
            console.log(respuesta);
        }) */ 
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
            //console.log(respuesta);
            if(respuesta.codigo===200)this.props.dispatch({type:"REGISTER",payload:{idUsu:respuesta.id,apiKey:respuesta.apiKey}})
            else {this.props.dispatch({type:"REGISTERERROR",payload:{Mensaje:respuesta.mensaje}})}
            
        })
    }

    render() {
        let idUsuario = this.props.idUsuario;
        let Mensaje = this.props.Mensaje;
        if(idUsuario!==0)return <Redirect to="/MisEstadisticas"/>
        return (
            <div id="DivTabla">
                <table>
                    <tbody>
                        <tr>
                            <td> <label htmlFor="Usu">Nombre de Usuario:</label> </td>
                            <td> <input id="Usu" type="text" ref={this.username} value="A123"/> </td>
                        </tr>
                        <tr>
                            <td> <label htmlFor="Pass">Contraseña:</label> </td> 
                            <td> <input id="Pass" type="text" ref={this.password} value="B123"/> </td>
                        </tr>
                        <tr>
                            <td className="centrar"> <input type="button" value="LogIn" onClick={this.Loguearse}/> </td>
                            <td className="centrar"> <input type="button" value="Registrarse" onClick={this.Registrase}/> </td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </tbody>
                </table>
                <h4>{Mensaje}</h4>     
            </div>  
        )
    }
}

const mapStateToProps = (state) => ({
    idUsuario:state.idUsuario,
    Mensaje:state.Mensaje
})

export default connect(mapStateToProps)(Login)

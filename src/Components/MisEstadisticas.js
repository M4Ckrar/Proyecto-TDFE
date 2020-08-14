import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from "react-router-dom";
import AltaGasto from "./AltaGasto";
import ListaGastos from "./ListaGastos";
import Grafica from "./Grafica";
import Radio from "./Radio";
class MisEstadisticas extends Component {

    
    render() {
        let MisGastos=[];
        let Largo = this.props.gastos.length;
        let Tope;
        (Largo-10>0)?Tope=Largo-10:Tope=0;
        for(let i = Largo-1;i>=Tope;i--){
            MisGastos.push(this.props.gastos[i]);
        }

        if(this.props.idUsuario===-1){
            return <Redirect to="/"/>
        }else{
            this.Cargar();
            return (
                <div className="Fondo">
                    <div style={{float:"right"}}>
                        <AltaGasto/>
                        <ListaGastos MisGastos={MisGastos}/>
                    </div>

                    <div style={{float:"right", width:"48%",height:"100%"}}>
                        <div style={ {/*backgroundColor:"blue"  ,*/ width:"100%", /* height:"43%" */}}>
                             <h1>Manuehhhhhhh</h1>
                             <Radio MisGastos={MisGastos}/>
                        </div>
                        <Grafica MisGastos={MisGastos}/>
                    </div>

                    <div style={{float:"left",width:"30%", height:"100%"}}>
                        <div style={ {/*backgroundColor:"red"  ,*/ width:"100%", height:"100%"}}>
                            {/* <h1>Manuehhhhhhh</h1> */}
                        </div>
                    </div>
                    
                    
                </div>
            )
        }     
    }
    Cargar(){
        //Carga de Rubros
        fetch("http://xpense.develotion.com/rubros.php",{
            method: "GET",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            this.props.dispatch({type:"CARGARUBROS",payload:respuesta.rubros})
        })
        //Carga de Gastos
        let url = "http://xpense.develotion.com/gastos.php";
        url+="?id="+this.props.idUsuario;
        fetch(url,{
            method: "GET",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'}
        })
        .then(r=>r.json())
        .then(respuesta =>{
            this.props.dispatch({type:"ACTUALIZAR",payload:respuesta.gastos})
        })
    }
}
const mapStateToProps = (state) => ({
    idUsuario:state.idUsuario,
    gastos:state.gastos
})



export default connect(mapStateToProps)(MisEstadisticas)

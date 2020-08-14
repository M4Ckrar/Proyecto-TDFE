import React, { Component } from 'react'
import { connect } from 'react-redux'

export class AltaGasto extends Component {
    constructor(){
        super();
        this.nombre = React.createRef();
        this.monto = React.createRef();
        this.state = {rubro:"1" ,Mensaje:""};
    }

    seguirRubro = (e) =>{
        this.setState({rubro:e.target.value,Mensaje:this.state.Mensaje});
    }

    Alta = () =>{
        let {idUsuario,apiKey} = this.props;
        let nombre = this.nombre.current.value;
        let monto = this.monto.current.value;
        let rubro = this.state.rubro;
        if(nombre===""||monto===""){
            this.setState({Mensaje:"No pueden haber campos vacios"});
        }else{
            let intMonto = parseInt(monto);
            if(intMonto>0){
                 fetch("http://xpense.develotion.com/gastos.php",{
                    method: "POST",
                    headers:{
                        'apikey':apiKey,
                        'Content-Type': 'application/json'},
                    body:JSON.stringify({
                        "nombre": nombre,
                        "monto": monto,
                        "idUsuario":idUsuario,
                        "idRubro":rubro
                    })
                })
                .then(r=>r.json())
                .then(e=>{
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
                })
            }else{
                this.setState({Mensaje:"El monto no puede ser negativo"});
            }
        };
         
        }

    render() {
        let rubros = this.props.rubros;
        return (
            <div id="AltaGasto" className="Elemento">
                <table>
                    <tbody>
                        <tr>
                            <td className="izquierda"> <label htmlFor="Nom" >Nombre: </label> </td>
                            <td> <input id="Nom" type="text" ref={this.nombre}/> </td>
                        </tr>
                        <tr>
                            <td className="izquierda"> <label htmlFor="Rub">Rubros: </label> </td>
                            <td> <select id="Rub" onChange={this.seguirRubro}>
                                    {rubros.map(r=><option key={r.id} value={r.id}>{r.nombre}</option>)}
                                </select> </td>
                        </tr>
                        <tr>
                            <td className="izquierda"> <label htmlFor="Monto" >Monto:</label> </td>
                            <td> <input id="Monto" type="number" min="1" ref={this.monto}/> </td>
                        </tr>
                    </tbody>
                </table>
                <input type="button" onClick={this.Alta} value="Agregar"/>
                <p> {this.state.Mensaje}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    rubros:state.rubros,
    apiKey:state.apiKey,
    idUsuario:state.idUsuario
})


export default connect(mapStateToProps)(AltaGasto)

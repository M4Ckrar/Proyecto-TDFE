import React, { Component } from 'react'
import { connect } from 'react-redux'

class Gasto extends Component {

    Eliminar = () =>{
        let id = this.props.g.id;
        fetch("http://xpense.develotion.com/gastos.php",{
            method: "DELETE",
            headers:{
                'apikey':'62a50391d9786ed96eba6e757f87432f',
                'Content-Type': 'application/json'},
            body:JSON.stringify({
                "idGasto": id
            })
        })
        .then(r=>r.json())
        .then(e=>{
            let url = "http://xpense.develotion.com/gastos.php";
            url+="?id="+this.props.g.usuario;
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
    }

    render() {

        let g = this.props.g; 
        let i = this.props.i;
        let maxLength = 13;
        let maxLengthNum = 8;
        let Texto="";
        let Precio="";

        (g.nombre.length>maxLength)?Texto = g.nombre.substring(0,maxLength-3)+"...":Texto = g.nombre;
        (g.monto.length>maxLengthNum)?Precio = g.monto.substring(0,maxLengthNum-3)+"...":Precio = g.monto;
        return (
            <>
                <td>
                    {i}: <abbr title={g.nombre}>{Texto}</abbr> $<abbr title={g.monto}>{Precio}</abbr>
                </td>
                <td>
                    <input type="button" value="X" onClick={this.Eliminar}/>
                </td>
            </>
        )
        
    }
}

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Gasto)


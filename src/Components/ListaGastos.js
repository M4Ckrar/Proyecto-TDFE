import React, { Component } from 'react'
import { connect } from 'react-redux'
import Gasto from "./Gasto";
 class ListaGastos extends Component {
     
    render() {

        let MisGastos=this.props.MisGastos;
        let Total= MisGastos.reduce((ac,gasto)=>ac+=parseInt(gasto.monto),0);
        let TotalText="";
        String(Total).length>10?TotalText=String(Total).substring(0,7)+"...":TotalText=String(Total);
        return (
            <div className="Elemento">
                <table id = "ListaGastos">
                    <tbody>
                        {MisGastos.map((g,i)=><tr key={i}><Gasto i={i+1} g={g}/></tr>)}
                    </tbody>
                </table>
                <h3>Total gastado: $<abbr title={Total}>{TotalText}</abbr></h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    gastos:state.gastos,
})

export default connect(mapStateToProps)(ListaGastos)

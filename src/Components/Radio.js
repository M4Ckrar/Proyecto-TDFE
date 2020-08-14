import React, { Component } from 'react'
import {Pie} from 'react-chartjs-2';

export class Radio extends Component {
    render() {
        let GNombre = this.props.MisGastos.map(g=> g.nombre);
        for(let i = 0;i<GNombre.length;i++){
            if(GNombre[i].length>10)GNombre[i]=GNombre[i].substring(0,7)+"...";
        }
        let MegaGastos = this.props.MisGastos.map(g=> {});
        const data = {
            labels: GNombre,
            datasets: [{
                data: this.props.MisGastos.map(g=>g.monto),
                backgroundColor: [//Hacer lista de colores
                '#ff8862',
                '#f84006',
                '#f7b924',
                '#efc961',
                '#008b69',
                '#00cd9a',
                '#5252f7',
                '#24249f',
                '#b200cd',
                '#75357e',
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };

        return (
            <div style={{width:"300px"}}>
                <Pie data={data} />
            </div>
        )
    }
}

export default Radio

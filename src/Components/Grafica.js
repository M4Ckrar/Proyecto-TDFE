import React, { Component } from 'react';
import {Line} from "react-chartjs-2"; 
import { defaults } from 'react-chartjs-2'

defaults.global.defaultColor = '#FFF';

export class Grafica extends Component {
    render() {
        let GNombre = this.props.MisGastos.map(g=> g.nombre);
        for(let i = 0;i<GNombre.length;i++){
            if(GNombre[i].length>10)GNombre[i]=GNombre[i].substring(0,7)+"...";
        }
        const data = {
            labels: GNombre,
            datasets: [
              {
                label: 'Últimos 10 gastos',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(28,225,98,0.4)',
                borderColor: 'rgba(28,225,98,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: this.props.MisGastos.map(g=> g.monto)
              }
            ]
          };
        return (
            <div className="Elemento">
                <Line data={data}/>
            </div>
        )
    }
}

export default Grafica

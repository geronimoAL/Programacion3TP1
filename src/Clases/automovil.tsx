import React, { Component } from 'react';
// import Automovil from './automovil';

class Automovil extends Component {
  autos = [
    { id: 1, marca: 'Toyota', modelo: 'Camry', potencia: 50, maxVelocidad: 60},
    { id: 2, marca: 'Honda', modelo: 'Civic', potencia: 60, maxVelocidad: 90 },
    { id: 3, marca: 'Ford', modelo: 'Focus', potencia: 70, maxVelocidad: 120 },
    { id: 4, marca: 'Audi', modelo: 'Sedan', potencia: 80, maxVelocidad: 150},
    { id: 5, marca: 'Volkswagen', modelo: 'Gold Trend', potencia: 90, maxVelocidad: 180 },
  ];
  calcularTiempo=(velocidad:number)=>{
    const kilometroRecorrido = Math.floor(Math.random() * 100) + 1;
    const kilometro=Math.round(kilometroRecorrido/velocidad);
    return kilometroRecorrido;
  };


  render() {
    return (
      <div>
       {this.autos.map((item, index) => (
        <div key={index} >
          {item.id} - {item.marca} - {item.maxVelocidad} - {item.modelo} - {item.potencia} - {"Kilometro recorrido "+this.calcularTiempo(item.maxVelocidad)+' km/h'}
        </div>
      ))}
      </div>
    );
  }
}

export default Automovil;

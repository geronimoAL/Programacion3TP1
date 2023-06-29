import React, { Component } from 'react';
import Alumno from './Alumno';

class Escuela extends Component {
    curso1 ;
    curso2 ;
  

constructor(props: any) {
    super(props);
    this.curso1 = [
      { id: 1, alumno: new Alumno("Javier", "Gil") },
      { id: 2, alumno: new Alumno("María", "Gómez") }
    ];
    this.curso2 = [
      { id: 1, alumno: new Alumno("Enzo", "Castro")},
      { id: 2, alumno: new Alumno("J.J", "López")}
    ];
  }
  render() {
  return (
    <div> 
        {this.curso1.map((item, index) => (
        <div key={index} >
          {item.alumno.nombre} {" "+item.alumno.apellido}
        </div>
      ))}
       {this.curso2.map((item, index) => (
        <div key={index} >
          {item.alumno.nombre} {" "+item.alumno.apellido}
        </div>
      ))}
    </div>    
  );
}


}

export default Escuela;
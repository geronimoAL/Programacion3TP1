import React, { Component } from 'react';

interface State {
  nombre: string;
  apellido: string;
}

interface Props {}

class FormularioUsuario extends Component<Props, State> {

  render() {
    const usuario = {
      nombre: 'Gerónimo',
      edad: 25,
      apellido:"Luminari"
    };
    return (
      <div>
        <h1>Usuario</h1>
        <h3>nombre:{usuario.nombre}</h3>
        <h3>edad:{usuario.edad}</h3>
        <h3>apellido:{usuario.apellido}</h3>
      </div>
    );
  }
}

export default FormularioUsuario;

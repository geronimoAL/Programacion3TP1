import React, { Component } from "react";

interface State {
  nombre: string;
  apellido: string;
}

interface Props {}

class FormularioUsuario extends Component<Props, State> {
  render() {
    const usuario = {
      nombre: "Gerónimo",
      edad: 25,
      apellido: "Luminari",
    };
    return (
      <div>
        <div className="container ">
        <div style={{ fontWeight: "500" }}>Usuario</div>
        <div className="input-group mb-3">
          <span style={{ fontWeight: "500" }} className="input-group-text" id="basic-addon1">
            Nombre:
          </span>
          <span> {usuario.nombre}</span>
        </div>
        <div className="input-group mb-3">
          <span style={{ fontWeight: "500" }} className="input-group-text" id="basic-addon1">
            Apellido:
          </span>
          <span> {usuario.apellido}</span>
        </div>
        <div className="input-group mb-3">
          <span style={{ fontWeight: "500" }} className="input-group-text" id="basic-addon1">
            Edad:
          </span>
          <span> {usuario.edad}</span>
        </div>
        </div>
      </div>
    );
  }
}

export default FormularioUsuario;

import React, { Component, useState, ChangeEvent } from "react";

interface SaludoComponent {
  flag: boolean;
  saludo: string;
  inputValue: string;
}

class SaludoPersonalizado extends Component<{}, SaludoComponent> {
  constructor(props: {}) {
    super(props);
    this.state = {
      flag: false,
      saludo: "",
      inputValue: "",
    };
  }
  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };
  handelSaludo = () => {
    this.setState({ flag: true });
    this.setState({ saludo: this.state.inputValue });
  };
  limpiarInput = () => {
    this.setState({ flag: false });
    this.setState({ saludo: "" });
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div>
        <h1>Hola Mundo!!</h1>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={this.handelSaludo}
        >
          Enviar
        </button>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={this.limpiarInput}
        >
          Limpiar
        </button>
        {this.state.flag && <h2>Bienvenido, {this.state.saludo}</h2>}
      </div>
    );
  }
}

export default SaludoPersonalizado;

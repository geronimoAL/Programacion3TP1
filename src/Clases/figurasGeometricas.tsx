import React, { ChangeEvent, useState } from "react";

interface FormaGeometrica {
  calcularArea(): number;
  calcularPerimetro(): number;
}

class FormaGenerica<T> {
  public medidas: T;
  public forma: FormaGeometrica;

  constructor(medidas: T, forma: FormaGeometrica) {
    this.medidas = medidas;
    this.forma = forma;
  }

  calcularArea(): number {
    return this.forma.calcularArea();
  }

  calcularPerimetro(): number {
    return this.forma.calcularPerimetro();
  }
}

class RectanguloMedidas {
  public base: number;
  public altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
}

class Rectangulo implements FormaGeometrica {
  public medidas: RectanguloMedidas;  //almacenar y utilizar objetos de la clase RectanguloMedidas

  constructor(medidas: RectanguloMedidas) {
    this.medidas = medidas;
  }

  calcularArea() {
    return Math.round(this.medidas.base * this.medidas.altura);
  }

  calcularPerimetro() {
    return Math.round(2 * (this.medidas.base + this.medidas.altura));
  }
}

class CirculoMedidas {
  public radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }
}

class Circulo implements FormaGeometrica {
  public medidas: CirculoMedidas; //almacenar y utilizar objetos de la clase CirculoMedidas

  constructor(medidas: CirculoMedidas) {
    this.medidas = medidas;
  }

  calcularArea() {
    return Math.round(Math.PI * this.medidas.radio * this.medidas.radio);
  }

  calcularPerimetro() {
    return Math.round(2 * Math.PI * this.medidas.radio);
  }
}

const FormasGeometricas = () => {
  const [baseValue, setBaseValue] = useState(0);
  const [alturaValue, setAlturaValue] = useState(0);
  const [radioValue, setRadioValue] = useState(0);
  const rectanguloMedidas = new RectanguloMedidas(baseValue, alturaValue);
  const rectangulo = new Rectangulo(rectanguloMedidas);
  const circuloMedidas = new CirculoMedidas(radioValue);
  const circulo = new Circulo(circuloMedidas);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); // El segundo argumento indica la base numérica (10 para decimal)
    setBaseValue(value);
  };

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); // El segundo argumento indica la base numérica (10 para decimal)
    setAlturaValue(value);
  };

  const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10); // El segundo argumento indica la base numérica (10 para decimal)
    setRadioValue(value);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <div className="d-flex flex-column align-items-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Introducir BASE: </span>
            <input type="number" value={baseValue} onChange={handleInputChange} className="form-control w-100" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Introducir ALTURA: </span>
            <input type="number" value={alturaValue} onChange={handleInputChange2} className="form-control w-100" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Introducir RADIO: </span>
            <input type="number" value={radioValue} onChange={handleInputChange3} className="form-control w-100" />
          </div>
        </div>
      </div>
      <p>Base: {baseValue}</p>
      <p>Altura: {alturaValue}</p>
      <p>Radio: {radioValue}</p>


      <h2>Rectángulo</h2>
      <p>Área: {rectangulo.calcularArea()}</p>
      <p>Perímetro: {rectangulo.calcularPerimetro()}</p>

      <h2>Círculo</h2>
      <p>Área: {circulo.calcularArea()}</p>
      <p>Perímetro: {circulo.calcularPerimetro()}</p>
    </div>
  );
};

export default FormasGeometricas;

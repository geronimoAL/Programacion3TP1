import React from "react";

interface FormaGeometrica {
  calcularArea: () => number;
  calcularPerimetro: () => number;
}

class Rectangulo implements FormaGeometrica {
  private base: number;
  private altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return Math.round(this.base * this.altura);
  }

  calcularPerimetro() {
    return Math.round(2 * (this.base + this.altura));
  }
}

class Circulo implements FormaGeometrica {
  private radio: number;

  constructor(radio: number) {
    this.radio = radio;
  }

  calcularArea() {
    return Math.round(Math.PI * this.radio * this.radio);
  }

  calcularPerimetro() {
    return Math.round(2 * Math.PI * this.radio);
  }
}

const FormasGeometricas = () => {
  const rectangulo = new Rectangulo(5, 3);
  const circulo = new Circulo(4);

  return (
    <div>
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

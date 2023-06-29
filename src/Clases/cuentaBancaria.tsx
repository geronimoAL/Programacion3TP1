import React, { ChangeEvent, Component, useState } from "react";

export const CuentaBancaria = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const [fondos, setFondos] = useState(0);
  const [flag, setFlag] = useState(false);
  const [flag2, setFlag2] = useState(false);

  const asignarFondos = () => {
    const cantidad = parseInt(inputValue, 10);
    if (cantidad >= 500000) {
      setFlag(true);
    } else {
      setFondos(cantidad);
      setFlag(false);
    }
    setInputValue("");
  };

  const sacarFondos = () => {
    const cantidad = parseInt(inputValue2, 10);
    if (cantidad > fondos) {
      setFlag2(true);
    } else {
      const nuevosFondos = fondos - cantidad;
      setFondos(nuevosFondos);
      setFlag2(false);
    }
    setInputValue2("");
  };

  return (
    <>
      <h1>Ingresar dinero</h1>
      <input type="number" value={inputValue} onChange={handleInputChange} />
      <button onClick={asignarFondos}>Add Item</button>
      <p>{"valor de fondos: " + fondos}</p>
      {flag && (
        <p style={{ color: "red" }}>
          ¡Alarma! No se puede realizar el retiro de fondos
        </p>
      )}
      <h1>Sacar dinero</h1>
      <input type="number" value={inputValue2} onChange={handleInputChange2} />
      <button onClick={sacarFondos}>Add Item</button>
      <p>{"valor de fondos: " + fondos}</p>
      {flag2 && (
        <p style={{ color: "red" }}>
          ¡Alarma! No puede retirar más de lo que tiene
        </p>
      )}
    </>
  );
};


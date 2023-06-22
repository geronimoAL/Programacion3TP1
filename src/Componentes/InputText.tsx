import React, { useState } from 'react';

function InputText() {
  const [value, setValue] = useState('');

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>Texto Ingresado: {value}</p>
    </div>
  );
}
export default InputText;
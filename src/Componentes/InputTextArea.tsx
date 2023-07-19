import React, { useState } from 'react';

function TextAreaExample() {
  const [value, setValue] = useState('');

  return (
    <div>
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <p>Texto: {value}</p>
    </div>
  );
}
export default TextAreaExample;
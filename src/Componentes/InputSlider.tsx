import React, { useState } from 'react'

const InputSlider = () => {

  const [value, setValue] = useState(50);

  return (
    <div>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <p>Selected value: {value}</p>
    </div>
  );
}
export default InputSlider;
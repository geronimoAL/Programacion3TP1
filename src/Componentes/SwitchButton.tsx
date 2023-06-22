import React, { useState } from 'react';

function SwitchButton() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <input
        type="radio"
        value="option1"
        checked={selectedOption === 'option1'}
        onChange={handleOptionChange}
      />
    <input
        type="radio"
        value="option2"
        checked={selectedOption === 'option2'}
        onChange={handleOptionChange}
      />
      <input
        type="radio"
        value="option3"
        checked={selectedOption === 'option3'}
        onChange={handleOptionChange}
      />
    </div>
  );
}


export default SwitchButton;
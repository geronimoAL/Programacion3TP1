
import { ChangeEvent, useState } from "react";
import { text } from "stream/consumers";

interface RadioButtonProps {
    options: string[]
}

const RadioButton: React.FC<RadioButtonProps> = ({ options }) => {
    const [selectedOption, setSelectedOptions] = useState('')
    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOptions(event.target.value)
    }
    return (
        <div>
          {options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          ))}
        </div>
      );
}


export default RadioButton
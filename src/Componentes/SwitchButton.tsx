import React, { useEffect, useState } from "react";
import "./BotonSwitch.css";

function SwitchButton() {
  const [darkMode, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!darkMode);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);
  return (
    <>
      <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
       <label className="react-switch-label" htmlFor={`react-switch-new`}>
       <span className={`react-switch-button`} onClick={handleToggle} /> 
      </label>
    </>
  );
}

export default SwitchButton;



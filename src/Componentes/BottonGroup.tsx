import React, { useState } from "react";

export const BottonGroup = () => {
  const [buttonColor, setButtonColor] = useState("blue");

 const handleButtonClick = () => {
    const newColor = buttonColor === "blue" ? "red" : "blue";
    setButtonColor(newColor);
  }; 

  return (
    <div>
      <div className="btn-group">
        <button style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}>Apple</button>
        <button style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}>Samsung</button>
        <button style={{ backgroundColor: buttonColor }}
        onClick={handleButtonClick}>HP</button>
      </div>
    </div>
  );
};

import React, { useState } from "react";

export const DropDrown = () => {
  const [items, setItems] = useState<string[]>([
    "Argentina",
    "Uruguay",
    "Paraguay",
  ]);
  return (
    <select name="cars" id="cars">
     {items.map((item, index) => (
          <option >{item}</option>
        ))}
    </select>
  );
};

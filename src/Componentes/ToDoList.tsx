import React, { useState,ChangeEvent } from 'react';

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState<string[]>([]);
  //agregar al input
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  //agregar al array
  const addItem = () => {
    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue('');
  };
  //funcion eliminar del array
  // const deleteItem = (event: ChangeEvent<HTMLInputElement>) => {
  //   setItems((prevItems) => prevItems.filter(item => item !== inputValue));
  //   setInputValue('');
  // };
  // return (
  //   <div>
  //      <input type="text" value={inputValue} onChange={handleInputChange} />
  //     <button onClick={addItem}>Add Item</button>
  //     <ul>
  //       {items.map((item, index) => (
  //         <li >{item}</li><button onClick={deleteItem(index)}>Add Item</button>   
  //       ))}
  //     </ul>
  //   </div>
  // );
  const deleteItem = (index: number) => {
    setItems((prevItems) => prevItems.filter((item, idx) => idx !== index));
    setInputValue('');
  };
  
  return (
    <div>
    <input type="text" value={inputValue} onChange={handleInputChange} />
    <button onClick={addItem}>Add Item</button>
    <ul>
      {items.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
          <li>{item}</li>
          <button onClick={() => deleteItem(index)}>Delete Item</button>
        </div>
      ))}
    </ul>
  </div>
  )
};
export default ToDoList;
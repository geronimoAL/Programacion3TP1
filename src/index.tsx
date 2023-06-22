import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CheckBox from './Componentes/Checkbox';

import { BottonGroup } from './Componentes/BottonGroup';
import { DropDrown } from './Componentes/DropDrown';
import { InputDate } from './Componentes/InputDate';
import ToDoList from './Componentes/ToDoList';
import InputSlider from './Componentes/InputSlider';
import InputText from './Componentes/InputText';
import TextAreaExample from './Componentes/InputTextArea';
import RadioButton from './Componentes/RadioButtom';
import SwitchButton from './Componentes/SwitchButton';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const options = ["Opcion 1", "Opcion 2", "Opcion 3"];
root.render(
  <React.StrictMode>
      <div className="App">
      <h1>TRABAJO PRACTICO N°1</h1>
      <CheckBox label="rojo"/>
      <ToDoList/>
      <BottonGroup/>
      <DropDrown/>
      <InputDate/>
      <InputSlider/>
      <InputText/>
      <TextAreaExample/>
      <RadioButton options={options}/>
      <SwitchButton/>
     </div>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

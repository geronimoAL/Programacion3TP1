import { useState } from "react";
import { sculptureList } from "../data";
// import { sculptureList } from "./data";

interface Sculpture {
  name: string;
  artist: string;
  description: string;
  url: string;
  alt: string
}

export default function Imagenes(){
  const [index, setIndex] = useState<number>(0);
  const [showMore, setShowmore] = useState<boolean>(false);
  const [ancho,setAncho]=useState(100)
  const [largo,setLargo]=useState(100)
  const hasNext: boolean = index < sculptureList.length - 1;

  function handelNextClick(){
    if(hasNext){
      setIndex(index + 1);

    }else{
      setIndex(0);
    }
  }
  function smallImage(){
    setAncho(ancho-5);
    setLargo(largo-5);
  }
  function bigImage(){
    setAncho(ancho+5);
    setLargo(largo+5);
  }


   
  let sculpture: Sculpture = sculptureList[index]

  return(
    <>

      <button onClick={handelNextClick}>Siguiente</button>
      <h2>
        <i>{sculpture.name}</i>
        de {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} de {sculptureList.length})
      </h3>

      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} style={{width:ancho,height:largo} }/>
      <br></br>
      <button onClick={bigImage}>Agrandar</button>
      <button onClick={smallImage}>Reducir</button>
    </>
  )

} 
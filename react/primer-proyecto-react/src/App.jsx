import './App.css'
import Usuario from './components/usuario/usuario'
import { Proveedor } from './components/proveedor/Proveedor'
import { useEffect, useState } from 'react'
// con un punto se queda en la carpeta y con dos se va una carpeta atras
function App() {
  const[characters,setCharacters]= useState([])
//     Variable,| Funcion Actualizadora,| Valor inicial

//usseEffect va a ejecutar el codigo que se encuentra 
//dentro, tantas veces como se actualicen sus dependencias
//si no hay dependencias se ejecuta solo antes del primer
//renderizado
  
  
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));

  },[]);
  return (
    <>
    {characters ? (characters.map((item,index)=> <p>{item.name}</p>)
    ):(
        <>caragando...</>
    )}
      Hola mundo
      <button>Soy un boton</button>
      <Usuario/>
      <Proveedor name={'Dylan'}/>
    </>
  )
}

export default App //Export no nombrado

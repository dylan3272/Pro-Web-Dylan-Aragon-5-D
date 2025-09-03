import { useState } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState([1,2,3,4]) //puede tener array y diccionarios
  //nombre de la variable
  const [persona, setPersona] = useState({nombre: "Pepito",edad: 30})
  // Spread operator
  function myfunction(){
    const ultimoNum = num[num.length - 1]
    setNum([...num, ultimoNum + 1])
    // console.log(num.length);
    
  };
  function Persona(){
    const nuevoObjeto = {...persona,nombre:"Luis", apellido: "Jose"}
    console.log(nuevoObjeto);
    
  }
  // tarea hacer que el setNum agregue numeros consecutivos ->3
  
  // tarea Agregar una propiedad al objeto persona usando spread operator->4
  //opcional +3 puntos
  //Partiendo de {nombre: "Pepito", edad: 30}, cambia solo nombre a "Luis usando el spread"
  return (
    <>
      <div>
        {num.map((item, index)=>(
          <p>{item}</p>
        ))}
        <button onClick={myfunction}>Agregar numero</button>
        <button onClick={Persona}>Mostrar en consola</button>
      </div>
    </>
  )
}

export default App

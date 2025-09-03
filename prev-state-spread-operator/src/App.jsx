import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]) 
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 }) 

  // Se ejecuta cuando persona cambia
  useEffect(() => {
    console.log("Persona actual:", persona)
  }, [persona])

  // Agrega un número a la lista
  function myfunction() {
    const ultimoNum = num[num.length - 1]
    setNum([...num, ultimoNum + 1])
  };

  // Botones de persona
  function mostrarPersona() {
    console.log("Persona actual:", persona)
  }

  function cambiarNombre() {
    setPersona((prevPersona) => {
      const nuevoNombre = prevPersona.nombre === "Pepito" ? "Luis" : "Pepito"
      return { ...prevPersona, nombre: nuevoNombre }
    })
  }

  function cambiarApellido() {
    setPersona((prevPersona) => {
      const nuevoApellido = prevPersona.apellido === "Gómez" ? "José" : "Gómez"
      return { ...prevPersona, apellido: nuevoApellido }
    })
  }

  return (
    <>
      <div>
        {/* Lista de números */}
        {num.map((item) => (
          <p key={item}>{item}</p>
        ))}

        <button onClick={myfunction}>Agregar numero</button>

        {/* Sección de personas */}
        <h2>Personas</h2>
        <button onClick={mostrarPersona}>Mostrar en consola</button>
        <button onClick={cambiarNombre}>Cambiar Nombre</button>
        <button onClick={cambiarApellido}>Agregar Apellido</button>
      </div>
    </>
  )
}

export default App

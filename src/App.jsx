import { useState } from "react";


function App() {

  const [tareas, setTareas] = useState([
    {id:1, nombre:"tarea 1", descripcion:"descripcion 1", },
  ]);
  const [tareaActual, setTareaActual] = useState("null");

  return (
    <>
    <input
    type="text"
    className="nombre"
    onChange={(e) => setTareaActual({
      nombre: e.target.value
    })}
    />
      <input
    type="text"
    className="descripcion"
    onChange={(e) => setTareaActual({
      ...tareaActual,descripcion: e.target.value
    })}
    />
    <button onClick={()=> setTareas(tareas.concat(tareaActual))}>
      Agregar Tarea
    </button>
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
        <h1>{tarea.nombre}</h1>
        <p>{tarea.descripcion}</p>
        </li>
      ))}
    </ul>
    </>

    
  )
}

export default App

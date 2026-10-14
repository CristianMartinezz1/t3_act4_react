import { useState } from 'react'

// (d) Lista renderizada dinámicamente con .map() y key
// Funcionalidad adicional: agregar y eliminar tareas
function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Ver el curso de React' },
    { id: 2, texto: 'Crear el proyecto con Vite' },
    { id: 3, texto: 'Desplegar en GitHub Pages' },
  ])
  const [nueva, setNueva] = useState('')

  const agregar = () => {
    if (nueva.trim() === '') return
    setTareas([...tareas, { id: Date.now(), texto: nueva }])
    setNueva('')
  }

  const eliminar = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id))
  }

  return (
    <section className="tarjeta">
      <h2>Lista de tareas ({tareas.length})</h2>

      <div className="agregar">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={nueva}
          onChange={(e) => setNueva(e.target.value)}
        />
        <button onClick={agregar}>Agregar</button>
      </div>

      {/* Renderizado condicional */}
      {tareas.length === 0 ? (
        <p>No hay tareas.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              {tarea.texto}
              <button onClick={() => eliminar(tarea.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaTareas

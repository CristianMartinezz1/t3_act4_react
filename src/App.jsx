import Encabezado from './components/Encabezado.jsx'
import TarjetaPerfil from './components/TarjetaPerfil.jsx'
import Contador from './components/Contador.jsx'
import ListaTareas from './components/ListaTareas.jsx'

function App() {
  return (
    <div className="contenedor">
      <Encabezado />
      <TarjetaPerfil
        nombre="Cristian"
        carrera="Ingeniería en Sistemas Computacionales"
        escuela="Instituto Tecnológico de Oaxaca"
      />
      <Contador />
      <ListaTareas />
    </div>
  )
}

export default App

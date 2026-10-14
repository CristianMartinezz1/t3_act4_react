// (b) Componente que recibe y muestra props
function TarjetaPerfil({ nombre, carrera, escuela }) {
  return (
    <section className="tarjeta">
      <h2>{nombre}</h2>
      <p>{carrera}</p>
      <p>{escuela}</p>
    </section>
  )
}

export default TarjetaPerfil

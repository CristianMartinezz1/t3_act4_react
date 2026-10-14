import { useState } from 'react'

// (c) Componente con estado (useState) y eventos
function Contador() {
  const [numero, setNumero] = useState(0)

  return (
    <section className="tarjeta">
      <h2>Contador</h2>
      <p className="numero">{numero}</p>
      <div className="botones">
        <button onClick={() => setNumero(numero - 1)}>−</button>
        <button onClick={() => setNumero(0)}>Reiniciar</button>
        <button onClick={() => setNumero(numero + 1)}>+</button>
      </div>
    </section>
  )
}

export default Contador

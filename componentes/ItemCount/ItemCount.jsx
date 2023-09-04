import Compra from './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, useCount] = useState(1)

  return (
    <div>
      <h4 className='Cantidad'>1</h4>
      <button className="botones">➖</button>
      <button className="agregarACarro" onClick={() => onAdd(count)}>Agregar a Carro</button>
      <button className="botonesDos">➕</button>
    </div>
  )
}

export default ItemCount
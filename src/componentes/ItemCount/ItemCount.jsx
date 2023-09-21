import Compra from './ItemCount.css'
import { useState } from "react"

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1)

  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1)
  }

  const increment = () => {
    if (count < stock) setCount(prev => prev + 1)
  }

  return (
    <>
      <h3>{count}</h3>
      <button className="botones" onClick={decrement}>➖</button>
      <button className="agregarACarro" onClick={() => onAdd(count)}>Agregar al Carrito </button>
      <button className="botonesDos" onClick={increment}>➕</button>
    </>
  )
}

export default ItemCount
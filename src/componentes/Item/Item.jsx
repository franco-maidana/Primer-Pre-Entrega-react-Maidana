import CartaPresentacion from './Item.module.css'
import { useContext } from 'react'  // lo importamos para que se pueda usar 
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contex/carContex'
// destructuramos el product y lo llamamos por props
const Item = ({ id, imagen, nombre, precio }) => {

  const value = useContext(CartContext)
  //poder navegar con los botones
  const navigate = useNavigate()

  return (
    <div className={CartaPresentacion.externo}>
      <h3 className={CartaPresentacion.h3}>{nombre}</h3>
      <img src={imagen} className={CartaPresentacion.imgProductos} alt="img-lupulo" />
      <p className={CartaPresentacion.precio}>Precio: $ {precio}</p>
      <button className={CartaPresentacion.botonVerDetalles} onClick={() => navigate(`/detail/${id}`)}>Ver Detalles</button>
    </div>
  )
}

export default Item
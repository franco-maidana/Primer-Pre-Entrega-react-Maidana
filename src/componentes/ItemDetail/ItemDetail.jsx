import CarteDelDetalle from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCart } from '../../contex/carContex'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const ItemDetail = ({ id, nombre, marca, imagen, precio, stock, description, }) => {
  const [quantity, setQuantity] = useState(0)

  const { addItem } = useCart()

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id, nombre, marca, precio, imagen, quantity
    }
    addItem(objProductToAdd) // esto es lo que se agrego al carro
    // setNotification()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `se agregaron ${quantity} ${nombre} al carrito`,
      showConfirmButton: false,
      timer: 1500
    })
    setQuantity(quantity)
  }

  return (
    <div className={CarteDelDetalle.div}>
      <section className={CarteDelDetalle.caja}>
        <h1 className={CarteDelDetalle.h1}>{nombre}</h1>
        <h3 className={CarteDelDetalle.h1}>{marca}</h3>
        <img className={CarteDelDetalle.img} src={imagen} />
        <h3 className={CarteDelDetalle.precio}>precio: $ {precio}</h3>
        {
          quantity === 0 ? (
            <ItemCount onAdd={handleOnAdd} stock={stock} />
          ) : (
            <Link className={CarteDelDetalle.link} to="/cart">Finalizar compra</Link>
          )
        }
      </section>
      <section className={CarteDelDetalle.cajaDos}>
        <h1>Especificaciones</h1>
        <p className={CarteDelDetalle.h3}>{description}</p>
      </section>
    </div>
  )
}

export default ItemDetail
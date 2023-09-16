import CarteDelDetalle from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCart } from '../../contex/carContex'


const ItemDetail = ({ id, nombre, marca, imagen, precio, stock, description, }) => {
  // const [inputType, setInputType] = useState('button') // estado para cambiar de un imput a otro 
  const [quantity, setQuantity] = useState(0)

  // const ItemCount = inputType === 'input' ? InputCount : ButtonCount

  const { addItem } = useCart()

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id, nombre, marca, precio, imagen, quantity
    }
    addItem(objProductToAdd)  // esto es lo que se agrego al carro
    console.log('agregue al carrito: ', quantity)
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
            <button>Finalizar compra</button>
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
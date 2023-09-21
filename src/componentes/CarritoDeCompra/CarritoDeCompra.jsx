import { useCart } from "../../contex/carContex"
import { Link } from "react-router-dom"
import Carro from "./CarritoDeCompras.module.css"


const CarritoDeCompras = () => {

  const { cart, removeItem, total } = useCart()

  return (
    <div className={Carro.moviendo}>
      <h1>Carrito De Compras</h1>
      <section className={Carro.compraFinal}>
        {
          cart.map(prod => {
            return (
              <div className={Carro.carro} key={prod.id}>
                <img src={prod.imagen} alt="" />
                <p className={Carro.nombre}>{prod.nombre}</p>
                <p className={Carro.nombre}> $ {prod.precio}</p>
                <p className={Carro.nombre}>{prod.marca}</p>
                <p className={Carro.nombre}>Cantidad {prod.quantity}</p>
                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
              </div>
            )
          })
        }

      </section>
      <h2 className={Carro.total}>Su total a pagar es de: ${total}</h2>
      <Link className={Carro.siguiente} to="/checkout">Siguiente</Link>
    </div>
  )
}

export default CarritoDeCompras
import { useCart } from "../../contex/carContex"
import { Link } from "react-router-dom"

const CarritoDeCompras = () => {

  const { cart, removeItem, total } = useCart()

  return (
    <>
      <h1>usted esta dentro del carrito de compras.</h1>
      <section>
        {
          cart.map(prod => {
            return (
              <div key={prod.id}>
                <h1>{prod.nombre}</h1>
                <button onClick={() => removeItem(prod.id)}>remove</button>
              </div>
            )
          })
        }

      </section>
      <h2>total: ${total}</h2>
      <Link to="/checkout">Checkout</Link>
    </>
  )
}

export default CarritoDeCompras
import Carrito from './CartWidget.module.css'
import Cart from './assets/carrito-de-compras.svg'

const CarWidget = () => {
  return (
    <section className={Carrito.conteo}>
      <button>
        <img src={Cart} />
        0
      </button>
    </section>
  )
};

export default CarWidget
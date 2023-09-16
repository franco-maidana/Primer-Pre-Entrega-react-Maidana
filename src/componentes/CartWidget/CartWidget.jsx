import Carrito from './CartWidget.module.css'
import Cart from './assets/carrito-de-compras.svg'
import { useCart } from '../../contex/carContex';

const CarWidget = () => {
  const { totalQuantity } = useCart()

  return (
    <section className={Carrito.conteo}>
      <button>
        <img src={Cart} />
        {totalQuantity}
      </button>
    </section>
  )
};

export default CarWidget
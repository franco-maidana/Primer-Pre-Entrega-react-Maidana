import Carrito from './CartWidget.module.css'
import Cart from './assets/carrito-de-compras.svg'
import { useCart } from '../../contex/carContex';
import { Navigate, useNavigate } from 'react-router-dom';


const CarWidget = () => {
  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  return (
    <section className={Carrito.conteo}>
      <button onClick={() => navigate('/cart')}>
        <img src={Cart} />
        {totalQuantity}
      </button>
    </section>
  )
};

export default CarWidget
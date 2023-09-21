import Carrito from './CartWidget.module.css'
import Cart from './assets/carrito-de-compras.svg'
import { useCart } from '../../contex/carContex';
import { useNavigate } from 'react-router-dom';


const CarWidget = () => {
  const { totalQuantity } = useCart()
  const navigate = useNavigate()

  return (
    <section>
      <button className={Carrito.conteo} onClick={() => navigate('/cart')}>
        <img src={Cart} />
        {totalQuantity}
      </button>
    </section>
  )
};

export default CarWidget
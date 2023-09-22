import './App.css'
import Navbar from './componentes/Navbar/Navbar'   // navBar seleccion de botones
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'   // lista ded card del array llamado asyncMock
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'  // detalle de las card seleccionada
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './componentes/Checkout/Checkout'
import { CartProvider } from './contex/carContex'       // contex  carrito de compra
import CarritoDeCompras from './componentes/CarritoDeCompra/CarritoDeCompra'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CarritoDeCompras />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>Error 404 not found</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App


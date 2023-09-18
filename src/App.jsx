import './App.css'
import Navbar from './componentes/Navbar/Navbar'   // navBar seleccion de botones
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'   // lista ded card del array llamado asyncMock
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'  // detalle de las card seleccionada
// libreria react router dom para hacer interactuar el navBar
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// distintos tipos de sitio en la pagina
import Historia from './componentes/Paginas/Historia/historia'   // componente historia
import Cervezas from './componentes/Paginas/Cervezas/cervezas'   // componente cerveza
import Nosotros from './componentes/Paginas/Nosotros/nosotros'   // componente nosotros
import { CartProvider } from './contex/carContex'       // contex  carrito de compra
import { NotificacionProvider } from './notificacion/notificacion'  // notificacion cuando agregas un producto al carro de compras


function App() {

  return (
    <>
      <NotificacionProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/detail/:productId' element={<ItemDetailContainer />} />
              <Route path='/Historia' element={<Historia />} />
              <Route path='/Cervezas' element={<Cervezas />} />
              <Route path='/nosotros' element={<Nosotros />} />
              <Route path='*' element={<h1>Error 404 not found</h1>} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificacionProvider>
    </>
  )
}

export default App


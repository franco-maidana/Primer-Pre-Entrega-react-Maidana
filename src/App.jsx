import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
// libreria react router dom para hacer interactuar el navBar
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// distintos tipos de sitio en la pagina
import Historia from './componentes/Paginas/Historia/historia'
import Cervezas from './componentes/Paginas/Cervezas/cervezas'
import Contactos from './componentes/Paginas/Contactos/contactos'
import Nosotros from './componentes/Paginas/Nosotros/nosotros'
import { CartProvider } from './contex/carContex'


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="!Hola¡  Bienvenidos a la tienda de Insumos Cervecero" />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='/Historia' element={<Historia />} />
            <Route path='/Cervezas' element={<Cervezas />} />
            <Route path='/Contactos' element={<Contactos />} />
            <Route path='/nosotros' element={<Nosotros />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App


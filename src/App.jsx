import './App.css'
import Navbar from '../componentes/Navbar/Navbar'
import ItemListContainer from '../componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../componentes/ItemDetailContainer/ItemDetailContainer'
// libreria react router dom para hacer interactuar el navBar
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="!Hola¡  Bienvenidos a la tienda de Insumos Cervecero" />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


import Clases from './Navbar.module.css'
import CarWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [mostrandoMenu, mostrandoInsumos] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className={Clases.nav}>
      <h1 className={Clases.titulo} onClick={() => navigate('/')}>Insumos Cerveceros</h1>
      <section className={Clases.container}>
        <button className={Clases.button} onClick={() => navigate('/Historia')}>Historia</button>
        <button className={Clases.button} onClick={() => navigate('/Cervezas')}>Cervezas</button>
        <button className={Clases.button} onClick={() => navigate('/Nosotros')}>Nosotros</button>
        <button onClick={() => mostrandoInsumos(!mostrandoMenu)}>Insumos</button>
      </section>
      {mostrandoMenu && (
        <div className={Clases.BotonSecundario}>
          <NavLink to="/category/lupulo" className={Clases.NavLink}>Lúpulo</NavLink>
          <NavLink to="/category/levadura" className={Clases.NavLink}>Levadura</NavLink>
          <NavLink to="/category/malta" className={Clases.NavLink}>Malta</NavLink>
        </div>
      )}
      <CarWidget />
    </nav>
  )
}

export default Navbar
import Clases from './Navbar.module.css'
import CarWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className={Clases.nav}>
      <h1 className={Clases.titulo} onClick={() => navigate('/')}>Insumos Cerveceros</h1>
      <NavLink to="/category/lupulo" className={Clases.NavLink}>Lúpulo</NavLink>
      <NavLink to="/category/levadura" className={Clases.NavLink}>Levadura</NavLink>
      <NavLink to="/category/malta" className={Clases.NavLink}>Malta</NavLink>
      <CarWidget />
    </nav>
  )
}

export default Navbar
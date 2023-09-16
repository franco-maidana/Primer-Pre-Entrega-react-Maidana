import Clases from './Navbar.module.css'
import CarWidget from "../CartWidget/CartWidget"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className={Clases.nav}>
      <h1 className={Clases.titulo} onClick={() => navigate('/')}>Insumos Cerveceros</h1>
      <section className={Clases.container}>
        <button className={Clases.button} onClick={() => navigate('/Historia')}>Historia</button>
        <button className={Clases.button} onClick={() => navigate('/Cervezas')}>Cervezas</button>
        <button className={Clases.button} onClick={() => navigate('/Contactos')}>Contactos</button>
        <button className={Clases.button} onClick={() => navigate('/Nosotros')}>Nosotros</button>
      </section>
      <CarWidget />
    </nav>
  )
}

export default Navbar
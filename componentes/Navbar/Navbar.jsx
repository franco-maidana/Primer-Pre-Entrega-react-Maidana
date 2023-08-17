import Clases from './Navbar.module.css'
import CarWidget from "../CartWidget/CartWidget"


const Navbar = () => {
  return (
    <nav className={Clases.nav}>
      <h1 className={Clases.titulo}>Insumos Cerveceros</h1>
      <section className={Clases.container}>
        <button className={Clases.button}>Historia</button>
        <button className={Clases.button}>Insumos</button>
        <button className={Clases.button}>Cervezas</button>
        <button className={Clases.button}>Contactos</button>
        <button className={Clases.button}>Nosotros</button>
      </section>
      <CarWidget />
    </nav>
  )
}

export default Navbar
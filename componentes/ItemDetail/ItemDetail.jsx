import carteDelDetalle from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ nombre, precio, description, imagen, marca, stock, tipo }) => {
  const handleOnAdd = (quantyly) => {
    console.log('Se Agrego' + quantyly)
  }

  return (
    <div className={carteDelDetalle.div}>
      <section className={carteDelDetalle.caja}>
        <h1 className={carteDelDetalle.h1}>{nombre}</h1>
        <h3 className={carteDelDetalle.h1}>{marca}</h3>
        <img className={carteDelDetalle.img} src={imagen} />
        <h3 className={carteDelDetalle.precio}>precio: $ {precio}</h3>
        <ItemCount stock={stock} onAdd={handleOnAdd} />
      </section>
      <section className={carteDelDetalle.cajaDos}>
        <h1>Especificaciones</h1>
        <p className={carteDelDetalle.h3}>{description}</p>
      </section>
    </div>
  )
}

export default ItemDetail
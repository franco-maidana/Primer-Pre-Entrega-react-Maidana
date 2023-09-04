import carteDelDetalle from './ItemDetail.module.css'
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ nombre, precio, description, imagen, marca, stock }) => {
  const handleOnAdd = (quantyly) => {
    console.log('Se Agrego' + quantyly)
  }

  return (
    <div className={carteDelDetalle.caja}>
      <h1 className={carteDelDetalle.h1}>{nombre}</h1>
      <h3 className={carteDelDetalle.h1}>{marca}</h3>
      <img className={carteDelDetalle.img} src={imagen} />
      <h3 className={carteDelDetalle.precio}>precio: $ {precio}</h3>
      <h3>{description}</h3>
      <ItemCount stock={stock} onAdd={handleOnAdd} />
    </div>
  )
}

export default ItemDetail
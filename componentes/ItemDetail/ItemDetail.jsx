
const ItemDetail = ({ nombre, precio, description, imagen }) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <img src={imagen} style={{ width: 100 }} />
      <h3>$ {precio}</h3>
      <h3>{description}</h3>
    </div>
  )
}

export default ItemDetail
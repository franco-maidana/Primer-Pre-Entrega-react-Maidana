

// destructuramos el product y lo llamamos por props
const Item = ({ imagen, nombre, precio }) => {
  return (
    <div style={{ border: "2px solid black", backgroundColor: "gray", }}>
      <h3 style={{ textAlign: "center" }}>{nombre}</h3>
      <img src={imagen} style={{ width: 200 }} alt="img-lupulo" />
      <p style={{ textAlign: "center" }}>Precio: $ {precio}</p>
      <button style={{ width: 150, margin: 5, marginLeft: 25 }}>Ver Detalles</button>
    </div>
  )
}

export default Item
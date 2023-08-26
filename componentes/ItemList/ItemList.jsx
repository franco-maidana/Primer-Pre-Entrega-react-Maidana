import Item from "../Item/Item"


const ItemList = ({ product }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly", margin: 5, }}>
      {/* hay que pasarlo y filtrarlo para luego hacer las card */}
      {/* componente que esta dentro map tiene que ir la key */}
      {product.map(product => {
        return (
          <Item key={product.id} {...product} />
        )
      })}
    </div>
  )
}

export default ItemList
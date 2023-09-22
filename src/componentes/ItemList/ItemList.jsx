import cartas from "./Item.module.css"
import Item from "../Item/Item"


const ItemList = ({ product }) => {
  return (
    <div className={cartas.tipoDeCartas}>
      {product.map(product => {
        return (
          <Item key={product.id} {...product} />
        )
      })}
    </div>
  )
}

export default ItemList
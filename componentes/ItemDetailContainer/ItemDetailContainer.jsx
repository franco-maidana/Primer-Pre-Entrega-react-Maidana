import { useEffect, useState } from 'react'
import { getProductById } from '../../src/asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { productId } = useParams()

  useEffect(() => {
    getProductById(productId)
      .then(res => {
        setProduct(res)
      })
      .catch(error => {
        console.error(error)
      })
  })
  console.log(product)
  return (
    <div>
      <h1>Detalle de producto</h1>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
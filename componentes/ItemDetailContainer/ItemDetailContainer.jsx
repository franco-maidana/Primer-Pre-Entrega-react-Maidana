import { useEffect, useState } from 'react'
import { getProductById } from '../../src/asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import stylo from './ItemDetailContainer.module.css'

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
      <p className={stylo.hola}>Detalle Del Producto Seleccionado</p>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer
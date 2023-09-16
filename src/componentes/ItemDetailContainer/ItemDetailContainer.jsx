import { useEffect, useState } from 'react'
import { getProductById } from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import stylo from './ItemDetailContainer.module.css'

// pasamos aca en los parentesis el addItem para el carro 
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    getProductById(productId)
      .then(res => {
        setProduct(res)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  if (loading) {
    return <span className="loader"></span>
  }

  return (
    <div>
      <p className={stylo.hola}>Detalle Del Producto Seleccionado</p>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ItemDetail {...product} />
      </div>
    </div>
  )
}

export default ItemDetailContainer
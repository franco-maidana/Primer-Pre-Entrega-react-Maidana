import main from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getproduct } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    // simulacion de llmado a una api 
    getproduct().then(result => {
      setProduct(result)
    })
  }, [])


  return (
    <main className={main.main}>
      <h1>{greeting}</h1>
      <ItemList product={product} />
    </main>
  )
}

export default ItemListContainer
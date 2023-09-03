import main from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getproduct } from '../../src/asyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    // simulacion de llmado a una api 
    getproduct().then(result => {
      setProduct(result)
    })
  }, [])


  return (
    <main className={main.main}>
      <ItemList product={product} />
    </main>
  )
}

export default ItemListContainer
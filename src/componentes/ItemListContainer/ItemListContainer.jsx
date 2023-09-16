import main from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting }) => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { categoryId } = useParams()

  // useEffect(() => {
  //   if (!categoryId) {
  //     // simulacion de llmado a una api 
  //     getProducts().then(result => {
  //       setProduct(result)
  //     })
  //   } else {
  //     getProductsByCategory(categoryId).then(result => {
  //       setProduct(result)
  //     })
  //   }

  // }, [categoryId])

  useEffect(() => {
    setLoading(true)
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(result => {
      setProduct(result)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
      setLoading(false)
    })
  }, [categoryId])

  if (loading) {
    return <span className="loader"></span>
  }

  return (
    <main className={main.main}>
      <h1>{greeting}</h1>
      <ItemList product={product} />
    </main>
  )
}

export default ItemListContainer
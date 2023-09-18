import main from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
// import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { baseDatos } from '../../service/firebase/firebaseConfig'
import { getDocs, collection, QuerySnapshot, query, where } from 'firebase/firestore'

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
    // se hace el filtrado de los productos para que ande los botones de filtrados
    const productsRef = !categoryId ? collection(baseDatos, 'products') : query(collection(baseDatos, 'products'), where('category', '==', categoryId))


    getDocs(productsRef)
      .then(QuerySnapshot => {
        const productosDelFirebase = QuerySnapshot.docs.map(doc => {
          const fields = doc.data()
          return { id: doc.id, ...fields }
        })

        setProduct(productosDelFirebase)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })

    // const asyncFunction = categoryId ? getProductsByCategory : getProducts

    // asyncFunction(categoryId).then(result => {
    //   setProduct(result)
    // }).catch(error => {
    //   console.log(error)
    // }).finally(() => {
    //   setLoading(false)
    // })
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
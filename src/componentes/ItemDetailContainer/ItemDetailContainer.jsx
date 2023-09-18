import { useEffect, useState } from 'react'
// import { getProductById } from '../../asyncMock.js'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import stylo from './ItemDetailContainer.module.css'
import { baseDatos } from '../../service/firebase/firebaseConfig.js'
import { getDoc, doc } from 'firebase/firestore'


// pasamos aca en los parentesis el addItem para el carro 
const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()

  useEffect(() => {
    setLoading(true)

    const productRef = doc(baseDatos, 'products', productId)

    getDoc(productRef)
      .then(documentSnapshot => {
        const fields = documentSnapshot.data()
        const productAdapted = { id: documentSnapshot.id, ...fields }
        setProduct(productAdapted)
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })


    // getProductById(productId)
    //   .then(res => {
    //     setProduct(res)
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
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
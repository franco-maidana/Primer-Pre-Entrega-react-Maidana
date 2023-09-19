import { useState } from "react"
import { useCart } from "../../contex/carContex"
import { collection, query, where } from 'firebase/firestore'
import { baseDatos } from "../../service/firebase/firebaseConfig"
import { addDoc, documentId, getDocs, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"


const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { cart, total, clearCart } = useCart()

  const navigate = useNavigate()

  const createOrden = async () => {
    try {
      setLoading(true)
      const objOrder = {
        buyer: {
          nombre: 'franco maidana',
          telefono: '123456789',
          email: 'francomaidana094@gmail.com'
        },
        items: cart,
        total,
      }

      const batch = writeBatch(baseDatos)
      const noHayStock = []

      // buscamos el id de los productos seleccionados en el carrito
      const idProductoComprado = cart.map(prod => prod.id)
      console.log(idProductoComprado)

      const productosRef = query(collection(baseDatos, 'products'), where(documentId(), 'in', idProductoComprado))

      const { docs } = await getDocs(productosRef)

      docs.forEach(doc => {
        const fields = doc.data()
        const stockBaseDatos = fields.stock

        const productoAgregadoCarrito = cart.find(prod => prod.id === doc.id)
        const CantidadDeProducto = productoAgregadoCarrito?.quantity
        // lo que esta lo guardo en el bath
        if (stockBaseDatos >= CantidadDeProducto) {
          batch.update(doc.ref, { stock: stockBaseDatos - CantidadDeProducto })
        } // lo que no esta lo guardo en el array 
        else {
          noHayStock.push({ id: doc.id, ...fields })
        }
      })

      // poder generar la orden 
      if (noHayStock.length === 0) {
        const ordenRef = collection(baseDatos, 'orders')

        const { id: orderId } = await addDoc(ordenRef, objOrder)

        batch.commit()
        clearCart()
        navigate('/')
        console.log('el numero de orden es:' + orderId)
      } else {
        alert('hay producto fuera de stock...')
      }
    } catch (error) {
      console.error('ocurrio un error al obtener datos' + error.message)
    } finally {
      setLoading(false)
    }

  }

  if (loading) {
    return <h1>se esta generando su orden...</h1>
  }

  return (
    <>
      <h1>checkout</h1>
      <h2>formulario</h2>
      <button onClick={createOrden}>Generar Orden</button>
    </>
  )
}

export default Checkout
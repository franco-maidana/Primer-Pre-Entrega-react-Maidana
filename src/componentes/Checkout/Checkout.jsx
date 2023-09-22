import { useState } from "react"
import { useCart } from "../../contex/carContex"
import { collection, query, where } from 'firebase/firestore'
import { baseDatos } from "../../service/firebase/firebaseConfig"
import { addDoc, documentId, getDocs, writeBatch } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Swal from "sweetalert2"


const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const { cart, total, clearCart } = useCart()

  const navigate = useNavigate()

  const createOrden = async ({ Nombre, Telefono, Email }) => {
    try {
      setLoading(true)
      const objOrder = {
        buyer: {
          Nombre, Telefono, Email
        },
        items: cart,
        total,
      }

      const batch = writeBatch(baseDatos)
      const noHayStock = []

      // buscamos el id de los productos seleccionados en el carrito
      const idProductoComprado = cart.map(prod => prod.id)

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
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

        Toast.fire({
          icon: 'success',
          title: 'Compra existosa su numero de orden es:' + '' + orderId
        })
      } else {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'hay producto fuera de stock...',
          showConfirmButton: false,
          timer: 1500
        })
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
      <h1>Llene los datos para terminar la compra</h1>
      <CheckoutForm onconfirm={createOrden} />
    </>
  )
}

export default Checkout
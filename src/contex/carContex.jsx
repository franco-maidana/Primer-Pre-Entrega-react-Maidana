// carrito de compras
import { useState, createContext, useContext } from "react"
export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  //carrito de compras
  const [cart, setCart] = useState([]);
  console.log(cart)
  // funcion para que tenga toda la logica del carrito
  const addItem = (productoAgregado) => {
    // si no esta en el carrito el producto que tiene el id 
    if (!isInCart(productoAgregado.id)) {
      setCart(prev => [...prev, productoAgregado])
    } else {
      console.error('ya esta agregado al carro')
    }
  }

  const isInCart = (id) => {
    // si cada producto del carrito se cumple con el id mensionado devuelve true si no da false
    return cart.some(prod => prod.id === id)
  }
  // sumar el total de unidades de compra en el carro
  const getTotalQuantity = () => {
    let totalQuantity = 0

    cart.forEach(prod => {
      totalQuantity += prod.quantity
    })

    return totalQuantity
  }

  const totalQuantity = getTotalQuantity()

  // remover productos seleccionados
  const removeItem = () => {
    setCart(prev => prev.filter(prod => prod.id != id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItem, totalQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
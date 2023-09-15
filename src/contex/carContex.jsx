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


  return (
    <CartContext.Provider value={{ cart, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
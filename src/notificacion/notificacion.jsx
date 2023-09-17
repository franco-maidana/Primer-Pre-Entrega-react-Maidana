import { useState, createContext, useContext } from "react"

const Notification = ({ msg }) => {
  const notificationStyle = {
    position: 'absolute',
    top: 115,
    right: 100,
    backgroundColor: 'green',
    color: 'white',
    padding: '10px 20px 10px 20px',
    fontSize: 15,
    borderRadius: 10
  }

  return (
    <div style={notificationStyle}>
      {msg}
    </div>
  )
}


const NotificacionesContex = createContext()

export const NotificacionProvider = ({ children }) => {
  const [message, setMessage] = useState('')

  const setNotification = (msg) => {
    setMessage(msg)
    setTimeout(() => {
      setMessage('')
    }, 1500)
  }


  return (
    <NotificacionesContex.Provider value={{ setNotification }}>
      {/* si tengo un mensaje muestro el mensaje */}
      {message && <Notification msg={message} />}
      {children}
    </NotificacionesContex.Provider>
  )
}

export const useNotification = () => {
  return useContext(NotificacionesContex)
}




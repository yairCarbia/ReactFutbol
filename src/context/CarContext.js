import { createContext, useState } from "react";


export const CarContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const addItem = item => {
        setCarrito([...carrito, item])
    }
    const estaEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id)
    }

    const totalidad = () => {
        return carrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    const vaciarCarrito = () => {
        return setCarrito([]);
    }
    const eliminarItem = (id) => {
        return setCarrito(carrito.filter((prod) => prod.id !== id))
    }
    return (
        //se crea el Carcontext y se le provee de toda la logica 
        <CarContext.Provider value={{ carrito, addItem, estaEnCarrito, totalidad, totalCantidad, vaciarCarrito, eliminarItem }}>

            {children}
        </CarContext.Provider>
    )
}
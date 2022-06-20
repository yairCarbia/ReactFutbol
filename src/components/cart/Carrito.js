import React, { useContext } from 'react'
import { CarContext } from '../../context/CarContext'
import { BsTrash2Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
const Carrito = () => {
    const { carrito, totalidad, vaciarCarrito, eliminarItem } = useContext(CarContext)


    if (carrito.length === 0) {
        return (
            <div className='container my-5'>
                <h2>El carrito esta vacio!
                </h2>
                <Link to="/" className="btn btn-primary">Ir a comprar!</Link>
            </div>

        )
    }
    return (

        <div>
            <h2>Tu compra</h2>

            <hr />
            {//para enviar a traves del evento onClick una fn con parametros el camino es a traves de una fn anonima...
                carrito.map((item) => (
                    <div key={item.id}>
                        <h3> {item.nombre}</h3>
                        <img src={item.img} />
                        <p>Cantidad:{item.cantidad}</p>
                        <h4>Precio:{item.precio * item.cantidad}</h4>
                        <button onClick={() => eliminarItem(item.id)} className='btn btn-danger'> <BsTrash2Fill /> </button>

                        <hr />
                    </div>
                ))
            }

            <h5>TOTAL:${totalidad()}</h5>
            <button onClick={() => vaciarCarrito()} className='btn btn-danger mb-5' > Vaciar carrito</button>
        </div >
    )
}

export default Carrito
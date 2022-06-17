import React, { useContext } from 'react'
import { CarContext } from '../../context/CarContext'
import { BsTrash2Fill } from "react-icons/bs"
const Carrito = () => {
    const { carrito, totalidad, vaciarCarrito, eliminarItem } = useContext(CarContext)
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
                        <button onClick={eliminarItem} className='btn btn-danger'> <BsTrash2Fill /> </button>
                        <button onClick={() => eliminarItem(item.id)} className='btn btn-danger mb-5' > Vaciar carrito</button>
                        <hr />
                    </div>
                ))
            }

            <h5>TOTAL:${totalidad()}</h5>

        </div >
    )
}

export default Carrito
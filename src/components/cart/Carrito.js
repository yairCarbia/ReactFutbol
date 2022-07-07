import React, { useContext } from 'react'
import "../cart/Carrito.scss"
import { useEffect } from 'react'
import { CarContext } from '../../context/CarContext'
import { BsTrash2Fill } from "react-icons/bs"
import { Link } from "react-router-dom"
import {
    LeadingActions,
    SwipeAction,
    SwipeableList,
    SwipeableListItem,

} from "react-swipeable-list"
import "react-swipeable-list/dist/styles.css"
const Carrito = () => {
    const { carrito, totalidad, vaciarCarrito, eliminarItem } = useContext(CarContext)
    const leadingActions = (id) => (
        <LeadingActions>
            <SwipeAction onClick={() => eliminarItem(id)}>Eliminar</SwipeAction>
        </LeadingActions>
    )

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
        <div className='container my-3 text-light'>




            <div>
                <h2>Tu compra</h2>

                <hr />

                {//para enviar a traves del evento onClick una fn con parametros el camino es a traves de una fn anonima...
                    carrito.map((item) => (
                        <SwipeableList>
                            <SwipeableListItem
                                leadingActions={leadingActions(item.id)}

                            >
                                <div className=' container_item' key={item.id}>
                                    <img src={item.img} />
                                    <div> <h3 className='color2'> {item.nombre}</h3>

                                        <p>Cantidad:<span className='color2'> {item.cantidad}</span></p>
                                        <h4>Precio:<span className='color2'> $ {item.precio * item.cantidad}</span></h4></div>

                                </div>
                            </SwipeableListItem>
                        </SwipeableList>
                    ))
                }

                <h5>TOTAL:<span className='color2'>$ {totalidad()}</span></h5>
                <button onClick={() => vaciarCarrito()} className='boton2' > Vaciar carrito</button>
                <Link to="/checkout" className='boton2'>Finalizar Compra</Link >
            </div >



        </div >
    )

}

export default Carrito
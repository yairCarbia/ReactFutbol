import React, { useContext } from 'react'
import "./Carrito.scss"
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

                {
                    carrito.map((item) => (
                        <SwipeableList>
                            <SwipeableListItem
                                leadingActions={leadingActions(item.id)}

                            >
                                <div className=' container_item' key={item.id}>
                                    <img className='container_img' src={item.img} />
                                    <div> <h3 className='color2'> {item.nombre}</h3>

                                        <p>Cantidad:<span className='color2'> {item.cantidad}</span></p>
                                        <h4>Precio:<span className='color2'> $ {item.precio * item.cantidad}</span></h4></div>

                                </div>
                            </SwipeableListItem>
                        </SwipeableList>
                    ))
                }
                <p>Nota : deslizar hacia la derecha para eliminar el producto del carrito!</p>
                <h5>TOTAL:<span className='color2'>$ {totalidad()}</span></h5>
                <button onClick={() => vaciarCarrito()} className='boton2' > Vaciar carrito</button>
                <button className='boton2'><Link to="/checkout">Finalizar Compra</Link ></button>
            </div >



        </div >
    )

}

export default Carrito
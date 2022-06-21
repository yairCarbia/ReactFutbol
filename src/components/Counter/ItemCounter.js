import React, { useState } from 'react'
import "./ItemCounter.scss"
import Carrito from '../cart/Carrito'
import { Link } from 'react-router-dom'
const ItemCount = ({ max, setContador, contador, handdleAgregar }) => {


    const suma = () => {
        contador < max && setContador(contador + 1);
    }
    const reset = () => {
        setContador(1);
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1)

    }


    return (
        <div>


            <h3>Cantidad:{contador}</h3>
            <div className='flex'>
                <button className='btn btn-success' onClick={suma}>+1</button>
                <button className='btn btn-primary' onClick={reset}>Reset</button>
                <button className='btn btn-danger' onClick={resta}>-1</button>
            </div>
            <hr />
            <button href="cart" onClick={handdleAgregar} className="btn btn-primary my-2">Agregar al Carrito</button>

        </div>
    )
}

export default ItemCount
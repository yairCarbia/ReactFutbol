import React, { useState } from 'react'
import "./ItemCounter.scss"

const ItemCount = ({ prenda }) => {
    const [contador, setContador] = useState(1);
    const suma = () => {
        setContador(contador + 1);
    }
    const reset = () => {
        setContador(1);
    }
    const resta = () => {
        if (contador < 1) {
            setContador(1)
        } else { setContador(contador - 1); }

    }

    return (
        <div>

            <h2>Prenda:{prenda}</h2>
            <h3>Cantidad:{contador}</h3>
            <div className='flex'>
                <button className='btn btn-success' onClick={suma}>+1</button>
                <button className='btn btn-primary' onClick={reset}>Reset</button>
                <button className='btn btn-danger' onClick={resta}>-1</button>
            </div>

        </div>
    )
}

export default ItemCount
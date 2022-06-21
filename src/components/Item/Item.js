import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

import "./Item.scss"


const Item = ({ item }) => {

    return (
        <div className="card">
            <h2>{item.nombre}</h2>
            <img src={item.img} />
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <div className="contenedor "> <Link to={`/item/${item.id}`}>
                <button className="boton">Ver más</button>

            </Link>
            </div>



        </div>
    )
}

export default Item
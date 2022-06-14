import { useNavigate } from "react-router-dom"
import { useState } from "react"
import ItemCounter from "../Counter/ItemCounter"
import "./ItemDetail.scss"
const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handdleAgregar = () => {
        const itemCarrito = {
            ...item,
            cantidad
        }
    }

    return (
        <div className="container card2 my-5">
            <h2>{item.nombre}</h2>
            <img className="container_img2" src={item.img} alt={item.nombre} />
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <ItemCounter
                max={item.stock}
                contador={cantidad}
                setContador={setCantidad}
                handdleAgregar={handdleAgregar}

            />
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail
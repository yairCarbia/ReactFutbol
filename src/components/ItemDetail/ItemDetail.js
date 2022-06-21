import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import ItemCounter from "../Counter/ItemCounter"
import "./ItemDetail.scss"
import { CarContext } from "../../context/CarContext"
const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);
    const { carrito, setCarrito } = useContext(CarContext);
    const { addItem, estaEnCarrito } = useContext(CarContext)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handdleAgregar = () => {
        const itemCarrito = {
            ...item,
            cantidad
        }
        // setCarrito([...carrito, itemCarrito])
        addItem(itemCarrito)
    }

    return (
        <div className="container card2 my-5">
            <h2>{item.nombre}</h2>
            <img className="container_img2" src={item.img} alt={item.nombre} />
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            {
                estaEnCarrito(item.id)
                    ? <Link to="/cart" className="btn btn-primary">Finalizar compra</Link>
                    : <ItemCounter
                        max={item.stock}
                        contador={cantidad}
                        setContador={setCantidad}
                        handdleAgregar={handdleAgregar}

                    />
            }

            {/* <button onClick={handleVolver}>VOLVER</button> */}

        </div>
    )
}

export default ItemDetail
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
        <>
            <h2 className="text-light text-center m-3">Has seleccionadado el producto, <spam className="color2">{item.nombre} !</spam> </h2>

            <h4 className="text-light text-center"> Su precio es de:<spam className="color2"> ${item.precio}</spam></h4>
            <div className="d-flex">
                <img className="container_img2 mb-3 " src={item.img} alt={item.nombre} />


                {
                    estaEnCarrito(item.id)
                        ? <Link to="/cart" className="boton finalizar text-center m-2">Finalizar compra</Link>
                        : <ItemCounter
                            max={item.stock}
                            contador={cantidad}
                            setContador={setCantidad}
                            handdleAgregar={handdleAgregar}

                        />
                }

                {/* <button onClick={handleVolver}>VOLVER</button> */}

            </div></>

    )
}

export default ItemDetail
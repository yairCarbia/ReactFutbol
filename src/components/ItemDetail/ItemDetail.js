import { useNavigate } from "react-router-dom"
import ItemCounter from "../Counter/ItemCounter"
import "./ItemDetail.scss"
const ItemDetail = ({ item }) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className="container card2 my-5">
            <h2>{item.nombre}</h2>
            <img className="container_img2" src={item.img} alt={item.nombre} />
            <p>{item.desc}</p>
            <h4>Precio: ${item.precio}</h4>
            <ItemCounter />
            <button onClick={handleVolver}>VOLVER</button>
        </div>
    )
}

export default ItemDetail
import { Link, useNavigate } from "react-router-dom"
import { Children, useContext, useState } from "react"
import ItemCounter from "../Counter/ItemCounter"
import "./ItemDetail.scss"
import { CarContext } from "../../context/CarContext"
import Swal from "sweetalert2";
import Detail from "../Detail/Detail"
const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);
    const { carrito, setCarrito } = useContext(CarContext);
    const { addItem, estaEnCarrito } = useContext(CarContext)
    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handdleAgregar = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        Swal.fire(
            'Agregado!',
            'Este producto se ha agregado correctamente!',
            'success'
        )
        const itemCarrito = {
            ...item,
            cantidad
        }

        addItem(itemCarrito)
    }

    return (
        <>
            <Detail
                item={item}
                handdleAgregar={handdleAgregar}
                cantidad={cantidad}
                setCantidad={setCantidad}
                estaEnCarrito={estaEnCarrito}
            />

        </>

    )
}

export default ItemDetail
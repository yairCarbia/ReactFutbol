import { useEffect, useState } from "react"
import "./ItemListContainer.scss"
import { Spinner } from "react-bootstrap"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
export const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)


    // const params = useParams()
    const { categoryId } = useParams()
    console.log(categoryId)


    useEffect(() => {
        setLoading(true)

        //1ro armar la ref 
        //la fn collection recibe 2 parametros
        //1ero la ref a la base de datos y 2do que coleeccion consumir de la base 
        const productos = collection(db, "productos");
        const consulta = categoryId ? query(productos, where("categoria", "==", categoryId)) : productos
        //2do llamar a firebase con la ref del 1er paso
        getDocs(consulta)
            .then((rta) => {
                const prod = rta.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(prod);
                console.log(prod);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return (
        <section className="container bg-black my-5">

            {
                loading
                    ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    : <ItemList items={items} />
            }

        </section>
    )
}
import { useEffect, useState } from "react"
import "./ItemListContainer.scss"
import { Spinner } from "react-bootstrap"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"




export const useProd = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)



    const { categoryId } = useParams()



    useEffect(() => {
        setLoading(true)


        const productos = collection(db, "productos");
        const consulta = categoryId ? query(productos, where("categoria", "==", categoryId)) : productos

        getDocs(consulta)
            .then((rta) => {
                const prod = rta.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setItems(prod);

            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])

    return {
        items, loading
    }
}
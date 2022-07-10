import { useEffect, useState } from "react"
import "./ItemListContainer.scss"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useProd } from "./useProd"

export const ItemListContainer = () => {

    const { items, loading } = useProd()

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
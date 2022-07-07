import React, { useContext, useState } from 'react'
import { CarContext } from '../../context/CarContext'
import { Navigate } from 'react-router-dom'
import { getOverlayDirection } from 'react-bootstrap/esm/helpers'
import { collection, addDoc, doc, updateDoc, getDoc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { Formik } from 'formik'
import * as Yup from "yup"
import "yup-phone"
import { async } from '@firebase/util'


const schema = Yup.object().shape({
    nombre: Yup.string().required("El Campo nombre es invalido")
        .min(4, "El nombre es demasiado corto, vuelve a intentar!")
        .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
    email: Yup.string().required("El campo Email es invalido")
        .email("Formato de email erroneo,vuelve a intentar!"),
    telefono: Yup.string().phone("Numero invalido").required("El numero es incorrecto"),
    direcion: Yup.string().required("El Campo es invalido")
        .min(4, "El nombre es demasiado corto, vuelve a intentar!")
        .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
})

const Checkout = () => {




    const { carrito, totalidad, vaciarCarrito, eliminarItem } = useContext(CarContext)
    const [orderId, setOrder] = useState(null)
    const [value, setValue] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direcion: ""
    })

    const handdleSubmit = async (value) => {

        //Valido la entrada de datos
        // if ([value.nombre, value.email, value.telefono].includes("")) {
        //     alert("Campos invalidos")
        //     return;
        // }
        //Creo el obj de la orden de compra
        const orden = {
            comprador: value,
            items: carrito.map(({ id, cantidad, precio, nombre }) => ({ id, cantidad, precio, nombre })),
            total: totalidad()

        }
        const batch = writeBatch(db)
        const prodRef = collection(db, "productos")
        const orderRef = collection(db, "orders")
        const consulta = query(prodRef, where(documentId(), "in", carrito.map(el => el.id)))
        const itemsSinStock = [];
        const productos = await getDocs(consulta)
        productos.docs.forEach((doc) => {
            const itemUpdate = carrito.find(el => el.id === doc.id)

            if (doc.data().stock - itemUpdate.cantidad >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemUpdate.cantidad
                })
            } else { itemsSinStock.push(itemUpdate) }
        })
        if (itemsSinStock.length === 0) {
            addDoc(orderRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrder(doc.id);
                    vaciarCarrito();
                })

        } else {
            alert("Items sin stock!!!")
        }
        //Crear doc en la base 
        //primero se pasa la base de datos y 2do que collecion de la base

        //Luergo llamamos addDoc y le pasamos la ref de la base y 2do el documento que queremos crear

    }
    // const inputChange = (e) => {
    //     setValue({ ...value, [e.target.name]: e.target.value })
    // }

    if (orderId) {
        return (
            <div className='container my-5'>
                <h2>Gracias por la compra</h2>
                <p>Su orden de compra es: {orderId}</p>
            </div>
        )
    }
    if (carrito.length === 0) {
        return <Navigate to="/" />
    }
    return (
        <div className='container my-2'>
            <h1>Checkout!</h1>

            <Formik
                initialValues={{
                    nombre: "",
                    email: "",
                    telefono: ""
                }}

                onSubmit={handdleSubmit}

                validationSchema={schema}
            >
                {
                    (formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                value={formik.values.nombre}
                                name="nombre"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder={"Nombre"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>)
                            }
                            <input
                                value={formik.values.email}
                                name="email"
                                onChange={formik.handleChange}
                                type={"email "}
                                placeholder={"Email"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>)
                            }
                            <input
                                value={formik.values.telefono}
                                name="telefono"
                                onChange={formik.handleChange}
                                type={"tel"}
                                placeholder={"Telefono"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.telefono && <p className='alert alert-danger'>{formik.errors.telefono}</p>)
                            }
                            <input
                                value={formik.values.direcion}
                                name="direcion"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder={"Direcion"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.direcion && <p className='alert alert-danger'>{formik.errors.direcion}</p>)
                            }
                            <button onSubmit={handdleSubmit}>Enviar</button>
                        </form>
                    )
                }


            </Formik>


            <button onClick={vaciarCarrito} className="btn btn-danger my-2">Eliminar Compra</button>

        </div>
    )
}

export default Checkout


// carrito.forEach(element => {
//     const docRef = doc(db, "productos", element.id)
//     getDoc(docRef).then((doc) => {
//         if (doc.data().stock - element.cantidad >= 0) {
//             updateDoc(docRef, {//no olvidar que con .data() accedemos a los campos y valores del documento
//                 stock: doc.data().stock - element.cantidad
//             })
//         } else {
//             alert("No hay mas stock!")
//         }

//     })
// });
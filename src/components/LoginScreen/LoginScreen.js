import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import "./LoginScreen.scss"
import { Formik } from 'formik'
import * as Yup from "yup"

const schema = Yup.object().shape({
    usuario: Yup.string().required("El Campo nombre es invalido")
        .min(4, "El nombre es demasiado corto, vuelve a intentar!")
        .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
    email: Yup.string().required("El campo Email es invalido")
        .email("Formato de email erroneo,vuelve a intentar!"),

    password: Yup.string().required("Campo requerido"),

})

const LoginScreen = () => {
    const { login } = useAuthContext()
    const [estado, setEstado] = useState(false);

    const [valor, setValor] = useState({
        usuario: "",
        email: "",
        password: ""
    })


    const handdleSubmit = (values) => {

        login(values)
    }
    useEffect(() => {

        setEstado(true);

    }, [estado])




    return (
        <>

            <div>

                <div className='container_form'>
                    <h1>Login Carbia Motors</h1>
                    <h2>Inicia sesion </h2>
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            password: ""
                        }}

                        onSubmit={handdleSubmit}

                        validationSchema={schema}
                    >
                        {
                            (formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        value={formik.values.usuario}
                                        name="usuario"
                                        onChange={formik.handleChange}
                                        type={"text"}
                                        placeholder={"Usuario"}
                                        className="form-control my-2"
                                    />
                                    {
                                        (formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.usuario}</p>)
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
                                        value={formik.values.password}
                                        name="password"
                                        onChange={formik.handleChange}
                                        type={"text"}
                                        placeholder={"Contraseña"}
                                        className="form-control my-2"
                                    />
                                    {
                                        (formik.errors.password && <p className='alert alert-danger'>{formik.errors.password}</p>)
                                    }

                                    <button onSubmit={handdleSubmit} type={"submit"}>Enviar</button>

                                </form>
                            )
                        }


                    </Formik>



                </div>
            </div>





        </>


    )
}

export default LoginScreen
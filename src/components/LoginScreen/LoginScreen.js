import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import "./LoginScreen.scss"
const LoginScreen = () => {
    const { login } = useAuthContext()
    const [valor, setValor] = useState({
        usuario: "",
        email: "",
        password: ""
    })
    const handleInputChange = (e) => {
        setValor({
            ...valor,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        login(valor)
    }
    return (
        <div>

            <div className='container2'>
                <div className='container_form'>

                    <h1>Login Carbia Motors</h1>
                    <form className='container_formulario2' onSubmit={handleSubmit}>
                        <input className='container_formulario'
                            type={"text"}
                            name="usuario"
                            value={valor.usuario}
                            onChange={handleInputChange}
                            placeholder="Usuario"
                        />
                        <input className='container_formulario my-2'
                            type={"email"}
                            name="email"
                            value={valor.email}
                            onChange={handleInputChange}
                            placeholder="Email"
                        />
                        <input className='container_formulario my-2'
                            type={"password"}
                            name="password"
                            value={valor.password}
                            onChange={handleInputChange}
                            placeholder="Password"
                        />
                        <button className='btn btn-primary' type='submit'>Ingresar</button>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default LoginScreen
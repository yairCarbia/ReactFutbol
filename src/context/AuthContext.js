import { createContext, useContext, useState } from "react"

const users = [
    { usuario: "yair", email: "123@123.com", pass: "123" },
    { usuario: "Carbia2", email: "yair@carbia2.com", pass: "fizz" },
    { usuario: "Carbia3", email: "yair@carbia3.com", pass: "buzz" }
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        logIn: false,
        userId: null
    })
    const login = (valor) => {
        const { usuario, email, password } = valor
        const encontrar = users.find((user) => user.email === email)

        if (encontrar) {
            if (encontrar.pass === password) {
                setAuth({
                    logIn: true,
                    userId: encontrar.email
                })
            } else {
                alert("Password incorrecto")

            }
        } else {
            alert("User no enctrado")

        }
    }

    const logout = () => {
        setAuth({
            logIn: false,
            userId: null
        })
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>

    )
}
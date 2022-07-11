
import logo from "../../img/cm.jpeg"
import { Link } from "react-router-dom"
import "./Footer.scss"
import CarWidget from "../CartWidget/CarWidget"
const Footer = () => {

    return (
        <footer className="bg-black text-center ">
            <div className='barra'>
                <div className="container_header_logo  ">

                    <img src={logo} className="logo" alt="img loco" />


                </div>
                <nav className="navegacion">
                    <Link to={"/"} className="btn" href="btn">Inicio</Link>
                    <Link to={"/categorias/enduro"} className="btn" href="btn">Enduro</Link>
                    <Link to={"/categorias/deportivo"} className="btn" href="btn">Deportivas</Link>

                    <Link to={"/categorias/varios"} className="btn" href="btn">Varios</Link>

                    <CarWidget className="cart btn" />
                </nav></div>


        </footer>
    )
}

export default Footer
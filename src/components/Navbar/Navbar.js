import './Navbar.scss'
import logo from "../../img/cm.jpeg"
import layout from "../../img/pexels-pragyan-bezbaruah-2629412.jpg"
import { Link } from "react-router-dom"
// import carrito from "../../img/verificar.png"
import CarWidget from '../CartWidget/CarWidget'
export const Navbar = () => {

    return (
        <>




            <header className='header'>
                <div className='barra'>
                    <div className="container_header_logo  ">
                        {/* 
                        <h1 className="titulo">Carbia Motors</h1> */}
                        <img src={logo} className="logo" />
                        {/* <img src={carrito} className="carrito" /> */}

                    </div>
                    <nav className="navegacion">
                        <Link to={"/"} className="btn" href="btn">Inicio</Link>
                        <Link to={"/categorias/enduro"} className="btn" href="btn">Enduro</Link>
                        <Link to={"/categorias/deportivo"} className="btn" href="btn">Deportivas</Link>

                        <Link to={"/categorias/varios"} className="btn" href="btn">Varios</Link>

                        <CarWidget className="cart btn" />
                    </nav></div>

            </header>
            {/* <div className="container_header_div ">
                <div className="container_header_logo d-flex justify-content-center ">
                                <img src={logo} className="logo" />
                                <h1 className="titulo">FUTBOL=TRUE!</h1>
                            </div>

                <div className="container_menu ">
                    <h1>Tienda de FUTBOL=TRUE!</h1>


                    <div className=" d-flex">
                        <img className="container_img" src={layout} />
                        <div className=" d-flex">
                            <Link to={"/tienda"} href="tienda" className="btn-nuevo">Reserva ahora</Link>
                            <Link to={"/nosotros"} href="nosotros" className='btn-nuevo'>Conocenos</Link>
                            <a href="#" className="btn-nuevo">Conocenos</a>
                        </div>

                    </div>


                </div>
            </div> */}








            {/* <header className="header">

                <div className="header__container">
                    <div className='header__nombre'>
                        <img src={logo} className="logo" />
                        <h1 className="header__logo">FUTBOL=TRUE!</h1>
                    </div>


                    <nav className="header__navbar">
                        <a href="/" className="header__navlink">TIENDA</a>
                        <a href="/nosotros" className="header__navlink">Nosotros</a>
                        <a href="/contacto" className="header__navlink">Contacto</a>
                    </nav>
                </div>
            </header> */}
        </>

    )
}

export default Navbar
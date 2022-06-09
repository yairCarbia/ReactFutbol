import "./Footer.scss"
import logo from "../../img/campo-de-futbol.png"
const Footer = () => {

    return (
        <div className="container_header_logo d-flex justify-content-center ">
            <img src={logo} className="logo" />
            <h1 className="titulo">FUTBOL=TRUE!</h1>
        </div>
    )
}

export default Footer
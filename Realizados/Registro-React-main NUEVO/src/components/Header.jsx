import VOAR from "/src/assets/images/VOAR.png"
import carrito from "/src/assets/images/CarritoDeCompras.png"

const Header = () => {
    return (
        <header>
            <a href= "https://voarlogin.netlify.app/" className="logo">
            <img src={VOAR}/>
            <h1 className="logo-nombre">V O A R</h1>
            </a>
            <nav className="union"> 
                   <a href="https://voaroficial.netlify.app/">INICIO</a>
                   <ul className="hola">
                <li class="categorias-texto">
                    <a>CATEGORÍAS</a>
                    <ul class="categorias">
                        <li>
                            <a href=""><h2>Hombre</h2></a>
                            <ul className="espacio">
                                <li><a href="">Camisas deportivas</a></li>
                                <li><a href="">Sudaderas deportivas</a></li>
                                <li><a href="">Pantalones deportivos</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href=""><h2>Mujer</h2></a>
                            <ul className="espacio">
                                <li><a href="">Camisas deportivas</a></li>
                                <li><a href="">Sudaderas deportivas</a></li>
                                <li><a href="">Conjuntos deportivos</a></li>
                                <li><a href="">Licras deportivas</a></li>
                                <li><a href="">Faldas deportivas</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>                   <a href="https://voarlogin.netlify.app/" className="amarillo">CUENTA / INGRESAR</a>
                   <a href="https://voarlogin.netlify.app/">AYUDA</a>
                   <a href="https://voarlogin.netlify.app/" className="carrito"><img src={carrito}/></a>
            </nav>

        </header>
    )
}

export default Header
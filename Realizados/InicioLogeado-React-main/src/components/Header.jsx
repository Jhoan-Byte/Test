import VOAR from "/src/assets/images/VOAR.png"
import carrito from "/src/assets/images/CarritoDeCompras.png"
import personita from "/src/assets/images/Screenshot from 2024-05-17 09-42-50.png"

const Header = () => {
    return (
        <>
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
            </ul>


                    <div className="cuenta">
                        <li className="centrar">
                            <a href="#" className="imagen-texto"><img src={personita} className="personita" height="15px" width="15px"/>CUENTA</a>

                            <ul className="desplegable-cuenta">

                                <li><a href="https://editarcuenta.netlify.app/">Editar Cuenta</a></li>
                                <li><a href="#">Historial de Compras</a></li>
                                <li><a href="https://voaroficial.netlify.app/" className="cerrar-sesion">Cerrar Sesion</a></li>

                            </ul>

                        </li>
                    </div>

                    <a href="https://voarlogin.netlify.app/">AYUDA</a>
                    <a href="https://voarlogin.netlify.app/" className="carrito"><img src={carrito}/></a>
            </nav>
  
        </header>
        </>
    )
}

export default Header
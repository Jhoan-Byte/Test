import React, {useState} from "react"
import Swal from "sweetalert2"
import señor from "/src/assets/images/señor.jpeg"

const Main = () => {

    const [clicked, setClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setClicked(true)
        window.location.href="https://metodop.netlify.app/";
    }

    const [clicked2, setClicked2] = useState(false)

    const handleSubmit2 = (e) => {
        e.preventDefault()

        setClicked2(true)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Agregado Correctamente',
                showConfirmButton: false,
                timer: 1500
            });
    }

    return (    
        <main>
            <div className="cuadro">

                <div className="container imagen">
                            <img src={señor} alt="Camiseta"/>
                </div>

                <div className="container descripcion">
                    <h1 className="tamaño-letra">Nombre de la prenda</h1>
                    
                    <h2>SELECCIONE LA TALLA</h2>
                    <div className="tallas">
                    <button>XS</button>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                    </div>

                    <div className="colores">
                        <h2>COLORES:</h2>
                        <button className="color1"></button>
                        <button className="color2"></button>
                        <button className="color3"></button>
                    </div>

                    <h1 className="tamaño-letra">$ 70.000 COP</h1>

                    <div className="cantidad">
                            <button>-</button>
                            <p>3</p>
                            <button>+</button>
                    </div>

                </div>

                <div  className="container botones">
                    <button onClick={handleSubmit}>COMPRAR</button>
                    <button onClick={handleSubmit2} className="boton-gris">AGREGAR AL CARRITO</button>
                </div>

            </div>
    </main>
    )
}

export default Main
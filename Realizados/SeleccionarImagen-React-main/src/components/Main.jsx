import personita from "/src/assets/images/Screenshot from 2024-05-17 09-42-50.png"

const Main = () => {
    return (
        <main className="text-center">
            <h1>CONFIRMAR DATOS</h1>
                <div className="cuadro">
                    <div className="iconos">
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                        <figure>
                            <img src={personita} alt=""/>
                        </figure>
                    </div>

                    <button className="boton" type="submit"> CONFIRMAR </button>
                </div>

                <button className="boton boton-grande" type="submit">SELECCIONE SU IMAGEN DE USUARIO</button>
                <div className="separar">
                <button className="boton" type="submit"> AHORA NO </button>
                <a href="https://iniciologeado.netlify.app/"><button className="boton" type="submit"> REGISTRARSE</button> </a>       
                </div> 
        </main>
    )
}

export default Main
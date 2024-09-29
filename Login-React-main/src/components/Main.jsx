import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Main = ({login}) => {

    const [dato, setDato] = useState({
        correo: "",
        contrasena: ""
    })

    const [mensaje, setMensaje] = useState('')

    const [cargando, setCargando] = useState(false);

    const {correo, contrasena} = dato;

    const click = async (e) => {
        e.preventDefault()

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!correo.trim() || !contrasena.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Asegurate de llenar todos los campos!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              return
        }

        if (!regexEmail.test(correo)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡El correo electronico no es valido!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              return
        }

        if (contrasena.length < 8) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡La contraseña debe tener como minimo 8 digitos!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              return
          }
          
        setCargando(true);

        login({
            ...dato,
        })

        try {
            const response = await axios.post('http://localhost/php/login.php', {
                correo,
                contrasena
            });
            const mensajeRespuesta = response.data.message;
            setMensaje(mensajeRespuesta)

            if (mensajeRespuesta === 'Login exitoso') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Login exitoso',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.href = 'https://iniciologeado.netlify.app/'
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Error!',
                // footer: '<a href="">Why do I have this issue?</a>'
            });
        } finally {
            setCargando(false);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target

            setDato({
                ...dato,
            [name]: value
            })
    }

    return (
        <main>
            <div className="login">
            <form onSubmit={click}>
                <h1 className="login-texto">INICIO DE SESION</h1>
                <div>
                    <input className="correo" placeholder="Escribe tu correo electronico" id="correo" name="correo" value={correo} onChange={handleChange} type="text" />
                    <input className="contraseña" placeholder="Escribe tu contraseña" id="contrasena" name="contrasena" value={contrasena} onChange={handleChange} type="password" />
                    <button className="boton" disabled={cargando}>{cargando ? 'INICIANDO...' : 'INICIAR SESION'}</button>
                </div>
                <div className="separar">
                    <p>¿NO TIENES UNA CUENTA?</p>
                    <a href="https://voaregistro.netlify.app/">REGISTRARSE</a>
                    <p>{mensaje}</p>
                    <div className="separacion">
                    <a href="https://recuperarcontrasena.netlify.app/">¿OLVIDASTE TU CONTRASEÑA?</a>
                    </div>
                </div>

            </form>
            </div>
        </main>
    )
}

export default Main
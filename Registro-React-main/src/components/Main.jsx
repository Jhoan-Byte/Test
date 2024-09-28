import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"

const Main = ({addCuenta}) => {

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

        addCuenta({
            ...dato,
        })

        try {
            const response = await axios.post('http://localhost/php/register.php', {
                correo,
                contrasena
            });
            setMensaje(response.data.message);

            const mensajeRespuesta = response.data.message;
            setMensaje(mensajeRespuesta)

            if (mensajeRespuesta === 'Registro exitoso') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Registro exitoso',
                    showConfirmButton: false,
                    timer: 1500
                });
                window.location.href = 'https://confirmardatos.netlify.app/'
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
        <main className="registro">
            <form onSubmit={click}>
                <h1 className="registro-texto">REGISTRO</h1>
                <div className="tamaño">
                    <input className="correo" placeholder="Escribe tu correo electronico" type="text" id="correo" name="correo" onChange={handleChange} value={correo} />
                    <input className="contraseña" placeholder="Escribe tu contraseña" type="password" id="contrasena" name="contrasena" onChange={handleChange} value={contrasena} />
                    <button className="boton" disabled={cargando}>{cargando ? 'REGISTRANDO...' : 'REGISTRAR'}</button>
                </div>
                <div className="separar">
                    <p className="">¿YA TIENES UNA CUENTA?</p>
                    <a href="https://voarlogin.netlify.app/">INICIA SESION</a>
                    <p>{mensaje}</p>
                </div>
            </form>
        </main>
    )
}

export default Main
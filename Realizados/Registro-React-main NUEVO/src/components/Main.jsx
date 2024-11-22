import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"
import ojito from "/src/assets/icons/IconOculto.png"

const Main = ({addCuenta}) => {

    const [verContrasena, setVerContrasena] = useState(false);

    const verOcultarContrasena = () => {
        setVerContrasena(!verContrasena)
    }

    const [dato, setDato] = useState({
        nombre: "",
        direccion: "",
        contrasena: "",
        correoElectronico: "",
        correoRecuperacion: "",
        puntoReferencia: ""
    })

    const [mensaje, setMensaje] = useState('')

    const [cargando, setCargando] = useState(false);

    const {nombre, direccion, contrasena, correoElectronico, correoRecuperacion, puntoReferencia} = dato;

    const click = async (e) => {
        e.preventDefault()

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!correoElectronico.trim() || !contrasena.trim() || !nombre.trim() || !direccion.trim() || !puntoReferencia.trim() || !correoRecuperacion.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Asegurate de llenar todos los campos!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              return
        }

        if (!regexEmail.test(correoElectronico)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡El correoElectronico electronico no es valido!',
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
            const response = await axios.post('http://localhost/php/APIFRAMEWORKS/', {
                action: "register",
                nombre,
                direccion,
                contrasena,
                correoElectronico,
                correoRecuperacion,
                puntoReferencia
            });
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
                window.location.href = "http://localhost:5174/"
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
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} placeholder="Escriba su nombre completo" />
                    <input type="text" id="direccion" name="direccion" value={direccion} onChange={handleChange} placeholder="Escriba su direccion" />
                    <input placeholder="Escribe tu correo electronico" type="text" id="correoElectronico" name="correoElectronico" onChange={handleChange} value={correoElectronico} />
                    <input placeholder="Escribe tu contraseña" type={verContrasena ? "text" : "password"} id="contrasena" name="contrasena" onChange={handleChange} value={contrasena} /> <span onClick={verOcultarContrasena}><img className="ojito" src={ojito} alt="" width="30px" height="30px"/></span>
                    <input type="text" id="correoRecuperacion" name="correoRecuperacion" value={correoRecuperacion} onChange={handleChange} placeholder="Escriba un correo de recuperacion" />         
                    <input type="text" id="puntoReferencia" name="puntoReferencia" value={puntoReferencia} onChange={handleChange} placeholder="Escriba su punto de referencia" />
                    <button className="boton" type="submit" disabled={cargando}>{cargando ? 'REGISTRANDO...' : 'REGISTRAR'}</button>
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
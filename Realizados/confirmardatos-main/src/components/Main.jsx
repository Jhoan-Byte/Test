import { useState } from "react"
import Swal from "sweetalert2"
import axios from 'axios'

const Main = ({addFaltantes}) => {

    const [dato, setDato] = useState ({
        nombre: '',
        direccion: '',
        puntoReferencia: '',
        correoRecuperacion: ''
    })

    const [mensaje, setMensaje] = useState ('')

    const [cargando, setCargando] = useState (false)

    const {nombre, direccion, puntoReferencia, correoRecuperacion} = dato

    const click = async (e) => {
        e.preventDefault()

        if (!nombre.trim() || !direccion.trim() || !puntoReferencia.trim() || !correoRecuperacion.trim()) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '¡Asegurate de llenar todos los campos!',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              return
        }
          
        setCargando(true);

        addFaltantes({
            ...dato,
        })

        try {
            const response = await axios.post('http://localhost/php/postLogin.php', {
                nombre,
                direccion,
                puntoReferencia,
                correoRecuperacion,
            }, { withCredentials: true });
            setMensaje(response.data.message);
            const mensajeRespuesta = response.data.message;
            console.log(response.data);
            setMensaje(mensajeRespuesta)

            if (mensajeRespuesta === 'Datos actualizados correctamente') {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Datos actualizados correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
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
            <form>
                <h1 className="titulo">CONFIRMAR DATOS</h1>
                <div className="objetos">
                    <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} placeholder="Escriba su nombre completo" />
                    <input type="text" id="direccion" name="direccion" value={direccion} onChange={handleChange} placeholder="Escriba su direccion" />
                    <input type="text" id="puntoReferencia" name="puntoReferencia" value={puntoReferencia} onChange={handleChange} placeholder="Escriba su punto de referencia" />
                    <input type="text" id="correoRecuperacion" name="correoRecuperacion" value={correoRecuperacion} onChange={handleChange} placeholder="Escriba un correo de recuperacion" />         
                    <button className="boton boton-imagen" type="button"><b><strong>SELECCIONE SU IMAGEN DE USUARIO</strong></b></button>
                    <div className="separar">
                        <button className="boton boton-no" type="button"><b><strong>AHORA NO</strong></b></button>
                        <button className="boton boton-registrarse" type="submit" onClick={click} disabled={cargando}><b><strong>{cargando ? "ACTUALIZANDO..." : "REGISTRARSE"}</strong></b></button>
                    </div>
                </div>
            </form>
            <p>{mensaje}</p>
        </main>
    )
}

export default Main
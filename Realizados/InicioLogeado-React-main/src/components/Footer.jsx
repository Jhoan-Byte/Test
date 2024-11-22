import Whatsapp from "/src/assets/images/WhatsApp.png"
import Instagram from "/src/assets/images/Instagram.png"
import Facebook from "/src/assets/images/Facebook.png"

const Footer = () => {
  return (
      <footer className="pie-pagina">
        <div className="grupo-1">

          <div className="box">
          <a href= "https://voarlogin.netlify.app/"><h1 className="logo-nombre-footer">V O A R</h1></a>
          <p>Dirección: Calle 59 con Avenida Guabinal esquina., 73001</p>
          </div>
          
          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <a href="https://acercadevoar.netlify.app/" className="acerca">Acerca de VOAR</a>
          </div>

          <div className="box">
            <h2>SIGUENOS</h2>
            <div className="red-social">
              <a href="#" className="facebook"><i class="fa-brands fa-facebook"></i></a>
              <a href="#" className="instagram"><i class="fa-brands fa-instagram"></i></a>
              <a href="#" className="whatsapp"><i class="fa-brands fa-whatsapp"></i></a>

            </div>
          </div>

        </div>

        <div className="grupo-2">
          <small>&copy; 2024 <b>VOAR</b> - Todos los derechos reservados</small>
        </div>
      </footer>
  )
}

export default Footer
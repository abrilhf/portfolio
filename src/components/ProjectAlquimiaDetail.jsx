import { useEffect } from "react";

function ProjectAlquimiaDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectAlquimiaDetail">
          <div className="portada"></div>
    
          <article className="grid grid-cols-2 gap-4  place-content-center h-48">

          <h2 className="text-xl">Para</h2>
          <p>Escuela DaVinci - 4to cuatrimestre</p>
    
          <h2 className="text-xl">Servicio</h2>
              <ul>
                <li>Laravel</li>
                <li>Web Responsive</li>
                <li>MySQL</li>
                <li>Diseño de marca</li>
                <li>Identidad visual</li>
              </ul>

    
          </article>
    
          <a href="/#projects">
            <i className="bi bi-arrow-left-short"></i>
          </a>

          
          <div>
            <img src="./img/alquimia/remeras.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/bag.jpg" alt="" />
          </div>

          <div className="descrip">
          <h2 className="text-2xl">Descripción</h2>
            <p>
            Alquimia es una web enfocada al reciclaje y el cuidado del medio ambiente. Fue creado para establecer un espacio compartido entre alquimistas consumidores y alquimistas donantes.</p>

            <div className="info-alquimista">
              <ul>
                  <p>El alquimista del consumidor:</p>
                  <li>Adquiere artículos reciclados.</li>
                  <li>Accede al mercado y publica en él.</li>
                  <li>Asiste a eventos propuestos por la comunidad.</li>
                  <li>Participa en debates en nuestros blogs.</li>
              </ul>
              
              <ul>
                <p>El alquimista donante:</p>
                <li>Compra artículos reciclados y publica los suyos propios.</li>
                <li>Accede al mercado y publica en él.</li>
                <li>Asiste a eventos propuestos por la comunidad y crea nuevos eventos.</li>
                <li>Participa en discusiones dentro de nuestro blog.</li>
              </ul>
            </div>

    
            <p>
            Este proyecto fue desarrollado para nuestra tesis y recibimos una calificación final de 8.
            </p>

            <a href="https://github.com/abrilhf1/project-alquimia" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-alquimia</a>
            </div>

          <div>
            <img src="./img/alquimia/home-site.jpg" alt="" />
          </div>
    
          <div>
            <img src="./img/alquimia/nosotros.jpg" alt="" />
          </div>
    
          <div>
            <img src="./img/alquimia/empresas.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/login.jpg" alt="" />
          </div>
          
          <div>
            <img src="./img/alquimia/register.jpg" alt="" />
          </div>
    
          <div>
            <img src="./img/alquimia/admin.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/admin-empresas.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/alquimista-donante.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/eventos.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/mercado.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/donante.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/donante-elemento.jpg" alt="" />
          </div>

          <div>
            <img src="./img/alquimia/evento-donante.jpg" alt="" />
          </div>
        </div>
      );
}

export default ProjectAlquimiaDetail
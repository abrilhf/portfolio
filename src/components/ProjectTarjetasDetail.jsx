import { useEffect } from "react";
function ProjectTarjetasDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="projectTarjetasDetail">
      <div className="portada"></div>
      <article className="grid grid-cols-2 gap-4  place-content-center h-48">

      <h2 className="text-xl">Para</h2>
      <p>Trabajo freelance</p>

      <h2 className="text-xl">Servicio</h2>
          <ul>
            <li>Wireframe</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Asesoramiento en ideas de diseños</li>
          </ul>

      </article>

      <a href="/#project-tarjetas">
        <i className="bi bi-arrow-left-short"></i>
      </a>

      <div>
        <img src="./img/tarjetas/instagram-mock.jpg" alt="" />
      </div>

        <div className="descrip">
          <h2 className="text-2xl">Descripción</h2>
          <p>
            El proyecto de Invitaciones Abril se formó con el fin de brindar el servicio de crear páginas web de forma de invitación a diferentes eventos, dependiendo de lo que el cliente desee.
          </p>

          <div className="links">

          <a href="https://www.instagram.com/invitacionesabril/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i>@invitacionesabril</a>

          <a href="https://tarjetas-abril.vercel.app/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe2"></i>tarjetas-abril.vercel.app/</a>

          </div>
        </div>

        <div>
          <img src="./img/tarjetas/invitaciones.jpg" alt="" />
        </div>
    </div>
  );
}

export default ProjectTarjetasDetail;

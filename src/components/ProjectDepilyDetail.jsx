import { useEffect } from "react";
function ProjectDepilyDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="projectDepilyDetail">
      <div className="portada"></div>
      <article className="grid grid-cols-2 gap-4  place-content-center h-48">
        <h2 className="text-xl">Para</h2>
          <p>Trabajo freelance - Depily Argentina</p>

          <h2 className="text-xl">Servicio</h2>
          <ul>
            <li>React</li>
            <li>Wireframes</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>Diseño web</li>
          </ul>

      </article>

      <a href="/">
        <i className="bi bi-arrow-left-short"></i>
      </a>

      <div>
        <img src="./img/depily/depily-mockup.jpg" alt="" />
      </div>

      <div className="descrip">
          <h2 className="text-2xl">Descripción</h2>
          <p>
            Depily Argentina es una marca que ofrece productos para el calentamiento de cera. Se desarrolló el sitio web implementando los colores de la marca pero dándole una nueva imagen, más actual. 
          </p>

          <p>
            El sitio web se divide en secciones como Home, Blog, Sobre Nosotros y Productos. Se diseñaron diferentes tipos de posteos e historias para sus redes sociales como Instagram y Facebook.
          </p>

          <div className="links">

          <a href="https://www.instagram.com/depilyargentina/?hl=es-la" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i>@depilyargentina</a>

          <a href="https://www.depilyargentina.com/" target="_blank" rel="noopener noreferrer"><i className="bi bi-globe2"></i>www.depilyargentina.com</a>

          </div>
      </div>

      <div>
        <img src="./img/depily/depily-mockup2.jpg" alt="" />
      </div>

    </div>
  );
}

export default ProjectDepilyDetail;

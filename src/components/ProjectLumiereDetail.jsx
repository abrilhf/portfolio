import { useEffect } from "react";

function ProjectLumiereDetail() {
  
    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectLumiereDetail">
          <div className="portada"></div>
    
          <article className="grid grid-cols-2 gap-4  place-content-center h-48">

          <h2 className="text-xl">Para</h2>
              <p>Escuela DaVinci - 4to cuatrimestre</p>
    
              <h2 className="text-xl">Servicio</h2>
              <ul>
                <li>React</li>
                <li>Web Responsive</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Diseño de marca</li>
              </ul>

    
          </article>
    
          <a href="/#projects">
            <i className="bi bi-arrow-left-short"></i>
          </a>
    
          <div>
            <img src="./img/lumiere/destok-home.jpg" alt="" />
          </div>
    
            <div className="descrip">
            <h2 className="text-2xl">Descripción</h2>
              <p>
              El proyecto Lumière es una plataforma dedicada al mundo del cine, desarrollada utilizando React para el front-end, Node.js para el back-end y MongoDB para la base de datos. La plataforma se enfoca en brindar un listado de las mejores películas.
              </p>

              <p>
                Ofrece la posibilidad de poder comentar su opinion y además, editar y eliminar si así lo desea. 
              </p>

              <a href="https://github.com/abrilhf1/project-lumiere" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-lumiere</a>
            </div>
          <div>
            <img src="./img/lumiere/movie-detail.jpg" alt="" />
          </div>
    
          <div>
            <img src="./img/lumiere/movie-review.jpg" alt="" />
          </div>

          <div>
            <img src="./img/lumiere/edit-coment.jpg" alt="" />
          </div>
          
          <div className="descrip des2">
            <p>
              Se desarrolló una sección de Novedades, donde se reflejan las películas próximas a estrenar. 
            </p>
            <p>
              Al crearse un usuario, el mismo puede elegir si desea cargar una nueva novedad y así tener la posibilidad tanto de eliminar como de editar la misma. 
            </p>
          </div>

          <div>
            <img src="./img/lumiere/novedades.jpg" alt="" />
          </div>
    
          <div>
            <img src="./img/lumiere/novedad-new.jpg" alt="" />
          </div>

          <div>
            <img src="./img/lumiere/novedad-edit-delete.jpg" alt="" />
          </div>

          <div>
            <img src="./img/lumiere/register-login.jpg" alt="" />
          </div>
        </div>
      );
}

export default ProjectLumiereDetail
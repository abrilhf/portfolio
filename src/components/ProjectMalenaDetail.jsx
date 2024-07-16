import { useEffect } from "react";
function ProjectMalenaDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="projectMalenaDetail">
      <div className="portada"></div>
      <article className="grid grid-cols-2 gap-4  place-content-center h-48">

      <h2 className="text-xl">Para</h2>
        <p>Escuela DaVinci - 3er cuatrimestre</p>

        <h2 className="text-xl">Servicio</h2>
        <ul>
            <li>Vue</li>
            <li>Web Responsive</li>
            <li>Vuetify</li>
            <li>Diseño de marca</li>
            <li>Diseño de personaje</li>
          </ul>


      </article>

      <a href="/#project-malena">
        <i className="bi bi-arrow-left-short"></i>
      </a>

      <div>
        <img src="./img/malena/inicio-mobile.jpg" alt="Vestite Conmigo mockup" />
      </div>

        <div className="descrip">
          <h2 className="text-2xl">Descripción</h2>
          <p>
            Este proyecto implica la creación de una página web interactiva creada con Vue y Vuetify. La página permite a los usuarios guardar su conjunto de moda favorito para el personaje Malena.
          </p>

          <a href="https://github.com/abrilhf1/project-malena" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-malena</a>
        </div>

      <div>
        <img src="./img/malena/mobile-net.jpg" alt="Vestite Conmigo mockup" />
      </div>

      <div className="descrip des2">
            <p>
              Se desarrolló una sección de Trivia Games, donde, mediante JavaScript, el usuario puede contestar las preguntas hechas y al finalizar, se le otorga su resultado. 
            </p>
            <p>
              Se brinda la posibilidad de contestar una serie de preguntas con el fin de saber su opinión sobre la página y su experiencia. Guardando las mismas en LocalStorage para luego mostrar sus respuestas.
            </p>
          </div>

      <div>
        <img src="./img/malena/trivia-mobile-net.jpg" alt="Vestite Conmigo mockup" />
      </div>

      <div>
        <img src="./img/malena/encuesta-mobile.jpg" alt="Vestite Conmigo mockup" />
      </div>

    </div>
  );
}

export default ProjectMalenaDetail;

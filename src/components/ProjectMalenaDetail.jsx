import { useEffect } from "react";
function ProjectMalenaDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="projectMalenaDetail">
      <div className="portada"></div>
      <article>
        <div>
          <h4>For</h4>
          <p>Escuela DaVinci - 3rd semester</p>

          <h4>Project</h4>
          <ul>
            <li>Vue</li>
            <li>Web Responsive</li>
            <li>Vuetify</li>
            <li>Brand design</li>
            <li>Character design</li>
          </ul>
        </div>

        <div className="description">
          <h4>Description</h4>
          <p>
            This project involves creating an interactive web page built using Vue and Vuetify. The page allows users to save their favorite fashion set for the character  &quot;Malena&quot;
          </p>

          <a href="https://github.com/abrilhf1/project-malena" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-malena</a>
        </div>
      </article>

      <a href="/#project-malena">
        <i className="bi bi-arrow-left-short"></i>
      </a>

      <div>
        <img src="./img/malena/inicio-mobile.jpg" alt="" />
      </div>

      <div>
        <img src="./img/malena/mobile-net.jpg" alt="" />
      </div>

      <div>
        <img src="./img/malena/trivia-mobile-net.jpg" alt="" />
      </div>

      <div>
        <img src="./img/malena/encuesta-mobile.jpg" alt="" />
      </div>

    </div>
  );
}

export default ProjectMalenaDetail;

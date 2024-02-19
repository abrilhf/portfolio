import { useEffect } from "react";

function ProjectLumiereDetail() {
  
    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectLumiereDetail">
          <div className="portada"></div>
    
          <article>
            <div>
              <h4>For</h4>
              <p>Escuela DaVinci - 4th semester</p>
    
              <h4>Project</h4>
              <ul>
                <li>React</li>
                <li>Web Responsive</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Brand design</li>
              </ul>
            </div>
    
            <div className="description">
              <h4>Description</h4>
              <p>
                The &apos;Lumière&apos; project is a platform dedicated to the world of cinema, developed using React for the front-end, Node.js for the back-end, and MongoDB for the database. The platform focuses on providing a listing of the best movies.
              </p>

              <a href="https://github.com/abrilhf1/project-lumiere" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-lumiere</a>
            </div>
          </article>
    
          <a href="/#projects">
            <i className="bi bi-arrow-left-short"></i>
          </a>
    
          <div>
            <img src="./img/lumiere/destok-home.jpg" alt="" />
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
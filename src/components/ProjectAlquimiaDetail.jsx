import { useEffect } from "react";

function ProjectAlquimiaDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);

    return (
        <div className="projectAlquimiaDetail">
          <div className="portada"></div>
    
          <article>
            <div>
              <h4>For</h4>
              <p>Escuela DaVinci - 4th semester</p>
    
              <h4>Project</h4>
              <ul>
                <li>Laravel</li>
                <li>Web Responsive</li>
                <li>MySQL</li>
                <li>Brand design</li>
                <li>Visual Identity</li>
              </ul>
            </div>
    
            <div className="description">
            <h4>Description</h4>
            <p>
            Alquimia is a website focused on recycling and environmental care. It was created to establish a shared space between consumer alchemists and donor alchemists.</p>
            <p>
                The Consumer Alchemist:

                Procures recycled items.
                Accesses the marketplace and publishes within it.
                Attends community-proposed events.
                Engages in discussions on our blogs.
            </p>
            <p>

                The Donor Alchemist:

                Procures recycled items and publishes their own.
                Accesses the marketplace and publishes within it.
                Attends community-proposed events and creates new events.
                Participates in discussions within our blog.
            </p>
            <p>
                This project was developed for our thesis, and we received a final grade of 8.
            </p>

            <a href="https://github.com/abrilhf1/project-alquimia" target="_blank" rel="noreferrer"><i className="bi bi-github"></i>github.com/abrilhf1/project-alquimia</a>
            </div>
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
import { useEffect } from "react";

function ProjectBartoDetail() {
    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
return (
      <div className="projectBartoDetail" >
        <div className="portada"></div>

        <article>

          <div>
            <h4>For</h4>
            <p>Escuela DaVinci - 2nd semester</p>

            <h4>Project</h4>
            <ul>
              <li>User Thinking Design</li>
              <li>App Design</li>
              <li>Icon design</li>
              <li>Brand design</li>
            </ul>
          </div>
          
          <div>
            <h4>Description</h4>
            <p>This design project focuses on creating an application for a coffee shop inspired by the charismatic character Bart Simpson from the TV series &quot;The Simpsons&quot; From designing the logo to selecting colors and structuring the interface, we have worked to capture Bart&apos;s irreverent and playful essence.</p>
          </div>
        </article>

        <a href="/#projects">
          <i className="bi bi-arrow-left-short"></i>
        </a>

        <div>
          <img src="./img/barto/foto-barto.jpg" alt=""/>
        </div>

        <div>
          <img src="./img/barto/barto-app-mobile.jpg" alt=""/>
        </div>

        <div>
          <img src="./img/barto/food-mobile.jpg" alt=""/>
        </div>

        <div>
          <img src="./img/barto/cart-mobile.jpg" alt=""/>
        </div>

        <div>
          <img src="./img/barto/paid-mobile.jpg" alt=""/>
        </div>

        <div>
          <img src="./img/barto/final-barto.jpg" alt=""/>
        </div>
      </div>
    );
  }

export default ProjectBartoDetail;

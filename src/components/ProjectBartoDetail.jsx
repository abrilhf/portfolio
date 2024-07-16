import { Link } from "react-router-dom";
// import { useHistory } from 'react-router-dom';


import { useEffect } from "react";

function ProjectBartoDetail() {

    useEffect(() => {
      // Desplazar la página hacia arriba al montar el componente
      window.scrollTo(0, 0);
    }, []);
    
return (
      <div className="projectBartoDetail" >
        <div className="portada">
        </div>

        <article className="grid grid-cols-2 gap-4  place-content-center h-48">

            <h2 className="underline decoration-yellow-500 text-xl">Para</h2>
            <p>Escuela DaVinci - 2do cuatrimestre</p>


            <h2 className="underline decoration-yellow-500 text-xl">Servicio</h2>
            <ul>
              <li>Diseño UX/UI</li>
              <li>Diseño de marca</li>
              <li>Diseño aplicación</li>
            </ul>


        </article>

        <Link to="/" smooth={true} duration={500}>
          <i className="bi bi-arrow-left-short"></i>
        </Link>

        <div>
          <img src="./img/barto/foto-barto.jpg" alt=""/>
        </div>

          <div className="descrip">
            <h2 className="underline decoration-yellow-500 text-2xl">Descripción</h2>
            <p>Este proyecto de diseño se centra en la creación de una aplicación para una cafetería inspirada en el carismático personaje Bart Simpson de la serie de televisión Los Simpson. Desde el diseño del logo hasta la selección de colores y la estructuración de la interfaz, hemos trabajado para capturar la esencia juvenil y divertida del personaje.</p>
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

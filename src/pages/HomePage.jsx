import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Transicion from "../components/Transicion";
import "../css/estilos.css";
import ScrollReveal from "scrollreveal";

function HomePage() {
  const h1Ref = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const h1Config = {
      origin: "top",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease"
    };
    ScrollReveal().reveal(h1Ref.current, h1Config);

    const pConfig = {
      origin: "left",
      duration: 1000,
      delay: 300,
      distance: "500px",
      scale: 1,
      easing: "ease"
    };
    ScrollReveal().reveal(pRef.current, pConfig);
  }, []);

  return (
    <div>
      <div className="home"></div>
      <section className="sobre-mi">
        <h1 ref={h1Ref}>Sobre mi</h1>

        <div className="description">
          <div ref={pRef}>
            <img src="../../img/foto-perfil-abril.png" alt="Foto de perfil curriculum Abril Hernandez Flores" />
            <p> <span className="home-icon"></span> Ranelagh, Buenos Aires, Argentina.</p>
          </div>
          <p className="me" ref={pRef}>Hola! Mi nombre es Abril Hernandez Flores, me he formado como diseñadora y desarrolladora web durante 3 años en la honorable Escuela DaVinci. Durante mi trayecto he realizado diferentes proyectos como freelance. 
          Me considero una apasionada del diseño y de la búsqueda continua de nuevos desafíos.</p>

        </div>
      </section>

      <Transicion></Transicion>

      <section className="projects">
        <article className="barto" id="barto">
          <h2>Barto APP</h2>
          <p>Diseño UX/UI & Creación de marca</p>
          <div className="boxes">
              <img src="../../img/barto/mockups-barto.png" alt="Bart Mockup Mobile" className="bartoReplace"/>
          </div>
            <Link to={"/projectbarto"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>

        <article className="lumiere">
          <h2>Lumiere</h2>
          <p>Sitio web realizado con React, Node.js & MongoDB</p>
          <div className="box">
              <img src="../../img/lumiere/lumiere-mockup.png" alt="Lumiere Mockup Mobile" />
          </div>
            <Link to={"/projectlumiere"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>

        <article className="malena">
          <h2>Vestite Conmigo</h2>
          <p>Sitio web realizado con React, Node.js & MongoDB</p>
          <div className="box">
              <img src="../../img/malena/mockup-malena.png" alt="Malena Mockup Mobile" />
          </div>
            <Link to={"/projectmalena"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>

        <article className="alquimia">
          <h2>Alquimia</h2>
          <p>Diseño de marca & sitio web realizado con Laravel & MySQL</p>
          <div className="box">
              <img src="../../img/alquimia/alquimia-mockup.png" alt="Alquimia Mockup Mobile" className="alquimiaReplace" />
          </div>
            <Link to={"/projectalquimia"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>

        <article className="tarjetas">
          <h2>Tarjetas</h2>
          <p>Diseño de marca & sitio web realizado con React & Bootstrap</p>
          <div className="box">
              <img src="../../img/tarjetas/tarjetas-mockup.png" alt="Tarjetas Mockup Mobile" />
          </div>
            <Link to={"/projecttarjetas"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>

        <article className="depily">
          <h2>Depily</h2>
          <p>Diseño de marca & sitio web realizado con React & Bootstrap</p>
          <div className="box">
              <img src="../../img/depily/depily-mockup.png" alt="Depily Mockup Mobile" />
          </div>
            <Link to={"/projectdepily"}>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
        </article>
      </section>

      <section className="contacto">
        <h2>Gracias</h2>
          <p className="text-center">¡Creemos juntos algo extraordinario!</p>

        <div className="info">
          <p><ion-icon name="call-outline"></ion-icon>+54 11 6287-1760</p>
          <a href="mailto:hernandezfloresabril1@gmail.com"><ion-icon name="mail-outline"></ion-icon>hernandezfloresabril1@gmail.com</a>
          <a href="https://github.com/abrilhf/portfolio/blob/main/src/archivos/Curr%C3%ADculum%20Vitae%20Abril%20Hernandez%20Flores.pdf" target="_blank" rel="noreferrer"><ion-icon name="document-text-outline"></ion-icon>Mi CV</a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

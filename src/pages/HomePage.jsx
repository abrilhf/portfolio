import { useEffect } from "react";
import ProjectBarto from "./ProjectBarto";
import ProjectLumiere from "./ProjectLumiere";
import ProjectMalena from "./ProjectMalena";
import ProjectAlquimia from "./ProjectAlquimia";
import Contact from "./Contact";

function HomePage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const indicators = document.querySelectorAll(".indicator");

    let currentSectionIndex = 0;

    function updateSections() {
      sections.forEach((section, index) => {
        if (index === currentSectionIndex && section && indicators[index]) {
          section.classList.add("active");
          indicators[index].classList.add("active");
        } else {
          section.classList.remove("active");
          if (indicators[index]) {
            indicators[index].classList.remove("active");
          }
        }
      });
    }

    function handleIndicatorClick(index) {
      currentSectionIndex = index;
      updateSections();
      scrollToSection(index);
    }

    // Agrega el evento click después de definir handleIndicatorClick
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => handleIndicatorClick(index));
    });

    window.onscroll = function () {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2; // Ajuste para el centro de la ventana
    
      let newSectionIndex = -1;
    
      // Encuentra la sección que está más cerca del centro de la ventana
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          newSectionIndex = index;
        }
      });
    
      if (newSectionIndex !== -2 && newSectionIndex !== currentSectionIndex) {
        currentSectionIndex = newSectionIndex;
        updateSections();
      }
    };
    
    function scrollToSection(index) {
      const section = sections[index];
      if (section) {
        const sectionTop = section.offsetTop;
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    }

    // Llamada inicial para mostrar la primera sección
    updateSections();

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <div className="indicators">
        <div className="indicator" onClick={() => handleIndicatorClick(0)}></div>
        <div className="indicator" onClick={() => handleIndicatorClick(1)}></div>
        <div className="indicator" onClick={() => handleIndicatorClick(2)}></div>
        <div className="indicator" onClick={() => handleIndicatorClick(3)}></div>
        <div className="indicator" onClick={() => handleIndicatorClick(4)}></div>
        <div className="indicator" onClick={() => handleIndicatorClick(5)}></div>
      </div>
      <section className="home section">
        <div className="mother">
          <div className="content">
            <h1>
              <span className="abril">
                I&apos;M ABRI
                <span className="letraL">L</span>
              </span>
              <span className="web">WEB</span> DESIGNER
            </h1>
            <p>
              Hello! I&apos;m Abril Hernandez Flores, a passionate web designer
              and developer based in Buenos Aires, Argentina. Over the course of
              3 years, I pursued a comprehensive education in Web Design and
              Development at DaVinci School, the first multimedia art school in
              the region. With a strong foundation in this field, I have had the
              opportunity to work on a diverse range of projects, honing my
              skills and creativity.
            </p>
            <a href="#projects">
              Get started <i className="bi bi-arrow-down-short"></i>
            </a>
          </div>
          <div className="grafica-bienvenida"></div>
        </div>
      </section>

      <section className="section" id="projects">
          <ProjectBarto></ProjectBarto>
      </section>
      <section className="section">
        <ProjectLumiere></ProjectLumiere>
      </section>
      <section className="section" id="project-malena">
        <ProjectMalena></ProjectMalena>
      </section>
      <section className="section">
        <ProjectAlquimia></ProjectAlquimia>
      </section>
      <section className="section">
        <Contact></Contact>
      </section>
    </div>
  );
}

export default HomePage;

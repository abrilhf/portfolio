document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const indicators = document.querySelectorAll(".indicator");

    let currentSectionIndex = 0;

    function updateSections() {
      sections.forEach((section, index) => {
        if (index === currentSectionIndex) {
          section.classList.add("active");
          indicators[index].classList.add("active");
        } else {
          section.classList.remove("active");
          indicators[index].classList.remove("active");
        }
      });
    }
  
    function handleIndicatorClick(index) {
      currentSectionIndex = index;
      updateSections();
      scrollToSection(index);
    }
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => handleIndicatorClick(index));
    });
  
    window.onscroll = function () {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
  
      const newSectionIndex = Math.round(scrollPosition / windowHeight);
  
      if (newSectionIndex !== currentSectionIndex) {
        currentSectionIndex = newSectionIndex;
        updateSections();
      }
    };
  
    function scrollToSection(index) {
      const section = sections[index];
      const sectionTop = section.offsetTop;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  
    // Llamada inicial para mostrar la primera sección
    updateSections();
  });
  
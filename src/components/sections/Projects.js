import React, { useContext, useRef } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { projectsData } from "../../data/projectsData";

function Projects() {
  const { language } = useContext(LanguageContext);
  const carouselRef = useRef(null);

  const content = projectsData;

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="carousel-header">
        <h2>{content[language].title}</h2>
        <div className="carousel-nav">
          <button className="nav-button" onClick={() => scrollCarousel("left")}>
            &#10094;
          </button>
          <button className="nav-button" onClick={() => scrollCarousel("right")}>
            &#10095;
          </button>
        </div>
      </div>

      <div className="projects-carousel" ref={carouselRef}>
        {content[language].projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            
            <div className="project-expanded">
              {project.image && (
                <div className="project-image">
                </div>
              )}
              <p>{project.description}</p>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                {language === "pt" ? "Ver projeto" : "View project"}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
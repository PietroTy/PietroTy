import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import { FaPython, FaCuttlefish, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaTerminal, FaPhp } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const Skills = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Skills",
      description:
        "Here are some of the technologies and languages I’ve worked with, along with my progress level.",
    },
    pt: {
      title: "Habilidades",
      description:
        "Aqui estão algumas das tecnologias e linguagens com as quais trabalhei, junto com meus níveis de progresso.",
    },
  };

  const skills = [
    { name: "Python", percentage: 90, icon: <FaPython style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "C", percentage: 85, icon: <FaCuttlefish style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "JavaScript", percentage: 80, icon: <FaJs style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "HTML", percentage: 75, icon: <FaHtml5 style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "CSS", percentage: 70, icon: <FaCss3Alt style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "TypeScript", percentage: 65, icon: <SiTypescript style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "SQL", percentage: 65, icon: <FaDatabase style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "Java", percentage: 60, icon: <FaJava style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "Shell Script", percentage: 50, icon: <FaTerminal style={{ color: "#6A4C9C", marginRight: 8 }} /> },
    { name: "PHP", percentage: 30, icon: <FaPhp style={{ color: "#6A4C9C", marginRight: 8 }} /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>{content[language].title}</h2>
      <p>{content[language].description}</p>
      <ul className="list-unstyled">
        {skills.map((skill, index) => (
          <li key={index} className="mb-4">
            <span className="skill-label" style={{ display: "flex", alignItems: "center" }}>
              {skill.icon}
              {skill.name}
              <span className="skill-percent" style={{ marginLeft: "auto" }}>{skill.percentage}%</span>
            </span>
            <div className="progress" aria-label={`${skill.name} proficiency`}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${skill.percentage}%`,
                  backgroundColor: "#6A4C9C",
                }}
                aria-valuenow={skill.percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;

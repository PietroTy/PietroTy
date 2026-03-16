import React, { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { skillsContent as content, skillsData as skills } from "../../data/skillsData";

const Skills = () => {
  const { language } = useContext(LanguageContext);

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

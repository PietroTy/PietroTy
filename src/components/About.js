import React, { useContext } from "react";
import { LanguageContext } from "../LanguageContext";
import TyChat from "./TyChat";

function About() {
  const { language } = useContext(LanguageContext);

  const content = {
    en: { title: "About Me" },
    pt: { title: "Sobre Mim" },
  };

  const aboutImages = [
    "pietro-image.jpg",
    "pietro2-image.jpg",
    "jack-image.jpg"
  ];

  return (
    <section id="about">
      <div className="about-title">
        <h2>{content[language].title}</h2>
      </div>
      <div className="about-content">
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <div className="chat-container">
            <TyChat />
          </div>
        </div>
        <div className="about-image">
          {aboutImages.map((img, i) => (
            <img
              key={i}
              src={require(`../assets/${img}`)}
              className={`${img.split("-")[0]}-image`}
              style={{ cursor: "default" }}
              alt=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
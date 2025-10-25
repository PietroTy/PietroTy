import React, { useContext, useRef } from "react";
import { LanguageContext } from "../LanguageContext";

function Projects() {
  const { language } = useContext(LanguageContext);
  const carouselRef = useRef(null);

const content = {
    en: {
      title: "Projects",
      projects: [
        {
          name: "WhatsApp Bot with Message Automation",
          description:
            "A multi-functional JavaScript bot for personal and commercial use. Its main feature is automatic responses to messages, plus commands, an AI chatbot, an automated newspaper, and games.",
          image: "/assets/whatsappbot.png",
          link: "https://github.com/PietroTy/bot-whatsapp",
        },
        {
          name: "AI Scribe (Maritaca Bot Project)",
          description:
            "A scientific research project commissioned by EV.G (Virtual Government School). It leverages LLM APIs to generate and format custom technical texts for professional use.",
          image: "/assets/maritaca.png",
          link: "https://github.com/PietroTy/bot-maritaca",
        },
        {
          name: "Discord Bot Made in JavaScript",
          description:
            "An administration and entertainment bot for Discord, using the official API. It implements a robust command system, moderation tools, and interactive games.",
          image: "/assets/discordbot.png",
          link: "https://github.com/PietroTy/bot-discord",
        },
        {
          name: "WhatsApp Group: Sticker Generator",
          description:
            "A group centered on a sticker generator, created in synergy with the WhatsApp Bot. Inspired by a project by Matheus Toniolli, it utilizes FFmpeg and multiple APIs in JavaScript.",
          image: "/assets/whatsappgroup.png",
          link: "https://chat.whatsapp.com/KAg83JlOyWSGoHLBOLwrR8",
        },
        {
          name: "Chatbot Implemented in Portfolio",
          description:
            "The portfolio where this chatbot is implemented. Developed in JavaScript and React, it focuses on intelligent design for UX, multi-device responsiveness, and a fast AI via the GPT API.",
          image: "/assets/tychat.png",
          link: "https://pietroty.github.io/PietroTy/",
        },
        {
          name: "Chub: C & Raylib Game Hub",
          description:
            "A minigame hub inspired by the projects of Prof. Dr. David Buzatto. Developed in C with Raylib, it focuses on performance, simplicity, and cohesive aesthetics.",
          image: "/assets/chub.png",
          link: "https://github.com/PietroTy/Chub",
        },
        {
          name: "PyHub: Games Made for the Terminal",
          description:
            "A Python-based game hub developed for the terminal. The project focuses on the aesthetic design of text-mode interfaces and practicing game development logic.",
          image: "/assets/pyhub.png",
          link: "https://github.com/PietroTy/PyHub",
        },
      ],
    },
    pt: {
      title: "Projetos",
      projects: [
        {
          name: "WhatsApp Bot com Automação de Mensagens",
          description:
            "Bot multifuncional em JavaScript para uso pessoal e comercial. Seu destaque é o envio de respostas automáticas a mensagens, além de comandos, IA, jornal automático e jogos.",
          image: "/assets/whatsappbot.png",
          link: "https://github.com/PietroTy/bot-whatsapp",
        },
        {
          name: "Projeto Escriba com IA (Bot Maritaca)",
          description:
            "Projeto de pesquisa científica encomendado pela EV.G (Escola Virtual do Governo). Utiliza APIs de LLMs para gerar e formatar textos técnicos sob medida para uso profissional.",
          image: "/assets/maritaca.png",
          link: "https://github.com/PietroTy/bot-maritaca",
        },
        {
          name: "Bot de Discord Feito em JavaScript",
          description:
            "Bot de administração e entretenimento para Discord, usando a API oficial. Implementa um sistema robusto de comandos, ferramentas de moderação e jogos interativos.",
          image: "/assets/discordbot.png",
          link: "https://github.com/PietroTy/bot-discord",
        },
        {
          name: "Grupo de WhatsApp: Gerador de Figurinhas",
          description:
            "Grupo focado em um gerador de figurinhas, criado em sinergia com o Bot de WhatsApp. Inspirado em um projeto de Matheus Toniolli, utiliza FFmpeg e múltiplas APIs em JavaScript.",
          image: "/assets/whatsappgroup.png",
          link: "https://chat.whatsapp.com/KAg83JlOyWSGoHLBOLwrR8",
        },
        {
          name: "Chatbot Implementado em Portfólio",
          description:
            "O portfólio onde este chatbot está implementado. Desenvolvido em JavaScript e React, foca em design inteligente para UX, responsividade multi-dispositivo e uma IA rápida via API do GPT.",
          image: "/assets/tychat.png",
          link: "https://pietroty.github.io/PietroTy/",
        },
        {
          name: "Chub: Hub de Jogos em C e Raylib",
          description:
            "Hub de minijogos inspirado nos projetos do Prof. Dr. David Buzatto. Desenvolvido em C com Raylib, foca em performance, simplicidade e uma estética coesa.",
          image: "/assets/chub.png",
          link: "https://github.com/PietroTy/Chub",
        },
        {
          name: "PyHub: Jogos Feitos para o Terminal",
          description:
            "Hub de jogos em Python desenvolvido para terminal. O projeto foca no design estético de interfaces em modo texto e na prática de lógica de programação de jogos.",
          image: "/assets/pyhub.png",
          link: "https://github.com/PietroTy/PyHub",
        },
      ],
    },
  };

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
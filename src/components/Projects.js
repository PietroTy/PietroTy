import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';

function Projects() {
    const { language } = useContext(LanguageContext);

    const content = {
        en: {
            title: "Projects",
            projects: [
                {
                    name: "Chub",
                    description: "A Hub for simple minigames developed entirely using C and Raylib.",
                    // image: "chub-image.jpg",
                    // imageHover: "chub-image-hover.jpg",
                    // link: "https://example.com/chub"
                },
                {
                    name: "Portfolio",
                    description: "This site that you are in! It includes integration with a personal AI chatbot built with Together.ai.",
                    // image: "portfolio-image.jpg",
                    // imageHover: "portfolio-image-hover.jpg",
                    // link: "https://example.com/portfolio"
                },
                {
                    name: "WhatsApp Bot",
                    description: "A conversational and sticker-generation bot built using Node.js, whatsapp-web.js and AI API integration.",
                    // image: "whatsappbot-image.jpg",
                    // imageHover: "whatsappbot-image-hover.jpg",
                    // link: "https://example.com/whatsappbot"
                },
                {
                    name: "Minecraft Server",
                    description: "Custom server setup with automated configuration, plugins, and support scripts for hosting games with friends.",
                    // image: "minecraft-image.jpg",
                    // imageHover: "minecraft-image-hover.jpg",
                    // link: "https://example.com/minecraft"
                },
                {
                    name: "Erium",
                    description: "A web app for managing luggage during air travel, including categorization and planning tools.",
                    // image: "erium-image.jpg",
                    // imageHover: "erium-image-hover.jpg",
                    // link: "https://example.com/erium"
                }
            ]
        },
        pt: {
            title: "Projetos",
            projects: [
                {
                    name: "Chub",
                    description: "Um Hub para minijogos simples desenvolvido inteiramente em C e Raylib.",
                    // image: "chub-image.jpg",
                    // imageHover: "chub-image-hover.jpg",
                    // link: "https://example.com/chub"
                },
                {
                    name: "Portfólio",
                    description: "Esse site que você está! Inclui integração com um chatbot de IA próprio construído com a Together.ai.",
                    // image: "portfolio-image.jpg",
                    // imageHover: "portfolio-image-hover.jpg",
                    // link: "https://example.com/portfolio"
                },
                {
                    name: "Bot de WhatsApp",
                    description: "Bot de conversa e geração de figurinhas feito com Node.js, whatsapp-web.js e integração com API de IA.",
                    // image: "whatsappbot-image.jpg",
                    // imageHover: "whatsappbot-image-hover.jpg",
                    // link: "https://example.com/whatsappbot"
                },
                {
                    name: "Servidor de Minecraft",
                    description: "Servidor customizado com configuração automatizada, plugins e scripts de suporte para jogar com amigos.",
                    // image: "minecraft-image.jpg",
                    // imageHover: "minecraft-image-hover.jpg",
                    // link: "https://example.com/minecraft"
                },
                {
                    name: "Erium",
                    description: "Site de gerenciamento de bagagens para viagens aéreas, com categorização e ferramentas de planejamento.",
                    // image: "erium-image.jpg",
                    // imageHover: "erium-image-hover.jpg",
                    // link: "https://example.com/erium"
                }
            ]
        }
    };

    return (
        <section id="projects" className="projects-section my-5">
            <h2 className="text-light">{content[language].title}</h2>
            <ul>
                {content[language].projects.map((project, index) => (
                    <li key={index} className="project-card">
                        {/* Placeholder for future hoverable image */}
                        {/* <div className="project-image">
                            <img
                                src={require(`../assets/${project.image}`)}
                                className="project-main-image"
                                alt=""
                                onMouseOver={e => e.currentTarget.src = require(`../assets/${project.imageHover}`)}
                                onMouseOut={e => e.currentTarget.src = require(`../assets/${project.image}`)}
                            />
                        </div> */}
                        {/* Placeholder for future link on title */}
                        {/* {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <h3>{project.name}</h3>
                            </a>
                        ) : ( */}
                            <h3>{project.name}</h3>
                        {/* )} */}
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projects;
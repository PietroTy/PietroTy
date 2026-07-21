import React from "react";
import { CONTACT_LINKS } from "../../data/contact";
import SectionHeader from "../common/SectionHeader";
import { FiMail, FiBriefcase, FiTerminal, FiMapPin, FiClock } from "react-icons/fi";
import { SiWhatsapp, SiLinkedin, SiGithub, SiInstagram, SiSpotify } from "react-icons/si";

export default function ContactPage({ lang }) {
  const pt = lang === "pt";

  // Configuration for each contact channel - Unified Purple/Violet Palette
  const contactConfigMap = {
    "E-mail": { icon: FiMail, color: "#c084fc" },
    "WhatsApp": { icon: SiWhatsapp, color: "#a78bfa" },
    "LinkedIn": { icon: SiLinkedin, color: "#8b5cf6" },
    "GitHub": { icon: SiGithub, color: "#7c3aed" },
    "Instagram": { icon: SiInstagram, color: "#6d28d9" },
    "Portfólio": { icon: FiBriefcase, color: "#5b21b6" },
    "Chub": { icon: FiTerminal, color: "#4c1d95" },
    "Spotify": { icon: SiSpotify, color: "#a78bfa" }
  };

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag={pt ? "contato" : "contact"}
          title={
            pt ? (
              <>Bora <em>conversar</em></>
            ) : (
              <>Let's <em>connect</em></>
            )
          }
        />

        <div className="contact-layout">
          {/* Left Column: Context / Pitch */}
          <div className="contact-sidebar">
            <p>
              {pt
                ? "Tem uma ideia de projeto, precisa de uma consultoria de dados para sua empresa ou quer automatizar processos com Inteligência Artificial? Fique à vontade para me chamar em qualquer um dos canais ao lado."
                : "Have a project idea, need data consulting for your business, or want to automate processes using Artificial Intelligence? Feel free to reach out via any of the channels."}
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <FiClock className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Resposta rápida" : "Fast response"}</strong>
                  <br />
                  <span>{pt ? "Retorno em até 24 horas úteis." : "Replies within 24 business hours."}</span>
                </div>
              </div>

              <div className="contact-meta-item">
                <FiMapPin className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Localização" : "Location"}</strong>
                  <br />
                  <span>São Paulo - SP ({pt ? "Remoto ou Híbrido" : "Remote or Hybrid"})</span>
                </div>
              </div>

              <div className="contact-meta-item">
                <FiBriefcase className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Serviços e Contratos" : "Services & Contracts"}</strong>
                  <br />
                  <span>{pt ? "Disponível para consultoria e contratos PJ." : "Available for consulting and B2B contracts."}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Links Grid */}
          <div className="contact-grid">
            {CONTACT_LINKS.map((l) => {
              const config = contactConfigMap[l.namePt] || { icon: FiMail, color: "#c084fc" };
              const Icon = config.icon;
              return (
                <a
                  key={l.nameEn}
                  className="clink"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ "--contact-color": config.color }}
                >
                  <div className="clink-icon-wrapper">
                    <Icon className="clink-icon" />
                  </div>
                  <div className="clink-info">
                    <span className="clink-name">{pt ? l.namePt : l.nameEn}</span>
                    <span className="clink-handle">{pt ? l.handlePt : l.handleEn}</span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

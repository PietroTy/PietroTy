import React from "react";
import { CONTACT_LINKS } from "../../data/contact";
import SectionHeader from "../common/SectionHeader";

export default function ContactPage({ lang }) {
  const pt = lang === "pt";

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
          sub={
            pt
              ? "Consultor em Desenvolvimento de Dados, Full-Stack Developer, Engenheiro de Dados e Pesquisador em IA. Aberto a projetos e colaborações corporativas."
              : "Data Development Consultant, Full-Stack Developer, Data Engineer, and AI Researcher. Open to projects and corporate collaborations."
          }
        />
        <div className="contact-grid">
          {CONTACT_LINKS.map((l) => (
            <a key={l.nameEn} className="clink" href={l.url} target="_blank" rel="noreferrer">
              <span className="clink-name">{pt ? l.namePt : l.nameEn}</span>
              <span className="clink-handle">{pt ? l.handlePt : l.handleEn}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

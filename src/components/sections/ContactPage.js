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
              ? "Full-Stack Developer, AI Researcher & Eng. de Dados. Aberto a projetos, automações e colaborações corporativas."
              : "Full-Stack Developer, AI Researcher & Data Eng. Open to projects, automations, and corporate collaborations."
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

import React, { useState } from "react";
import { PROJECTS } from "../../data/projects";
import SectionHeader from "../common/SectionHeader";
import chubImg from "../../assets/chub.png";
import pitcraftImg from "../../assets/home_screenshot_1.jpg";
import appLogoClean from "../../assets/app_logo_clean.png";
import magiktarotImg from "../../assets/magik_tarot.png";
import stickersbotImg from "../../assets/stickers_bot.png";
import gameOfDronesImg from "../../assets/game_of_drones.png";
import bleachcoImg from "../../assets/bleach_co_logo.png";
import agentTyImg from "../../assets/agent_ty.png";

const getProjectPlaceholder = (color) => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="350" height="180" viewBox="0 0 350 180"><rect width="100%" height="100%" fill="%230c081e"/><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="${encodeURIComponent(color)}20" stroke-width="1"/></pattern><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${encodeURIComponent(color)}35"/><stop offset="100%" stop-color="%230c081e"/></linearGradient></defs><rect width="100%" height="100%" fill="url(%23grid)"/><rect width="100%" height="100%" fill="url(%23grad)"/><circle cx="175" cy="90" r="45" fill="none" stroke="${encodeURIComponent(color)}30" stroke-width="1.5" stroke-dasharray="5,5"/><circle cx="175" cy="90" r="28" fill="none" stroke="${encodeURIComponent(color)}b3" stroke-width="2"/></svg>`;
};

export default function ProjectsPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag={pt ? "projetos" : "projects"}
          title={
            pt ? (
              <>O que eu <em>construí</em></>
            ) : (
              <>What I've <em>built</em></>
            )
          }
          sub={pt ? "Clique em qualquer projeto para expandir e ver detalhes." : "Click any project to expand and view details."}
        />

        <div className="projects-grid">
          {PROJECTS.map((p) => {
            const isOpen = openId === p.id;
            return (
              <div
                key={p.id}
                data-id={p.id}
                className={`pcard${isOpen ? " open" : ""}${p.featured ? " featured" : ""}`}
                style={{ "--card-glow": `${p.color}20` }}
                onClick={() => toggleOpen(p.id)}
              >
                <div className="pcard-image-wrapper">
                  <img
                    src={
                      p.id === "chub"
                        ? chubImg
                        : p.id === "pitcraft"
                        ? pitcraftImg
                        : p.id === "laplayer"
                        ? appLogoClean
                        : p.id === "magik-tarot"
                        ? magiktarotImg
                        : p.id === "bot-figurinhas"
                        ? stickersbotImg
                        : p.id === "drone-autonomo"
                        ? gameOfDronesImg
                        : p.id === "bleach-co"
                        ? bleachcoImg
                        : p.id === "portfolio"
                        ? agentTyImg
                        : getProjectPlaceholder(p.color)
                    }
                    alt={p.name}
                    className="pcard-image"
                  />
                </div>
                <div className="pcard-header">
                  <div className="pcard-name">{p.name}</div>
                  <div className="pcard-tags">
                    {p.tags.slice(0, 3).map((t) => (
                      <span key={t} className="chip chip-p">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pcard-expand-wrapper">
                  <div className="pcard-tagline">{pt ? p.taglinePt : p.taglineEn}</div>
                  <p className="pcard-desc">{pt ? p.descPt : p.descEn}</p>
                  
                  <div className="pcard-actions" onClick={(e) => e.stopPropagation()}>
                    {p.id === "pitcraft" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("pitcraft")}
                      >
                        {pt ? "Acessar Hub" : "Access Hub"} &rarr;
                      </button>
                    ) : p.id === "laplayer" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("laplayer")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "bot-figurinhas" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("stickerbot")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "whatsapp-bot" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("whatsappbot")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "drone-autonomo" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("gameofdrones")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "etl-cnpj" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("etl")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "discord-bot" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("discordbot")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : p.id === "portfolio" ? (
                      <button
                        className="btn btn-fill btn-sm"
                        onClick={() => setPage("portfolio")}
                      >
                        {pt ? "Ver Detalhes" : "View Details"} &rarr;
                      </button>
                    ) : (
                      p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-fill btn-sm"
                        >
                          {pt ? "Acessar Projeto" : "Visit Project"} &rarr;
                        </a>
                      )
                    )}
                    {p.apk && p.id !== "laplayer" && (
                      <a
                        href={p.apk}
                        download
                        className="btn btn-outline btn-sm"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "13px", height: "13px" }}>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span>{pt ? "Baixar APK" : "Download APK"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

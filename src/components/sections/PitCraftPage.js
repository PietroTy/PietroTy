import React, { useState } from "react";
import homeScreenshot1 from "../../assets/pitcraft_screenshot_1.jpg";
import homeScreenshot2 from "../../assets/pitcraft_screenshot_2.jpg";
import orespawn1 from "../../assets/orespawn_screenshot_1.jpg";
import orespawn2 from "../../assets/orespawn_screenshot_2.jpg";
import orespawn3 from "../../assets/orespawn_screenshot_3.png";
import pitcraftLogo from "../../assets/pitcraft_logo.png";

const INSTANCES = [
  {
    id: "orespawn",
    name: "OreSpawn Season",
    tag: "ORE",
    version: "1.7.10",
    loader: "Forge",
    status: "closed",
    statusTextPt: "Fechado",
    statusTextEn: "Closed",
    modsCount: 23,
    descriptionPt: "A primeira grande temporada de aventura. Sobrevivência hardcore repleta de chefes colossais, masmorras misteriosas, pets funcionais e armas lendárias.",
    descriptionEn: "The first major adventure season. Hardcore survival filled with colossal bosses, mysterious dungeons, functional pets, and legendary weapons.",
    modsLink: "https://drive.google.com/drive/u/1/folders/1IRBQ9uNuiTkICuKvzyfgUjGemQ5gFrBn",
  },
  {
    id: "aether",
    name: "Aether & Twilight",
    tag: "AET",
    version: "1.21.1",
    loader: "NeoForge",
    status: "launching",
    statusTextPt: "Estreia em 11 de Julho",
    statusTextEn: "Starts July 11th",
    modsCount: 24,
    descriptionPt: "Exploração de duas dimensões incríveis: os reinos flutuantes do Aether e a mística floresta do crepúsculo no Twilight Forest.",
    descriptionEn: "Exploration of two incredible dimensions: the floating realms of the Aether and the mystical twilight forest in Twilight Forest.",
    modsLink: "https://drive.google.com/drive/u/1/folders/1izohzR-etTH2K6xLLPvd1Zpo_wOsXdVT",
  },
  {
    id: "vanilla",
    name: "Vanilão D'Cria",
    tag: "VAN",
    version: "1.21.1",
    loader: "Spigot",
    status: "soon",
    statusTextPt: "Em breve",
    statusTextEn: "Soon",
    modsCount: 0,
    descriptionPt: "A experiência pura do Minecraft vanilla rodando em Spigot com suporte a crossplay (Java e Bedrock) via Geyser, ideal para jogar em qualquer plataforma.",
    descriptionEn: "The pure vanilla Minecraft experience running on Spigot with crossplay support (Java & Bedrock) via Geyser, ideal for playing on any platform.",
    modsLink: "#",
  },
  {
    id: "twc",
    name: "The Walking Craft",
    tag: "TWC",
    version: "1.16.5",
    loader: "Forge",
    status: "soon",
    statusTextPt: "Em breve",
    statusTextEn: "Soon",
    modsCount: 0,
    descriptionPt: "Sobrevivência apocalíptica extrema. O mundo está infestado por hordas de mortos-vivos inteligentes. Coopere ou pereça.",
    descriptionEn: "Extreme apocalyptical survival. The world is infested by hordes of intelligent undead. Cooperate or perish.",
    modsLink: "#",
  },
  {
    id: "rlcraft",
    name: "RLCraft Classic",
    tag: "RLC",
    version: "1.12.2",
    loader: "Forge",
    status: "soon",
    statusTextPt: "Em breve",
    statusTextEn: "Soon",
    modsCount: 0,
    descriptionPt: "O modpack de sobrevivência mais cruel e realista já feito. Dragões, climas extremos, sede e mecânicas brutais de combate.",
    descriptionEn: "The most unforgiving and realistic survival modpack ever made. Dragons, extreme weather, thirst, and brutal combat mechanics.",
    modsLink: "#",
  },
  {
    id: "avaritia",
    name: "Avaritia Project",
    tag: "AVA",
    version: "1.7.10",
    loader: "Forge",
    status: "soon",
    statusTextPt: "Em breve",
    statusTextEn: "Soon",
    modsCount: 0,
    descriptionPt: "Desafio focado em crafting extremo de fim de jogo. Crie ferramentas e armaduras divinas com materiais ultra complexos.",
    descriptionEn: "Challenge focused on extreme end-game crafting. Create god-like tools and armor with ultra-complex materials.",
    modsLink: "#",
  }
];

export default function PitCraftPage({
  lang,
  subPage = "hub",
  setSubPage,
  selectedSeasonId = "aether",
  setSelectedSeasonId
}) {
  const pt = lang === "pt";
  const [copied, setCopied] = useState(false);
  const ipAddress = "pitcraft.duckdns.org:13377";

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ipAddress)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy using navigator.clipboard: ", err);
          fallbackCopyText(ipAddress);
        });
    } else {
      fallbackCopyText(ipAddress);
    }
  };

  const fallbackCopyText = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.error("Fallback: Copying text command was unsuccessful");
      }
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
  };

  const getStatusClass = (status) => {
    if (status === "closed") return "status-closed";
    if (status === "launching") return "status-launching";
    return "status-soon";
  };

  return (
    <div className="page pitcraft-page">
      <div className="container">

        {subPage === "hub" ? (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-tag">Minecraft Hub</div>
                <div className="hero-logo-container">
                  <img src={pitcraftLogo} alt="PitCraft Logo" className="hero-logo" />
                </div>
                <p className="hero-subtitle">
                  {pt ? (
                    "Alterne entre temporadas de mods e vanilla em segundos. Ping otimizado, sincronização inteligente de pacotes e chat de voz nativo."
                  ) : (
                    "Switch between modded and vanilla seasons in seconds. Optimized ping, smart packet synchronization, and native voice chat."
                  )}
                </p>

                {/* Click to Copy IP */}
                <div className="ip-box" onClick={handleCopy} title={pt ? "Clique para copiar o IP do servidor" : "Click to copy server IP"}>
                  <div className="ip-details">
                    <span className="ip-label">{pt ? "Endereço IP de Conexão" : "Connection IP Address"}</span>
                    <span className="ip-address">{ipAddress}</span>
                  </div>
                  <button className="copy-icon" type="button" style={copied ? { borderColor: "var(--p2)", color: "var(--p3)", background: "rgba(124,58,237,0.06)" } : {}}>
                    {copied ? (pt ? "Copiado!" : "Copied!") : (pt ? "Copiar" : "Copy")}
                  </button>
                </div>
              </div>

              <div className="hero-image-container">
                <img src={homeScreenshot2} alt="Portal do Fim" className="hero-image" />
              </div>
            </section>

            {/* Status Bar */}
            <div className="status-bar">
              <div className="status-left">
                <div className="status-title">
                  {pt ? "Próxima temporada:" : "Next season:"} <span className="status-server-name">Aether & Twilight ({pt ? "Estreia em 11 de Julho" : "Starts July 11th"})</span>
                </div>
              </div>
              <div className="status-players">
                {pt ? "Porta:" : "Port:"} <strong>13377</strong>
              </div>
            </div>

            {/* Instâncias Grid */}
            <section id="instances" className="instances-section">
              <div className="section-header">
                <div className="section-tag">{pt ? "Temporadas" : "Seasons"}</div>
                <h2 className="section-title">{pt ? "Instâncias do Servidor" : "Server Instances"}</h2>
                <p className="section-subtitle">
                  {pt ? "Todos os servidores compartilham o mesmo IP base, alternando as portas de conexão." : "All servers share the same base IP, switching connection ports."}
                </p>
              </div>

              <div className="instances-grid">
                {INSTANCES.map((inst) => (
                  <div 
                    key={inst.id} 
                    className="instance-card"
                    onClick={() => {
                      setSelectedSeasonId(inst.id);
                      setSubPage("temporadas");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="instance-card-header" style={{ justifyContent: "flex-end" }}>
                      <span className={`season-status ${getStatusClass(inst.status)}`}>
                        {pt ? inst.statusTextPt : inst.statusTextEn}
                      </span>
                    </div>
                    <div>
                      <h3 className="instance-title">{inst.name}</h3>
                      <div className="instance-meta">
                        <span className="meta-tag version">v{inst.version}</span>
                        <span className="meta-tag loader">{inst.loader}</span>
                      </div>
                    </div>
                    <p className="instance-description">{pt ? inst.descriptionPt : inst.descriptionEn}</p>
                    
                    {/* Mods link button */}
                    {inst.modsLink && inst.modsLink !== "#" && (
                      <div>
                        <a href={inst.modsLink} className="btn-mods-link" onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
                          [ {pt ? "Baixar Mods" : "Download Mods"} ]
                        </a>
                      </div>
                    )}


                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features-section">
              <div className="feature-item">
                <div className="feature-icon-wrapper">{"// AUDIO"}</div>
                <h3 className="feature-title">{pt ? "Voz por Proximidade" : "Proximity Voice"}</h3>
                <p className="feature-description">
                  {pt ? "Comunicação integrada via Gliby's Voice Chat (1.7.10) ou Simple Voice Chat (outras versões) rodando diretamente na porta 13377 UDP." : "Integrated communication via Gliby's Voice Chat (1.7.10) or Simple Voice Chat (other versions) running directly on UDP port 13377."}
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">{"// MODS"}</div>
                <h3 className="feature-title">{pt ? "Gerenciador de Mods" : "Mod Manager"}</h3>
                <p className="feature-description">
                  {pt ? "Sincronização centralizada e dupla de mods na pasta global /mods do servidor. Arquivos limpos e padronizados." : "Centralized and dual mod synchronization in the server's global /mods folder. Clean and standardized files."}
                </p>
              </div>

              <div className="feature-item">
                <div className="feature-icon-wrapper">{"// SAVE"}</div>
                <h3 className="feature-title">{pt ? "Backups de Segurança" : "Safety Backups"}</h3>
                <p className="feature-description">
                  {pt ? "Backups diários e semanais compactados. Proteção total contra perda de progresso, mapas e itens do jogador." : "Compressed daily and weekly backups. Full protection against progress loss, maps, and player items."}
                </p>
              </div>
            </section>

            {/* Bottom Full-Width Image */}
            <div className="bottom-gallery-section">
              <img src={homeScreenshot1} alt="Comunidade PitCraft" className="bottom-gallery-image" />
            </div>

            {/* Collaborator Credit */}
            <div style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              paddingBottom: "3rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.6rem",
              opacity: 0.75,
              fontFamily: "var(--mono)",
              fontSize: "0.85rem",
              color: "var(--muted2)",
              letterSpacing: "0.04em",
            }}>
              <span>{pt ? "Com apoio de" : "With support from"}</span>
              <a
                href="https://github.com/FernandoDacanal"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "var(--p3)",
                  textDecoration: "none",
                  fontWeight: 600,
                  transition: "color 0.2s",
                }}
                onMouseOver={e => e.target.style.color = "var(--p2)"}
                onMouseOut={e => e.target.style.color = "var(--p3)"}
              >
                FernandoDG
              </a>
            </div>
          </>
        ) : (
          /* Dedicated Seasons Detail Page */
          <section className="pit-page">


            <div className="pit-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div className="section-tag">{pt ? "Histórico" : "History"}</div>
                <h2 className="section-title">{pt ? "Temporadas" : "Seasons"}</h2>
                <p className="section-subtitle">
                  {pt ? "Acompanhe as fases ativas, encerradas e os próximos lançamentos do PitCraft." : "Follow active, closed, and upcoming PitCraft releases."}
                </p>
              </div>
              <div className="pit-header-logo-container">
                <img src={pitcraftLogo} alt="PitCraft Logo" className="pit-header-logo" />
              </div>
            </div>

            <div className="season-tabs-container">
              {/* Tab Content Box */}
              {(() => {
                const inst = INSTANCES.find(i => i.id === selectedSeasonId) || INSTANCES[0];
                return (
                  <div className="season-tab-content" style={{ borderTopColor: "var(--border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                      <div>
                        <h3 className="instance-title" style={{ fontSize: "1.6rem", margin: 0 }}>{inst.name}</h3>
                        <div className="instance-meta" style={{ marginTop: "0.4rem" }}>
                          <span className="meta-tag version">v{inst.version}</span>
                          <span className="meta-tag loader">{inst.loader}</span>
                        </div>
                      </div>
                      <span className={`season-status ${getStatusClass(inst.status)}`}>
                        {pt ? inst.statusTextPt : inst.statusTextEn}
                      </span>
                    </div>

                    <p className="pit-bio" style={{ marginTop: "1.5rem", fontSize: "0.88rem", lineHeight: "1.8" }}>
                      {pt ? inst.descriptionPt : inst.descriptionEn}
                    </p>

                    <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--muted)" }}>
                      {inst.modsCount > 0 ? (
                        <span>{pt ? "Quantidade de mods:" : "Amount of mods:"} <strong>{inst.modsCount} {pt ? "arquivos .jar" : ".jar files"}</strong></span>
                      ) : (
                        <span>{pt ? "Fase de desenvolvimento e testes de estabilidade." : "Development and stability testing stage."}</span>
                      )}
                    </div>

                    {/* Download mods button for specific season page */}
                    {inst.modsLink && inst.modsLink !== "#" && (
                      <div style={{ marginTop: "1.2rem" }}>
                        <a href={inst.modsLink} className="btn-mods-link" target="_blank" rel="noreferrer">
                          [ {pt ? "Acessar Mods no Drive" : "Access Mods on Drive"} ]
                        </a>
                      </div>
                    )}

                    {/* Render Gallery specifically for OreSpawn */}
                    {inst.id === "orespawn" && (
                      <div className="orespawn-gallery">
                        <div className="gallery-item">
                          <img src={orespawn1} alt="Gameplay OreSpawn 1" className="gallery-img" />
                        </div>
                        <div className="gallery-item">
                          <img src={orespawn2} alt="Gameplay OreSpawn 2" className="gallery-img" />
                        </div>
                        <div className="gallery-item">
                          <img src={orespawn3} alt="Gameplay OreSpawn 3" className="gallery-img" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

import React, { useState, useRef } from "react";
import homeScreenshot1 from "../../assets/home_screenshot_1.jpg";
import homeScreenshot2 from "../../assets/home_screenshot_2.jpg";
import orespawn1 from "../../assets/orespawn_1.jpg";
import orespawn2 from "../../assets/orespawn_2.jpg";
import orespawn3 from "../../assets/orespawn_3.png";

const INSTANCES = [
  {
    id: "orespawn",
    name: "OreSpawn Season",
    tag: "ORE",
    version: "1.7.10",
    loader: "Forge",
    status: "closed",
    statusText: "Fechado",
    modsCount: 23,
    description: "A primeira grande temporada de aventura. Sobrevivência hardcore repleta de chefes colossais, masmorras misteriosas, pets funcionais e armas lendárias.",
    modsLink: "#",
  },
  {
    id: "aether",
    name: "Aether & Twilight",
    tag: "AET",
    version: "1.21.1",
    loader: "NeoForge",
    status: "launching",
    statusText: "Estreia em 10 de Julho",
    modsCount: 0,
    description: "Exploração de duas dimensões incríveis: os reinos flutuantes do Aether e a mística floresta do crepúsculo no Twilight Forest.",
    modsLink: "#",
  },
  {
    id: "vanilla",
    name: "Vanilão D'Cria",
    tag: "VAN",
    version: "1.21.1",
    loader: "Fabric",
    status: "soon",
    statusText: "Em breve",
    modsCount: 0,
    description: "A experiência pura do Minecraft com melhorias de otimização gráfica, ideal para construções tranquilas e gameplay clássico.",
    modsLink: "#",
  },
  {
    id: "twc",
    name: "TWC (The Walking Craft)",
    tag: "TWC",
    version: "1.16.5",
    loader: "Forge",
    status: "soon",
    statusText: "Em breve",
    modsCount: 0,
    description: "Sobrevivência apocalíptica extrema. O mundo está infestado por hordas de mortos-vivos inteligentes. Coopere ou pereça.",
    modsLink: "#",
  },
  {
    id: "rlcraft",
    name: "RLCraft Classic",
    tag: "RLC",
    version: "1.12.2",
    loader: "Forge",
    status: "soon",
    statusText: "Em breve",
    modsCount: 0,
    description: "O modpack de sobrevivência mais cruel e realista já feito. Dragões, climas extremos, sede e mecânicas brutais de combate.",
    modsLink: "#",
  },
  {
    id: "avaritia",
    name: "Avaritia Project",
    tag: "AVA",
    version: "1.7.10",
    loader: "Forge",
    status: "soon",
    statusText: "Em breve",
    modsCount: 0,
    description: "Desafio focado em crafting extremo de fim de jogo. Crie ferramentas e armaduras divinas com materiais ultra complexos.",
    modsLink: "#",
  }
];

export default function PitCraftPage({ lang }) {
  const pt = lang === "pt";
  const [subPage, setSubPage] = useState("hub"); // "hub", "temporadas", "pit"
  const [selectedSeasonId, setSelectedSeasonId] = useState("aether");
  const [copied, setCopied] = useState(false);
  const ipAddress = "pitcraft.duckdns.org:13377";
  const tabsRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(ipAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScroll = (scrollOffset) => {
    if (tabsRef.current) {
      tabsRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  const getStatusClass = (status) => {
    if (status === "closed") return "status-closed";
    if (status === "launching") return "status-launching";
    return "status-soon";
  };

  return (
    <div className="page pitcraft-page">
      <div className="container">
        
        {/* Sub-Navigation inside the page (replaces the main fixed navbar for PitCraft internal navigation) */}
        <div style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginBottom: "2.5rem",
          borderBottom: "1px dashed var(--border)",
          paddingBottom: "1.2rem",
          flexWrap: "wrap"
        }}>
          <button
            className={`btn ${subPage === "hub" ? "btn-fill" : "btn-ghost"}`}
            onClick={() => setSubPage("hub")}
          >
            {pt ? "Servidores" : "Servers"}
          </button>
          <button
            className={`btn ${subPage === "temporadas" ? "btn-fill" : "btn-ghost"}`}
            onClick={() => setSubPage("temporadas")}
          >
            {pt ? "Temporadas" : "Seasons"}
          </button>
          <button
            className={`btn ${subPage === "pit" ? "btn-fill" : "btn-ghost"}`}
            onClick={() => setSubPage("pit")}
          >
            {pt ? "Criadores" : "Creators"}
          </button>
        </div>

        {subPage === "hub" ? (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="hero-content">
                <div className="hero-tag">Minecraft Hub</div>
                <h1 className="hero-title">
                  Central de <br />
                  <span className="gradient-text">Minecraft Servers</span>
                </h1>
                <p className="hero-subtitle">
                  Alterne entre temporadas de mods e vanilla em segundos. Ping otimizado, sincronização inteligente de pacotes e chat de voz nativo.
                </p>

                {/* Click to Copy IP */}
                <div className="ip-box" onClick={handleCopy} title={pt ? "Clique para copiar o IP do servidor" : "Click to copy server IP"}>
                  <div className="ip-details">
                    <span className="ip-label">{pt ? "Endereço IP de Conexão" : "Connection IP Address"}</span>
                    <span className="ip-address">{ipAddress}</span>
                  </div>
                  <button className="copy-icon">
                    {copied ? (
                      <span className="copied-tooltip">{pt ? "Copiado" : "Copied"}</span>
                    ) : (
                      <span>{pt ? "Copiar" : "Copy"}</span>
                    )}
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
                <div className="status-indicator" style={{ backgroundColor: "#60a5fa", boxShadow: "0 0 10px #60a5fa" }}></div>
                <div className="status-title">
                  {pt ? "Próxima temporada:" : "Next season:"} <span className="status-server-name">Aether & Twilight ({pt ? "Estreia em 10 de Julho" : "Starts July 10th"})</span>
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
                        {inst.statusText}
                      </span>
                    </div>
                    <div>
                      <h3 className="instance-title">{inst.name}</h3>
                      <div className="instance-meta">
                        <span className="meta-tag version">v{inst.version}</span>
                        <span className="meta-tag loader">{inst.loader}</span>
                      </div>
                    </div>
                    <p className="instance-description">{inst.description}</p>
                    
                    {/* Mods link button */}
                    <div>
                      <a href={inst.modsLink} className="btn-mods-link" onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer">
                        [ {pt ? "Baixar Mods" : "Download Mods"} ]
                      </a>
                    </div>

                    <div className="instance-footer">
                      {inst.modsCount > 0 ? (
                        <span className="mods-count">{pt ? "Mods:" : "Mods:"} <strong>{inst.modsCount} jars</strong></span>
                      ) : (
                        <span className="mods-count">{pt ? "Fase de Setup" : "Setup Stage"}</span>
                      )}
                      <span className="status-tag inactive">
                        {inst.status === "launching" ? (pt ? "Estreia" : "Debut") : inst.status === "closed" ? (pt ? "Fechado" : "Closed") : (pt ? "Em breve" : "Soon")}
                      </span>
                    </div>
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
          </>
        ) : subPage === "temporadas" ? (
          /* Dedicated Seasons Page */
          <section className="pit-page">
            <div className="pit-header">
              <div className="section-tag">{pt ? "Histórico" : "History"}</div>
              <h2 className="section-title">{pt ? "Temporadas" : "Seasons"}</h2>
              <p className="section-subtitle">
                {pt ? "Acompanhe as fases ativas, encerradas e os próximos lançamentos do PitCraft." : "Follow active, closed, and upcoming PitCraft releases."}
              </p>
            </div>

            {/* Folder Tabs Structure with scroll arrows */}
            <div className="season-tabs-container">
              <div className="tabs-nav-wrapper">
                <button className="scroll-arrow-btn" onClick={() => handleScroll(-150)} title={pt ? "Anterior" : "Previous"}>&lt;</button>
                <div className="season-tabs" ref={tabsRef}>
                  {INSTANCES.map((inst) => (
                    <button
                      key={inst.id}
                      className={`season-tab-btn ${selectedSeasonId === inst.id ? "active" : ""}`}
                      onClick={() => setSelectedSeasonId(inst.id)}
                    >
                      {inst.name}
                    </button>
                  ))}
                </div>
                <button className="scroll-arrow-btn" onClick={() => handleScroll(150)} title={pt ? "Próxima" : "Next"}>&gt;</button>
              </div>

              {/* Tab Content Box */}
              {(() => {
                const inst = INSTANCES.find(i => i.id === selectedSeasonId) || INSTANCES[0];
                return (
                  <div className="season-tab-content">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                      <div>
                        <h3 className="instance-title" style={{ fontSize: "1.6rem", margin: 0 }}>{inst.name}</h3>
                        <div className="instance-meta" style={{ marginTop: "0.4rem" }}>
                          <span className="meta-tag version">v{inst.version}</span>
                          <span className="meta-tag loader">{inst.loader}</span>
                        </div>
                      </div>
                      <span className={`season-status ${getStatusClass(inst.status)}`}>
                        {inst.statusText}
                      </span>
                    </div>

                    <p className="pit-bio" style={{ marginTop: "1.5rem", fontSize: "0.88rem", lineHeight: "1.8" }}>
                      {inst.description}
                    </p>

                    <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "var(--muted)" }}>
                      {inst.modsCount > 0 ? (
                        <span>{pt ? "Quantidade de mods:" : "Amount of mods:"} <strong>{inst.modsCount} {pt ? "arquivos .jar" : ".jar files"}</strong></span>
                      ) : (
                        <span>{pt ? "Fase de desenvolvimento e testes de estabilidade." : "Development and stability testing stage."}</span>
                      )}
                    </div>

                    {/* Download mods button for specific season page */}
                    <div style={{ marginTop: "1.2rem" }}>
                      <a href={inst.modsLink} className="btn-mods-link" target="_blank" rel="noreferrer">
                        [ {pt ? "Acessar Mods no Drive" : "Access Mods on Drive"} ]
                      </a>
                    </div>

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
        ) : (
          /* PietroTy Developer Profile Page */
          <section className="pit-page">
            <div className="pit-header">
              <div className="section-tag">Profile</div>
              <h2 className="section-title">{pt ? "Sobre os Criadores" : "About the Creators"}</h2>
              <p className="section-subtitle">
                {pt ? "A equipe de desenvolvimento, infraestrutura e curadoria do PitCraft." : "The development, infrastructure, and curation team of PitCraft."}
              </p>
            </div>

            {/* Pietro's Profile Card */}
            <div className="pit-card">
              <h3 className="pit-title">PietroTy</h3>
              <span className="pit-subtitle">Full Stack Developer & SysAdmin</span>
              <p className="pit-bio">
                {pt
                  ? "Engenheiro de software focado em criar aplicações interativas, seguras e com visual cyberpunk de alta qualidade. Criador da infraestrutura automatizada do PitCraft Hub que sincroniza instâncias de Minecraft e mantém atualizações de IP dinâmico com DuckDNS."
                  : "Software engineer focused on creating high-quality interactive, secure, and cyberpunk-styled applications. Creator of the automated PitCraft Hub infrastructure that synchronizes Minecraft instances and maintains dynamic IP updates via DuckDNS."}
              </p>

              <div className="pit-stats">
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Stack Principal" : "Main Stack"}</span>
                  <div className="stat-val">React, Node, Bash</div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Servidores Gerenciados" : "Managed Servers"}</span>
                  <div className="stat-val">6 Instâncias MC</div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Hobby do Criador" : "Creator's Hobby"}</span>
                  <div className="stat-val">Modding & Redes</div>
                </div>
              </div>

              <a 
                href="https://pietroty.github.io/PietroTy/" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-portfolio"
              >
                [ {pt ? "Acessar Portfólio Principal" : "Visit Main Portfolio"} ]
              </a>
            </div>

            {/* Fernando's Profile Card */}
            <div className="pit-card" style={{ marginTop: "2rem" }}>
              <h3 className="pit-title" style={{ background: "linear-gradient(135deg, #fff, var(--p2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>FernandoDG</h3>
              <span className="pit-subtitle" style={{ color: "var(--p3)" }}>Mod Curator & Lead Designer</span>
              <p className="pit-bio">
                {pt
                  ? "Responsável por toda a curadoria, seleção estratégica e otimização dos pacotes de mods para todas as temporadas do PitCraft. Coordena a compatibilidade, balanço de jogabilidade e experiência imersiva de jogo para a comunidade."
                  : "Responsible for all curation, strategic selection, and optimization of mod packages for all PitCraft seasons. Coordinates compatibility, gameplay balance, and immersive gaming experiences for the community."}
              </p>

              <div className="pit-stats">
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Modpacks Curados" : "Curated Modpacks"}</span>
                  <div className="stat-val">6 Temporadas</div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Especialidade" : "Specialty"}</span>
                  <div className="stat-val">Otimização & Balanço</div>
                </div>
                <div className="stat-item">
                  <span className="stat-label">{pt ? "Foco de Contribuição" : "Contribution Focus"}</span>
                  <div className="stat-val">Experiência Imersiva</div>
                </div>
              </div>

              <a 
                href="https://github.com/FernandoDacanal" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-portfolio"
              >
                [ {pt ? "Acessar GitHub" : "Access GitHub"} ]
              </a>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

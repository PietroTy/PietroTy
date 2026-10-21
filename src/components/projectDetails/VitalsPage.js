import React from "react";
import vitalsLogo from "../../assets/vitals_card.png";

export default function VitalsPage({ lang }) {
  const pt = lang === "pt";

  const features = [
    {
      titlePt: "Processos gerenciados",
      titleEn: "Managed Processes",
      descPt: "Cada serviço roda como processo próprio, com captura de saída, buffer de log em memória e console interativo quando precisa.",
      descEn: "Each service runs as its own process, with output capture, in-memory log buffers, and an interactive console when needed.",
      iconPt: "// PROCESSOS",
      iconEn: "// PROCESSES"
    },
    {
      titlePt: "Watchdog",
      titleEn: "Watchdog",
      descPt: "Um cron confere o Vitals a cada 5 minutos e religa tudo se ele cair; serviços críticos, como o túnel, não podem ser desligados.",
      descEn: "A cron job checks Vitals every 5 minutes and brings everything back if it dies; critical services like the tunnel cannot be switched off.",
      iconPt: "// WATCHDOG",
      iconEn: "// WATCHDOG"
    },
    {
      titlePt: "Túnel Cloudflare",
      titleEn: "Cloudflare Tunnel",
      descPt: "Um único túnel publica todos os sites e APIs em subdomínios próprios, sem abrir portas no roteador.",
      descEn: "A single tunnel publishes every site and API on its own subdomain without opening router ports.",
      iconPt: "// REDE",
      iconEn: "// NETWORK"
    },
    {
      titlePt: "API de controle",
      titleEn: "Control API",
      descPt: "API local com token que alimenta a aba Vitals do Calcite: status, ligar, desligar, reiniciar e log ao vivo.",
      descEn: "Token-protected local API powering the Calcite Vitals tab: status, start, stop, restart, and live logs.",
      iconPt: "// API",
      iconEn: "// API"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Bash • Cloudflare Tunnel • Linux</div>
            <h1 className="hero-title">Vitals</h1>
            <p className="hero-subtitle">
              {pt
                ? "Gerenciador que mantém ligados todos os meus servidores, sites e bots: sobe tudo junto, monitora, reinicia o que cair e expõe uma API para controle remoto."
                : "Manager that keeps all my servers, sites, and bots running: starts everything together, monitors it, restarts whatever goes down, and exposes an API for remote control."}
            </p>
            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "INFRAESTRUTURA PESSOAL" : "PERSONAL INFRASTRUCTURE"}
              </span>
            </div>
          </div>
          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={vitalsLogo} alt="Vitals" className="hero-logo" style={{ maxWidth: "340px", display: "block" }} />
          </div>
        </section>

        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt : f.iconEn}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: "4rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Sobre o Desenvolvimento" : "Development Overview"}
          </h2>
          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: 0 }}>
              {pt
                ? "Começou como um script em Bash para subir de uma vez os sites, bots e servidores de jogo do meu PC. Com o número de serviços crescendo, virou um gerenciador em Python com monitoramento, reinício automático e uma API usada pelo Calcite."
                : "It started as a Bash script to bring up the sites, bots, and game servers on my PC in one go. As the number of services grew, it became a Python manager with monitoring, automatic restarts, and an API used by Calcite."}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

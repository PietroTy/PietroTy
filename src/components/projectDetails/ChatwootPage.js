import React, { useState } from "react";
import chatwootLogo from "../../assets/chatwoot_logo.png";

export default function ChatwootPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = useState(null);

  const features = [
    {
      titlePt: "Fluxos de Triagem Customizados",
      titleEn: "Custom Routing Workflows",
      descPt: "Desenvolvimento de lógicas personalizadas de atendimento, distribuição inteligente de chamados entre equipes e regras de priorização por setor.",
      descEn: "Custom customer service routing logic, intelligent ticket distribution among teams, and sector-based prioritization rules.",
      iconPt: "// TRIAGEM CUSTOMIZADA",
      iconEn: "// CUSTOM ROUTING"
    },
    {
      titlePt: "Integração WhatsApp & Evolution API",
      titleEn: "WhatsApp & Evolution API Integration",
      descPt: "Conexão nativa com instâncias da Evolution API para envio e recebimento em tempo real de mensagens, áudios, mídias e documentos no WhatsApp.",
      descEn: "Native integration with Evolution API instances for real-time sending/receiving of WhatsApp text, audio, media, and documents.",
      iconPt: "// INTEGRADO COM WHATSAPP",
      iconEn: "// WHATSAPP CONNECTIVITY"
    },
    {
      titlePt: "Relatórios de Produtividade & Métricas",
      titleEn: "Productivity Reports & Analytics",
      descPt: "Dashboards e relatórios detalhados de tempo de primeira resposta, tempo de resolução, volume de conversas por atendente e satisfação do cliente.",
      descEn: "Detailed dashboards and reports covering first response time, resolution speed, ticket volume per agent, and CSAT scores.",
      iconPt: "// MÉTRICAS & KPIS",
      iconEn: "// ANALYTICS & KPIS"
    },
    {
      titlePt: "Webhooks & Sincronização com CRM",
      titleEn: "Webhooks & CRM Synchronization",
      descPt: "Disparo automático de webhooks para atualizar cadastros no CRM corporativo, enriquecer dados de contato e acionar automações secundárias.",
      descEn: "Automated webhook triggers updating corporate CRM records, enriching contact profiles, and triggering secondary workflow automations.",
      iconPt: "// WEBHOOKS & CRM",
      iconEn: "// WEBHOOKS & CRM"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Solução Corporativa • Chatwoot • Docker • Node.js • Evolution API</div>
            <h1 className="hero-title">
              Chatwoot Customizado
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Integração e personalização avançada da plataforma omnichannel Chatwoot para empresas. Customização de fluxos de triagem, distribuição de conversas, webhooks, métricas e conexão nativa com WhatsApp e CRM."
                : "Enterprise integration and customization of the omnichannel Chatwoot platform. Features custom routing workflows, chat distribution, webhooks, productivity metrics, and native WhatsApp/CRM connectivity."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "SOLUÇÃO CORPORATIVA PRIVADA" : "PRIVATE CORPORATE SOLUTION"}
              </span>
              <button className="btn btn-fill" onClick={() => setPage("contact")}>
                {pt ? "Entre em contato" : "Get in touch"} &rarr;
              </button>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={chatwootLogo} 
              alt="Chatwoot" 
              style={{
                maxWidth: "320px",
                width: "100%",
                maxHeight: "240px",
                objectFit: "contain",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0",
                padding: "1rem"
              }}
            />
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt : f.iconEn}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Technical Architecture Overview */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            <span>{`// VISÃO TÉCNICA`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Arquitetura da Solução" : "Technical Architecture"}
          </h2>

          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            <p style={{ margin: "0 0 1rem" }}>
              {pt 
                ? "A plataforma foi implantada em ambiente containerizado via Docker, garantindo alta isolabilidade, segurança e escalabilidade. Os webhooks do Chatwoot foram conectados a microserviços em Node.js e fluxos no n8n para enriquecimento imediato dos dados do cliente com o banco PostgreSQL interno."
                : "The platform was deployed in a containerized Docker environment, ensuring high security, isolation, and scalability. Chatwoot webhooks were wired to custom Node.js microservices and n8n workflows for instant lead data enrichment against the internal PostgreSQL database."
              }
            </p>
            <p style={{ margin: 0 }}>
              {pt 
                ? "A integração com o WhatsApp é mantida por meio da Evolution API, permitindo envio de mensagens ativas, tratamento de mídias de áudio/vídeo e sincronização em tempo real do histórico de conversas entre atendentes."
                : "WhatsApp integration is powered by Evolution API, supporting outbound notification campaigns, voice message processing, and real-time conversation sync across agents."
              }
            </p>
          </div>
        </section>

        {/* Modal */}
        {modalData && (
          <div 
            style={{
              position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)", display: "flex", justifyContent: "center", alignItems: "center",
              zIndex: 1000, padding: "2rem"
            }}
            onClick={() => setModalData(null)}
          >
            <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
              <img src={modalData} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";

export default function CrmEngajaPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Modelagem Relacional & Banco PostgreSQL",
      titleEn: "Relational Modeling & PostgreSQL Engine",
      descPt: "Estruturação de banco de dados relacional de alto desempenho para gestão de leads, carteira de clientes, oportunidades e pipelines de vendas.",
      descEn: "High-performance relational database modeling engineered for managing leads, customer accounts, sales opportunities, and pipelines.",
      iconPt: "// BANCO DE DADOS",
      iconEn: "// POSTGRESQL DB"
    },
    {
      titlePt: "Dashboards Executivos em Power BI & DAX",
      titleEn: "Executive Power BI Dashboards & DAX",
      descPt: "Relatórios analíticos interativos com fórmulas DAX complexas para métricas de conversão, ticket médio, MRR, retenção e projeção de receita.",
      descEn: "Interactive executive BI dashboards with complex DAX formulas for conversion rates, average ticket, MRR, retention, and revenue forecasting.",
      iconPt: "// BUSINESS INTELLIGENCE",
      iconEn: "// POWER BI & DAX"
    },
    {
      titlePt: "Automação de Processos com n8n & Python",
      titleEn: "Process Automation via n8n & Python",
      descPt: "Fluxos inteligentes de disparo de mensagens, qualificação automática de contatos, sincronização de tarefas e alertas em tempo real.",
      descEn: "Intelligent messaging workflows, automatic contact qualification, task syncing, and real-time operational notifications.",
      iconPt: "// AUTOMAÇÃO N8N",
      iconEn: "// N8N AUTOMATION"
    },
    {
      titlePt: "Integrações Multicanal & Pagamentos",
      titleEn: "Multichannel & Payment API Integrations",
      descPt: "Conexão nativa via API com WhatsApp (Evolution API / Chatwoot), gateways de pagamento (Stripe), telefonia (Cloudfy) e sistemas de gestão.",
      descEn: "Native API integration with WhatsApp (Evolution API / Chatwoot), payment gateways (Stripe), VoIP telephony (Cloudfy), and ERP systems.",
      iconPt: "// API & ECOSSISTEMA",
      iconEn: "// API ECOSYSTEM"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">PostgreSQL • Power BI • DAX • n8n • Python • Evolution API • Stripe</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              CRM Corporativo, BI & Integrações
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Solução corporativa privada customizada. Arquitetada, desenvolvida, implantada e posteriormente comercializada para clientes. Une banco de dados PostgreSQL, relatórios em Power BI, automação n8n e integrações multicanal via API."
                : "Custom corporate CRM & Business Intelligence platform. Architected, built, deployed, and commercialized for enterprises. Combines PostgreSQL DB, Power BI dashboards, n8n automations, and multichannel API integrations."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.85 }}>
                🔒 {pt ? "Solução Corporativa Privada / Comercializada" : "Private Corporate / Commercialized Solution"}
              </span>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{
                width: "280px",
                height: "200px",
                background: "linear-gradient(135deg, #7c3aed, #4c1d95)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                border: "2px solid var(--border)",
                boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
                cursor: "pointer"
              }}
              onClick={() => setModalData("crm_card")}
            >
              <div style={{ fontSize: "3.5rem" }}>📊</div>
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }}>CRM & BI System</div>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{pt ? f.iconPt || f.icon : f.iconEn || f.icon}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Commercial & Corporate Context */}
        <section 
          style={{
            marginTop: "3.5rem",
            background: "rgba(124, 58, 237, 0.06)",
            border: "1px solid rgba(124, 58, 237, 0.25)",
            borderRadius: "20px",
            padding: "2rem",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: "700", color: "#7c3aed", marginBottom: "1rem" }}>
            {pt ? "💼 Desenvolvimento sob Medida & Comercialização" : "💼 Tailored Development & Commercialization"}
          </h2>
          <p style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt 
              ? "Esta arquitetura foi desenvolvida como uma solução corporativa completa para centralizar dados de vendas, atendimento e métricas de desempenho. Devido aos resultados de produtividade e previsibilidade alcançados, o sistema foi estruturado como produto e posteriormente comercializado para novos clientes do setor."
              : "This architecture was engineered as a comprehensive corporate solution to centralize sales data, customer service, and performance metrics. Following significant gains in team productivity and revenue forecasting, the platform was packaged and commercialized for new enterprise clients."
            }
          </p>
        </section>

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Banco de Dados" : "Database Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PostgreSQL
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Analytics & BI" : "Analytics & BI"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Power BI & DAX Formulas
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Automação" : "Automation Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                n8n & Python Scripts
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Integrações" : "Integrations"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Evolution API, Chatwoot, Stripe, Cloudfy
              </p>
            </div>
          </div>
        </section>

        {/* Lightbox Image Modal */}
        {modalData && (
          <div 
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              backdropFilter: "blur(8px)",
              zIndex: 99999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              cursor: "zoom-out"
            }}
            onClick={() => setModalData(null)}
          >
            <div 
              style={{
                position: "relative",
                maxWidth: "500px",
                padding: "2.5rem",
                background: "linear-gradient(135deg, #7c3aed, var(--card))",
                border: "2px solid var(--border)",
                borderRadius: "24px",
                textAlign: "center",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>📊</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>CRM & BI System</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "Solução corporativa customizada com banco PostgreSQL, dashboards Power BI/DAX, automações n8n e integração multicanal via API."
                  : "Custom corporate solution combining PostgreSQL DB, Power BI/DAX dashboards, n8n automations, and multichannel API integrations."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

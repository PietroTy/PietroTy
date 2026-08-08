import React from "react";

export default function CrmEngajaPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Desenvolvimento 100% do Zero",
      titleEn: "Built 100% From Scratch",
      descPt: "Arquitetura customizada projetada especificamente para atender a complexidade de processos, regras de negócio e fluxos de atendimento corporativo.",
      descEn: "Custom software architecture engineered from the ground up to solve complex enterprise business rules and operational workflows.",
      iconPt: "// DESENVOLVIMENTO PROPRÍETÁRIO",
      iconEn: "// CUSTOM ARCHITECTURE"
    },
    {
      titlePt: "Integração Nativa com Power BI & DAX",
      titleEn: "Native Power BI Integration & DAX",
      descPt: "Modelagem de dados otimizada para alimentar dashboards executivos em Power BI em tempo real com relatórios de performance, conversão e receita.",
      descEn: "Optimized data modeling feeding real-time Power BI executive dashboards for performance, conversion, and revenue analytics.",
      iconPt: "// INTEGRADO COM POWER BI",
      iconEn: "// NATIVE POWER BI"
    },
    {
      titlePt: "Modelagem Relacional & PostgreSQL",
      titleEn: "Relational Modeling & PostgreSQL Engine",
      descPt: "Estrutura relacional robusta em PostgreSQL para alta disponibilidade, rastreabilidade de conversas, gestão de leads e histórico de clientes.",
      descEn: "Robust PostgreSQL relational schema for high availability, interaction history, lead scoring, and account management.",
      iconPt: "// BANCO POSTGRESQL",
      iconEn: "// POSTGRESQL DB"
    },
    {
      titlePt: "Automação Multicanal & APIs (n8n / Evolution)",
      titleEn: "Multichannel Automation & APIs",
      descPt: "Conexão nativa com n8n, WhatsApp API, gateways de pagamento e telefonia VoIP para automação de tarefas repetitivas.",
      descEn: "Native integration with n8n pipelines, WhatsApp API, payment gateways, and VoIP telephony to automate manual tasks.",
      iconPt: "// AUTOMAÇÃO & APIS",
      iconEn: "// WORKFLOW APIS"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Solução Corporativa • PostgreSQL • Power BI Nativo • n8n • APIs</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              CRM Corporativo & BI
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Sistema de CRM e inteligência de negócios desenvolvido 100% do zero para ambiente empresarial. Conta com integração nativa com o Power BI, banco PostgreSQL e ecossistema de automações multicanal."
                : "Corporate CRM and Business Intelligence platform built 100% from scratch for enterprise operation. Features native Power BI integration, PostgreSQL DB, and multichannel automation workflows."
              }
            </p>

            <div style={{ marginTop: "2rem" }}>
              <span className="btn btn-outline" style={{ display: "inline-flex", cursor: "default", opacity: 0.9, fontFamily: "var(--mono)", fontSize: "0.85rem" }}>
                // {pt ? "EM OPERAÇÃO PRIVADA (NDA)" : "ACTIVE PRIVATE PRODUCTION (NDA)"}
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
              <div style={{ fontFamily: "var(--mono)", color: "#fff", fontWeight: "bold", fontSize: "1.8rem" }}>CRM</div>
              <div style={{ fontFamily: "var(--mono)", color: "rgba(255,255,255,0.8)", fontWeight: "bold", fontSize: "0.9rem" }}>CRM & BI System</div>
            </div>
          </div>
        </section>

        {/* Confidentiality & Corporate Production Notice */}
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
          <h2 style={{ fontSize: "1.2rem", fontFamily: "var(--mono)", fontWeight: "700", color: "#7c3aed", marginBottom: "1rem", letterSpacing: "0.05em" }}>
            {pt ? "// OPERAÇÃO COMERCIAL EM PRODUÇÃO & SIGILO CORPORATIVO" : "// ACTIVE CORPORATE OPERATION & CONFIDENTIALITY"}
          </h2>
          <div style={{ color: "var(--fg)", lineHeight: 1.7, fontSize: "1rem" }}>
            {pt ? (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  Este CRM corporativo foi concebido e construído <strong>100% do zero</strong> para solucionar gargalos operacionais e integrar em tempo real os dados de atendimento, vendas e pós-venda.
                </p>
                <p style={{ margin: 0 }}>
                  Como a aplicação se encontra atualmente em <strong>operação ativa por uma empresa privada</strong>, a especificação detalhada da arquitetura interna, esquemas de tabelas e códigos-fonte proprietários são mantidos sob sigilo corporativo. O projeto atesta a capacidade de entregar sistemas de missão crítica customizados com inteligência analítica em Power BI.
                </p>
              </>
            ) : (
              <>
                <p style={{ marginBottom: "1rem" }}>
                  This enterprise CRM was architected and built <strong>100% from scratch</strong> to eliminate operational bottlenecks and streamline customer support, sales, and analytics data in real time.
                </p>
                <p style={{ margin: 0 }}>
                  Because the platform is currently in <strong>active commercial production by a private enterprise</strong>, detailed internal database schemas and proprietary source code are protected under corporate NDA. The project demonstrates the capacity to deliver mission-critical software with native Power BI analytics.
                </p>
              </>
            )}
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

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Banco de Dados" : "Database Engine"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                PostgreSQL Relacional
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Analytics Executivo" : "Executive Analytics"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Power BI & Fórmulas DAX
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Automação & APIs" : "Automation & APIs"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                n8n, Python & Evolution API
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Status do Projeto" : "Project Status"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Em Operação Privada" : "Active Private Production"}
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
              <div style={{ fontFamily: "var(--mono)", fontSize: "3rem", fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}>CRM</div>
              <h2 style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.8rem", fontFamily: "var(--mono)" }}>CRM & BI System</h2>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: 1.6 }}>
                {pt 
                  ? "Solução corporativa desenvolvida 100% do zero com banco PostgreSQL, dashboards executivos em Power BI e automação n8n."
                  : "Custom corporate solution built 100% from scratch combining PostgreSQL DB, Power BI executive dashboards, and n8n automations."
                }
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

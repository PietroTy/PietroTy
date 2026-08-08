import React from "react";
import dsLogo from "../../assets/ds_logo.png";

export default function DSHubPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Modelagem de Risco de Crédito & Fintech",
      titleEn: "Credit Risk Modeling & Fintech",
      descPt: "Algoritmos preditivos de Machine Learning para cálculo de score de crédito, análise de inadimplência e concessão de risco.",
      descEn: "Predictive Machine Learning algorithms for credit scoring, default risk assessment, and financial underwriting.",
      iconPt: "// CRÉDITO & FINTECH",
      iconEn: "// FINTECH RISK"
    },
    {
      titlePt: "Growth Analytics & Marketing de Performance",
      titleEn: "Growth Analytics & Performance Marketing",
      descPt: "Análises de cohort, atribuição multi-toque, previsão de LTV e modelos de prevenção de Churn em pipelines de Growth.",
      descEn: "Cohort analysis, multi-touch attribution modeling, LTV forecasting, and Churn prevention models for Growth teams.",
      iconPt: "// GROWTH & MARKETING",
      iconEn: "// GROWTH ANALYTICS"
    },
    {
      titlePt: "Saúde Preditiva & Diagnóstico por Dados",
      titleEn: "Predictive Healthcare & Data Diagnosis",
      descPt: "Modelos estatísticos e redes neurais treinadas em dados clínicos para triagem, diagnóstico precoce e saúde preditiva.",
      descEn: "Statistical models and neural networks trained on clinical data for triage, early diagnosis, and predictive healthcare.",
      iconPt: "// SAÚDE PREDITIVA",
      iconEn: "// HEALTHCARE AI"
    },
    {
      titlePt: "Dashboards Interativos em Streamlit",
      titleEn: "Interactive Streamlit Dashboards",
      descPt: "Interface web unificada que permite a executivos e cientistas de dados simular cenários e testar modelos em tempo real.",
      descEn: "Unified web portal allowing executives and data scientists to simulate scenarios and test ML models in real time.",
      iconPt: "// INTERFACE STREAMLIT",
      iconEn: "// DASHBOARDS"
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Python • Streamlit • Scikit-learn • Pandas • BI & ML</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              Data Science Hub
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Portal centralizado de soluções de Inteligência de Dados, Machine Learning e Business Intelligence. Reúne cases práticos de fintech, crédito, growth analytics e saúde preditiva."
                : "Centralized Data Intelligence, Machine Learning, and Business Intelligence solutions portal. Features real-world fintech, credit scoring, growth analytics, and predictive health cases."
              }
            </p>

            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
              <a
                href="https://datascienceh.streamlit.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <span>{pt ? "Acessar Data Science Hub" : "Access Data Science Hub"} &rarr;</span>
              </a>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(dsLogo)}
            >
              <img 
                src={dsLogo} 
                alt="Data Science Hub Logo" 
                className="hero-logo"
                style={{ maxWidth: "340px", display: "block" }}
              />
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

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Linguagem & Libs" : "Language & Libraries"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Python, Pandas & NumPy
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Machine Learning" : "Machine Learning"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Scikit-Learn, XGBoost & SciPy
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Visualização" : "Visualization"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                Streamlit & Plotly
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
                maxWidth: "85vw",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8)",
                cursor: "default"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={typeof modalData === "string" ? modalData : modalData.img} 
                alt="Enlarged preview"
                style={{
                  maxHeight: "75vh",
                  maxWidth: "80vw",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import screenshotImg1 from "../../assets/laplayer_screenshot_1.png";
import screenshotImg2 from "../../assets/laplayer_screenshot_2.png";
import screenshotImg3 from "../../assets/laplayer_screenshot_3.png";
import screenshotImg4 from "../../assets/laplayer_screenshot_4.png";

export default function LaPlayerPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Arquitetura 100% Serverless",
      titleEn: "100% Serverless Architecture",
      descPt: "Todo o processamento de busca, extração e banco de dados roda diretamente dentro do app no seu smartphone. Zero dependência de servidores domésticos ou VPS.",
      descEn: "All search, stream extraction, and database management runs directly on your smartphone. Zero external server or VPS dependency.",
      icon: "// SERVERLESS"
    },
    {
      titlePt: "Engine Direta Spotify (librespot)",
      titleEn: "Direct Spotify Engine (librespot)",
      descPt: "Executado via client-side librespot (inspirado na arquitetura music-tracker de Vitor Cordeiro de Souza), garantindo áudio .ogg Vorbis em alta qualidade e metadados exatos.",
      descEn: "Executed via client-side librespot (inspired by Vitor Cordeiro de Souza's music-tracker architecture), delivering high-quality .ogg Vorbis audio and exact metadata.",
      icon: "// LIBRESPOT"
    },
    {
      titlePt: "Narração Vocaloid TTS & Offline",
      titleEn: "Vocaloid TTS Narration & Offline",
      descPt: "Narração de áudio por Vocaloid TTS (Android Text-to-Speech), banco de dados SQLite otimizado, cache criptografado e modo 100% offline.",
      descEn: "Audio narration powered by Android Vocaloid TTS, optimized SQLite database, encrypted cache, and full 100% offline playback.",
      icon: "// VOCALOID"
    }
  ];

  const screenshots = [
    {
      img: screenshotImg1,
      tag: "DASHBOARD",
      titlePt: "Dashboard & Estatísticas Pessoais",
      titleEn: "Personal Dashboard & Stats",
      descPt: "Estatísticas em tempo real de tempo ouvido, contagem de músicas, número de streams e ranking semanal das faixas mais tocadas.",
      descEn: "Real-time listening statistics featuring total playback time, track counts, streams, and weekly top played songs."
    },
    {
      img: screenshotImg2,
      tag: "PLAYER",
      titlePt: "Player Moderno de Alta Fidelidade",
      titleEn: "Modern High-Fidelity Player",
      descPt: "Interface de reprodução fluida com capas em alta definição, linha do tempo interativa, modo aleatório/repetição e fila inteligente.",
      descEn: "Sleek playback interface with high-res album covers, interactive timeline slider, shuffle/repeat modes, and queue management."
    },
    {
      img: screenshotImg3,
      tag: "LETRAS",
      titlePt: "Letras Sincronizadas em Tempo Real",
      titleEn: "Real-Time Synced Lyrics",
      descPt: "Acompanhe as letras das suas músicas em tempo real com sincronização verso a verso e destaque dinâmico na estrofe atual.",
      descEn: "Follow line-by-line synchronized lyrics in real time with dynamic active verse highlighting."
    },
    {
      img: screenshotImg4,
      tag: "BIBLIOTECA & OFFLINE",
      titlePt: "Playlists & Downloads Offline",
      titleEn: "Playlists & Offline Downloads",
      descPt: "Organize faixas em playlists, filtre por status (todas, baixadas, pendentes) e baixe áudios para ouvir sem internet.",
      descEn: "Organize playlists, filter tracks by status (all, downloaded, pending), and store audio locally for zero-data offline playback."
    }
  ];

  return (
    <div className="page pitcraft-page">
      <div className="container">
        

        {/* Hero Section */}
        <section className="hero-section" style={{ alignItems: "center" }}>
          <div className="hero-content">
            <div className="hero-tag">Flutter Mobile App • 100% Serverless</div>
            <h1 className="hero-title" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
              LaPlayer
            </h1>
            <p className="hero-subtitle">
              {pt 
                ? "Um reprodutor e gerenciador de música 100% Serverless & Client-Side, unindo a interface fluida do Spotify com a autonomia de rodar diretamente no seu smartphone sem depender de servidor externo."
                : "A 100% Serverless & Client-Side music player combining the sleek Spotify mobile interface with direct on-device processing without external server dependency."
              }
            </p>

            {/* Download APK Button */}
            <div style={{ marginTop: "2rem" }}>
              <a
                href={process.env.PUBLIC_URL + "/app_release.apk"}
                download
                className="btn btn-fill"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", padding: "12px 28px" }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "18px", height: "18px" }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>{pt ? "Baixar APK Grátis" : "Download Free APK"}</span>
              </a>
              <p style={{ fontSize: "0.8rem", opacity: 0.5, marginTop: "0.6rem" }}>
                {pt ? "Compatível com Android 8.0+" : "Compatible with Android 8.0+"}
              </p>
            </div>
          </div>

          <div className="hero-image-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img 
              src={process.env.PUBLIC_URL + "/laplayer_logo.png"} 
              alt="LaPlayer Logo" 
              className="hero-logo"
              style={{ maxWidth: "280px", display: "block" }}
            />
          </div>
        </section>

        {/* Feature Grid */}
        <section className="features-section" style={{ marginTop: "3rem" }}>
          {features.map((f, idx) => (
            <div key={idx} className="feature-item">
              <div className="feature-icon-wrapper">{f.icon}</div>
              <h3 className="feature-title">{pt ? f.titlePt : f.titleEn}</h3>
              <p className="feature-description">{pt ? f.descPt : f.descEn}</p>
            </div>
          ))}
        </section>

        {/* Architecture Evolution Section */}
        <section 
          style={{ 
            marginTop: "4rem", 
            background: "rgba(124, 58, 237, 0.05)", 
            border: "1px solid rgba(124, 58, 237, 0.2)", 
            borderRadius: "24px", 
            padding: "2.5rem 2rem" 
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span>{`// ARCHITECTURE EVOLUTION`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginTop: "0.5rem", marginBottom: "1rem", color: "#fff" }}>
            {pt ? "Evolução da Arquitetura (Self-Hosted → Serverless)" : "Architecture Evolution (Self-Hosted → Serverless)"}
          </h2>
          <p style={{ color: "var(--muted2)", lineHeight: "1.7", fontSize: "0.98rem", marginBottom: "1.2rem" }}>
            {pt ? (
              <>
                Inicialmente concebido como um servidor doméstico self-hosted com extração via <code>yt-dlp</code>, o <strong>LaPlayer</strong> evoluiu para uma <strong>arquitetura 100% Serverless (Client-Side)</strong>. Para eliminar inconsistências de metadados e a necessidade de manter uma VPS/servidor próprio, o sistema foi rearquitetado adotando o modelo do projeto <a href="https://github.com/VitorCdSouza/music-tracker" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>music-tracker</a>, criado por <strong>Vitor Cordeiro de Souza</strong> (<a href="https://github.com/VitorCdSouza" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>@VitorCdSouza</a>). Agora, a engine <code>librespot</code>, a autenticação, o banco de dados e o cache funcionam inteiramente dentro do aplicativo no próprio smartphone.
              </>
            ) : (
              <>
                Originally designed as a self-hosted home server using <code>yt-dlp</code>, <strong>LaPlayer</strong> evolved into a <strong>100% Serverless (Client-Side) architecture</strong>. To eliminate metadata mismatches and external server maintenance costs, the system was refactored based on the <a href="https://github.com/VitorCdSouza/music-tracker" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>music-tracker</a> project created by <strong>Vitor Cordeiro de Souza</strong> (<a href="https://github.com/VitorCdSouza" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>@VitorCdSouza</a>). Now, the <code>librespot</code> engine, authentication, database, and cache run completely on-device inside the Flutter mobile app.
              </>
            )}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem", marginTop: "1.5rem" }}>
            <div style={{ background: "var(--card)", padding: "1.2rem", borderRadius: "14px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--p2)", fontWeight: "700", marginBottom: "0.4rem" }}>Processamento 100% Serverless</div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted2)", lineHeight: "1.5" }}>
                {pt 
                  ? "Sem necessidade de servidor próprio ou VPS. O cliente executa toda a lógica diretamente no hardware do celular." 
                  : "No home server or VPS required. The client executes all logic directly on local mobile hardware."}
              </p>
            </div>
            <div style={{ background: "var(--card)", padding: "1.2rem", borderRadius: "14px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--p2)", fontWeight: "700", marginBottom: "0.4rem" }}>Stream Direto Spotify (librespot)</div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted2)", lineHeight: "1.5" }}>
                {pt 
                  ? "Conexão direta aos servidores do Spotify via client-side librespot, garantindo faixas nativas .ogg (Vorbis) em alta fidelidade." 
                  : "Direct connection to Spotify servers via client-side librespot, fetching native high-quality .ogg (Vorbis) audio."}
              </p>
            </div>
            <div style={{ background: "var(--card)", padding: "1.2rem", borderRadius: "14px", border: "1px solid var(--border)" }}>
              <div style={{ color: "var(--p2)", fontWeight: "700", marginBottom: "0.4rem" }}>Narração por Vocaloid TTS</div>
              <p style={{ fontSize: "0.85rem", color: "var(--muted2)", lineHeight: "1.5" }}>
                {pt 
                  ? "Integração com a síntese de voz (TTS) do Android para áudio-assistência e narração das estrofes das músicas." 
                  : "Integration with Android Text-to-Speech engine for voice assistance and Vocaloid lyrics narration."}
              </p>
            </div>
          </div>
        </section>

        {/* Interface Screenshot Showcase */}
        <section style={{ marginTop: "4rem" }}>
          <div className="section-header" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-tag">{pt ? "Interface & Funcionalidades" : "UI/UX & Feature Showcase"}</div>
            <h2 className="section-title">{pt ? "Demonstração do Aplicativo" : "App Interface Showcase"}</h2>
            <p style={{ color: "var(--muted2)", fontSize: "0.95rem", marginTop: "0.5rem", maxWidth: "600px", margin: "0.5rem auto 0" }}>
              {pt 
                ? "Clique em qualquer imagem para ampliar em tela cheia."
                : "Click on any screenshot to view in full resolution."}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {screenshots.map((s, idx) => (
              <div 
                key={idx}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: "24px",
                  padding: "2rem",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "2.5rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
              >
                {/* Screenshot Column */}
                <div 
                  style={{ 
                    flex: "1 1 260px",
                    display: "flex",
                    justify: "center",
                    alignItems: "center",
                    order: idx % 2 === 1 ? 2 : 1
                  }}
                >
                  <div 
                    style={{ cursor: "pointer", display: "inline-block" }}
                    onClick={() => setModalData(s)}
                  >
                    <img 
                      src={s.img} 
                      alt={pt ? s.titlePt : s.titleEn}
                      style={{ 
                        maxWidth: "260px", 
                        width: "100%", 
                        height: "auto", 
                        borderRadius: "28px", 
                        border: "3px solid rgba(255,255,255,0.15)", 
                        boxShadow: "0 18px 40px rgba(0,0,0,0.6)",
                        display: "block",
                        transition: "transform 0.3s ease, filter 0.3s ease"
                      }} 
                    />
                  </div>
                </div>

                {/* Legend Content Beside Image */}
                <div style={{ flex: "2 1 300px", order: idx % 2 === 1 ? 1 : 2 }}>
                  <div 
                    style={{ 
                      fontSize: "0.75rem", 
                      color: "var(--p2)", 
                      fontFamily: "var(--mono)", 
                      letterSpacing: "0.15em",
                      marginBottom: "0.5rem"
                    }}
                  >
                    {`// ${s.tag}`}
                  </div>
                  <h3 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "0.8rem", color: "#fff" }}>
                    {pt ? s.titlePt : s.titleEn}
                  </h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.6" }}>
                    {pt ? s.descPt : s.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Image Modal */}
        {modalData && (
          <div 
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(10px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              cursor: "pointer"
            }}
            onClick={() => setModalData(null)}
          >
            <div 
              style={{
                position: "relative",
                maxWidth: "90vw",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <button
                onClick={() => setModalData(null)}
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "0",
                  background: "rgba(255,255,255,0.2)",
                  border: "none",
                  color: "#fff",
                  fontSize: "1.5rem",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.5)"
                }}
                title={pt ? "Fechar" : "Close"}
              >
                ✕
              </button>
              <img 
                src={modalData.img} 
                alt={pt ? modalData.titlePt : modalData.titleEn}
                style={{
                  maxHeight: "75vh",
                  maxWidth: "100%",
                  objectFit: "contain",
                  borderRadius: "32px",
                  boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)",
                  border: "3px solid rgba(255,255,255,0.2)"
                }}
              />
              <div style={{ marginTop: "1rem", color: "#fff", textAlign: "center" }}>
                <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.2rem" }}>
                  {pt ? modalData.titlePt : modalData.titleEn}
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--muted2)" }}>
                  {pt ? modalData.descPt : modalData.descEn}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Arquitetura" : "Architecture"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "100% Serverless (Client-Side Mobile)" : "100% Serverless (Client-Side Mobile)"}
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Engine de Áudio & Stream" : "Audio Engine & Streaming"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                On-device librespot (Spotify native stream)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Segurança & Síntese" : "Security & Synthesis"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Banco/cache otimizados + Vocaloid TTS Android" : "Optimized DB/cache + Android Vocaloid TTS"}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

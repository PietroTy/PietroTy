import React from "react";
import screenshotImg1 from "../../assets/laplayer_screenshot_1.png";
import screenshotImg2 from "../../assets/laplayer_screenshot_2.png";
import screenshotImg3 from "../../assets/laplayer_screenshot_3.png";
import screenshotImg4 from "../../assets/laplayer_screenshot_4.png";
import screenshotImg5 from "../../assets/laplayer_screenshot_5.png";
import spotifyBanImg from "../../assets/laplayer_spotify_ban.png";

export default function LaPlayerPage({ lang, setPage }) {
  const pt = lang === "pt";
  const [modalData, setModalData] = React.useState(null);

  const features = [
    {
      titlePt: "Stream direto via librespot",
      titleEn: "Direct Spotify stream via librespot",
      descPt: "O app conecta diretamente aos servidores do Spotify via engine librespot on-device, inspirado no projeto music-tracker de Vitor Cordeiro de Souza. Áudio nativo .ogg Vorbis, sem intermediário.",
      descEn: "The app connects directly to Spotify's servers via on-device librespot engine, inspired by Vitor Cordeiro de Souza's music-tracker project. Native .ogg Vorbis audio, no middleman.",
      iconPt: "// LIBRESPOT",
      iconEn: "// LIBRESPOT"
    },
    {
      titlePt: "Fallback yt-dlp + Soulseek",
      titleEn: "yt-dlp + Soulseek Fallback",
      descPt: "Para músicas fora do catálogo do Spotify, o servidor local Python/FastAPI entra em ação: tenta baixar via yt-dlp (YouTube) e, se bloqueado, cai no Soulseek (rede P2P) como fallback automático.",
      descEn: "For tracks outside Spotify's catalog, a local Python/FastAPI server steps in: downloads via yt-dlp (YouTube), falling back automatically to Soulseek (P2P network) when blocked.",
      iconPt: "// FALLBACK P2P",
      iconEn: "// FALLBACK P2P"
    }
  ];

  const screenshots = [
    {
      img: screenshotImg1,
      tag: "BUSCA",
      titlePt: "Busca Multi-fonte: Biblioteca, Spotify & YouTube",
      titleEn: "Multi-Source Search: Library, Spotify & YouTube",
      descPt: "Pesquise músicas simultaneamente na sua biblioteca local, no catálogo do Spotify e no YouTube — tudo em uma única tela unificada.",
      descEn: "Search tracks simultaneously across your local library, the Spotify catalog, and YouTube — all from one unified screen."
    },
    {
      img: screenshotImg2,
      tag: "BIBLIOTECA & OFFLINE",
      titlePt: "Playlists & Downloads Offline",
      titleEn: "Playlists & Offline Downloads",
      descPt: "Organize faixas em playlists, filtre por status (todas, baixadas, pendentes) e baixe áudios para ouvir sem internet.",
      descEn: "Organize playlists, filter tracks by status (all, downloaded, pending), and store audio locally for zero-data offline playback."
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
      tag: "CONFIGURAÇÕES",
      titlePt: "Temas Visuais, Vocaloid & Qualidade de Áudio",
      titleEn: "Visual Themes, Vocaloid & Audio Quality",
      descPt: "Personalize o app com 10 temas visuais únicos, ative a narração por Vocaloid TTS e escolha a qualidade de áudio (bitrate) para equilibrar fidelidade e armazenamento.",
      descEn: "Customize with 10 unique visual themes, enable Vocaloid TTS narration, and choose audio quality (bitrate) to balance fidelity and storage."
    },
    {
      img: screenshotImg5,
      tag: "DASHBOARD",
      titlePt: "Dashboard & Estatísticas Pessoais",
      titleEn: "Personal Dashboard & Stats",
      descPt: "Estatísticas em tempo real de tempo ouvido, contagem de músicas, número de streams e ranking semanal das faixas mais tocadas — com acesso rápido às suas playlists.",
      descEn: "Real-time listening stats featuring total playback time, track counts, streams, and weekly top played songs — with quick access to your playlists."
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
            <div 
              style={{ cursor: "pointer", display: "inline-block" }}
              onClick={() => setModalData(process.env.PUBLIC_URL + "/laplayer_logo.png")}
            >
              <img 
                src={process.env.PUBLIC_URL + "/laplayer_logo.png"} 
                alt="LaPlayer Logo" 
                className="hero-logo"
                style={{ maxWidth: "280px", display: "block" }}
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

        {/* Origin Story Section */}
        <section style={{ marginTop: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", color: "var(--p2)", fontFamily: "var(--mono)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            <span>{`// ORIGIN STORY`}</span>
          </div>
          <h2 style={{ fontSize: "1.6rem", fontWeight: "800", marginBottom: "1.8rem" }}>
            {pt ? "Como o LaPlayer surgiu" : "How LaPlayer came to be"}
          </h2>

          <div style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: "0px", padding: "2rem",
            fontSize: "0.95rem", color: "var(--muted2)", lineHeight: "1.8"
          }}>
            {pt ? (
              <>
                <p style={{ margin: "0 0 1rem" }}>
                  Tudo começou com o <strong>limite de 10.000 músicas</strong> do Spotify e a vontade de sair do monopólio — ter acesso livre aos arquivos, a outras fontes e a músicas que o streaming simplesmente não tem. Com o projeto do amigo <strong>ngc</strong> como ponto de partida, surgiu o primeiro protótipo: um app Flutter que rodava um script <code style={{ color: "var(--p2)" }}>Python via Chaquopy</code> no próprio celular, baixando músicas do YouTube via <code style={{ color: "var(--p2)" }}>yt-dlp</code> com fallback entre instâncias do <code style={{ color: "var(--p2)" }}>Piped</code> e <code style={{ color: "var(--p2)" }}>Invidious</code> para escapar de bloqueios.
                </p>
                <p style={{ margin: "0 0 1rem" }}>
                  A conta pessoal do Spotify era usada diretamente — o que viola os termos. O resultado foi inevitável: ban. Em vez de voltar pro ecossistema do Spotify, a decisão foi migrar de vez pra uma arquitetura <strong>própria e independente</strong>.
                </p>
                <p style={{ margin: "0 0 1rem" }}>
                  <img src={spotifyBanImg} alt="Email de ban do Spotify" style={{ float: "left", maxWidth: "220px", width: "100%", margin: "0.3rem 1.2rem 0.8rem 0", borderRadius: "2px" }} />
                  A próxima fase foi um <strong>servidor doméstico self-hosted</strong>: <code style={{ color: "var(--p2)" }}>Python + FastAPI</code>, exposto via <code style={{ color: "var(--p2)" }}>Cloudflare Tunnel</code>. O app buscava a URL pública do servidor direto do GitHub e recebia o áudio <code style={{ color: "var(--p2)" }}>.m4a</code> por HTTP. Funcional, mas dependente de manter a máquina ligada.
                </p>
                <p style={{ margin: "0 0 1rem", clear: "left" }}>
                  Numa comunidade <strong>seeder de torrent</strong>, foi descoberto o <strong style={{ color: "var(--p2)" }}>Soulseek</strong> — rede P2P com um catálogo absurdo de músicas em alta qualidade. Integrado ao servidor via <code style={{ color: "var(--p2)" }}>slskd</code> (daemon headless), ele entrou como <strong>fallback automático</strong> do yt-dlp: se o YouTube bloquear, o Soulseek entrega o arquivo direto.
                </p>
                <p style={{ margin: 0 }}>
                  Por fim, com o projeto <a href="https://github.com/VitorCdSouza/music-tracker" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>music-tracker</a> de <strong>Vitor Cordeiro de Souza</strong> como referência, veio o salto final: engine <strong style={{ color: "var(--p2)" }}>librespot on-device</strong>, conectando diretamente aos servidores do Spotify e entregando faixas nativas <code style={{ color: "var(--p2)" }}>.ogg Vorbis</code> sem precisar de servidor. O backend Python ainda existe como fallback opcional para músicas fora do catálogo.
                </p>
              </>
            ) : (
              <>
                <p style={{ margin: "0 0 1rem" }}>
                  It all started with Spotify's <strong>10,000-song library limit</strong> and the desire to break free from the monopoly — to own the files, access other sources, and find music that streaming simply doesn't have. Using a friend's (<strong>ngc</strong>) project as a starting point, the first prototype was born: a Flutter app running a <code style={{ color: "var(--p2)" }}>Python script via Chaquopy</code> on-device, downloading songs from YouTube via <code style={{ color: "var(--p2)" }}>yt-dlp</code> with fallbacks between <code style={{ color: "var(--p2)" }}>Piped</code> and <code style={{ color: "var(--p2)" }}>Invidious</code> instances to dodge blocks.
                </p>
                <p style={{ margin: "0 0 1rem" }}>
                  The personal Spotify account was used directly — violating ToS. The inevitable result: a ban. Instead of going back to Spotify's ecosystem, the decision was made to fully migrate to a <strong>self-owned, independent architecture</strong>.
                </p>
                <p style={{ margin: "0 0 1rem" }}>
                  <img src={spotifyBanImg} alt="Spotify ban email" style={{ float: "left", maxWidth: "220px", width: "100%", margin: "0.3rem 1.2rem 0.8rem 0", borderRadius: "2px" }} />
                  The next phase was a <strong>self-hosted home server</strong>: <code style={{ color: "var(--p2)" }}>Python + FastAPI</code>, exposed via <code style={{ color: "var(--p2)" }}>Cloudflare Tunnel</code>. The app fetched the server's public URL directly from GitHub and received <code style={{ color: "var(--p2)" }}>.m4a</code> audio over HTTP. Functional, but required keeping the machine running.
                </p>
                <p style={{ margin: "0 0 1rem", clear: "left" }}>
                  Through a <strong>torrent seeder community</strong>, <strong style={{ color: "var(--p2)" }}>Soulseek</strong> was discovered — a P2P network with a huge catalog of high-quality music. Integrated into the server via <code style={{ color: "var(--p2)" }}>slskd</code> (headless daemon), it became an <strong>automatic fallback</strong> for yt-dlp: when YouTube blocks, Soulseek delivers the file directly.
                </p>
                <p style={{ margin: 0 }}>
                  Finally, using <a href="https://github.com/VitorCdSouza/music-tracker" target="_blank" rel="noopener noreferrer" style={{ color: "var(--p2)", textDecoration: "underline" }}>music-tracker</a> by <strong>Vitor Cordeiro de Souza</strong> as reference, came the final leap: <strong style={{ color: "var(--p2)" }}>librespot on-device engine</strong>, connecting directly to Spotify's servers and delivering native <code style={{ color: "var(--p2)" }}>.ogg Vorbis</code> tracks without a server. The Python backend still exists as an optional fallback for tracks outside the catalog.
                </p>
              </>
            )}
          </div>
        </section>

        {/* Interface Screenshot Showcase */}
        <section style={{ marginTop: "4rem" }}>
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <div className="section-tag">{pt ? "Interface & Funcionalidades" : "UI/UX & Feature Showcase"}</div>
            <h2 className="section-title">{pt ? "Demonstração do Aplicativo" : "App Interface Showcase"}</h2>
            <p style={{ color: "var(--muted2)", fontSize: "0.95rem", marginTop: "0.5rem", maxWidth: "600px" }}>
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
                  borderRadius: "0px",
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
                        borderRadius: "0px", 
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
              <img 
                src={typeof modalData === "string" ? modalData : modalData.img} 
                alt={typeof modalData === "string" ? "LaPlayer Preview" : (pt ? modalData.titlePt : modalData.titleEn)}
                style={{
                  maxHeight: typeof modalData === "string" ? "75vh" : "65vh",
                  maxWidth: "80vw",
                  width: "auto",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "0px"
                }}
              />
              {typeof modalData === "object" && modalData.titlePt && (
                <div style={{ marginTop: "1rem", color: "#fff", textAlign: "center", maxWidth: "600px" }}>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.3rem" }}>
                    {pt ? modalData.titlePt : modalData.titleEn}
                  </h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted2)", lineHeight: 1.5 }}>
                    {pt ? modalData.descPt : modalData.descEn}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack Footer */}
        <section style={{ marginTop: "4rem", borderTop: "1px solid var(--border)", paddingTop: "3rem", paddingBottom: "2rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "2rem" }}>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Stream de Áudio" : "Audio Streaming"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                librespot on-device (.ogg Vorbis)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Download & Fallback" : "Download & Fallback"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                yt-dlp + Soulseek (slskd)
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--p2)", fontFamily: "var(--mono)", textTransform: "uppercase", fontSize: "0.9rem", letterSpacing: "0.05em" }}>
                {pt ? "Síntese & Armazenamento" : "Synthesis & Storage"}
              </h4>
              <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>
                {pt ? "Vocaloid TTS + SQLite + cache offline" : "Vocaloid TTS + SQLite + offline cache"}
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

import jadeLogo from "../assets/jade_card.png";
import cvpearlLogo from "../assets/cvpearl_card.png";
import amethystLogo from "../assets/amethyst_card.png";
import serrasafeLogo from "../assets/serrasafe_card.png";

// Conteúdo das páginas de projeto que usam SimpleProjectPage.
export const PROJECT_PAGES = {
  "laplayer-jade": {
    logo: jadeLogo,
    tag: "Flutter • Dart • Python • Syncthing",
    title: "LaPlayer Jade",
    origin: { page: "laplayer", name: "LaPlayer" },
    subtitle: {
      pt: "A nova versão do LaPlayer, refeita do zero: um player de música para celular e PC com servidor próprio, que baixa as músicas e mantém a mesma biblioteca nos dois aparelhos.",
      en: "The new LaPlayer, rebuilt from scratch: a music player for phone and PC with its own server, which downloads the songs and keeps the same library on both devices."
    },
    badge: { pt: "USO PESSOAL · CÓDIGO PRIVADO", en: "PERSONAL USE · PRIVATE CODE" },
    features: [
      { icon: "SERVIDOR", title: { pt: "Servidor que baixa", en: "Downloading Server" }, desc: { pt: "Servidor em Python acha cada música no YouTube Music (com Soulseek de reserva), baixa em m4a e preenche capa, álbum e ano pelos metadados do Deezer.", en: "A Python server finds each song on YouTube Music (with Soulseek as a fallback), downloads it as m4a, and fills cover, album, and year from Deezer metadata." } },
      { icon: "SYNC", title: { pt: "Celular e PC iguais", en: "Phone and PC in Sync" }, desc: { pt: "A pasta de músicas é sincronizada pelo Syncthing, e a playlist e o histórico de cada aparelho viram eventos que os outros juntam sozinhos.", en: "The music folder syncs through Syncthing, and each device's playlist and history become events the others merge on their own." } },
      { icon: "DESKTOP", title: { pt: "Android e Linux", en: "Android and Linux" }, desc: { pt: "O mesmo app em Flutter roda no Android e no Linux, com layout de desktop e barra de player quando a tela é larga.", en: "The same Flutter app runs on Android and Linux, with a desktop layout and player bar on wide screens." } },
      { icon: "OFFLINE", title: { pt: "Tudo offline", en: "Fully Offline" }, desc: { pt: "As músicas ficam no aparelho, então toca sem internet e sem depender de nenhum serviço de streaming.", en: "Songs live on the device, so it plays without internet and without depending on any streaming service." } }
    ],
    about: [
      { pt: "O LaPlayer original puxava as músicas direto do Spotify e parou de funcionar quando a conta foi bloqueada. A versão pública ficou congelada na v2.6.0, e o Jade começou do zero com outra ideia: ter os arquivos de verdade em vez de depender de streaming.", en: "The original LaPlayer pulled songs straight from Spotify and stopped working when the account was banned. The public version stayed frozen at v2.6.0, and Jade started over with a different idea: owning the actual files instead of depending on streaming." },
      { pt: "Pra escolher a fonte, fiz um teste com amostras de 40 músicas: a busca de músicas do YouTube Music acertou 97%, contra 90% da busca comum do YouTube. Uma playlist inteira, com milhares de faixas, foi baixada por um script que respeita os bloqueios temporários do YouTube.", en: "To pick the source, I benchmarked 40-song samples: YouTube Music's song search got 97% right, against 90% for regular YouTube search. A whole playlist with thousands of tracks was downloaded by a script that waits out YouTube's temporary blocks." }
    ]
  },
  cvpearl: {
    logo: cvpearlLogo,
    tag: "Go • JavaScript • Claude Code • Chromium",
    title: "CVPearl",
    link: "https://cvpearl.pietroty.com.br/",
    origin: { page: "cvmaker", name: "CVMaker" },
    subtitle: {
      pt: "Gerador de currículos sob medida: cola a vaga e ele analisa os requisitos, escreve o currículo de uma página e a mensagem pro recrutador a partir do meu perfil.",
      en: "Tailored résumé generator: paste a job posting and it analyzes the requirements, then writes a one-page résumé and the recruiter message from my profile."
    },
    badge: { pt: "USO PESSOAL · COM SENHA", en: "PERSONAL USE · PASSWORD PROTECTED" },
    features: [
      { icon: "LLM", title: { pt: "Claude Code local", en: "Local Claude Code" }, desc: { pt: "O servidor roda o Claude Code sem interface, só com ferramentas de leitura, e recebe a resposta num JSON com formato fixo.", en: "The server runs Claude Code headless with read-only tools and gets the answer back as JSON in a fixed schema." } },
      { icon: "ANÁLISE", title: { pt: "Análise da vaga", en: "Job Analysis" }, desc: { pt: "Mostra a senioridade real, os requisitos com evidência no perfil, as lacunas e as perguntas que devem aparecer na entrevista.", en: "Shows the real seniority, requirements backed by the profile, gaps, and the questions likely to come up in the interview." } },
      { icon: "PDF", title: { pt: "Uma página, sempre", en: "Always One Page" }, desc: { pt: "O PDF sai pelo Chromium e, se não couber, a escala diminui sozinha até caber numa página.", en: "The PDF is printed through Chromium and, if it doesn't fit, the scale shrinks on its own until it fits one page." } },
      { icon: "AJUSTES", title: { pt: "Edição e ajustes", en: "Editing and Tweaks" }, desc: { pt: "Dá pra editar o texto direto no currículo ou pedir ajustes por escrito, que continuam a mesma conversa.", en: "You can edit text right on the résumé or ask for changes in writing, which continue the same conversation." } }
    ],
    about: [
      { pt: "Substituiu o CVMaker, que adaptava um .docx com IA. O problema era o texto com cara de IA e sem contexto, então o CVPearl lê um perfil revisado e o meu cofre de notas e segue regras de escrita e de veracidade.", en: "It replaced CVMaker, which adapted a .docx with AI. The issue was generic AI-sounding text with no context, so CVPearl reads a reviewed profile and my notes vault and follows writing and accuracy rules." },
      { pt: "Pra montar o perfil, fiz uma tela de revisão em que conferi uma por uma as 114 afirmações dos currículos antigos. O servidor é em Go e a interface é JavaScript puro.", en: "To build the profile, I made a review screen where I checked all 114 claims from my old résumés one by one. The server is in Go and the interface is plain JavaScript." }
    ]
  },
  amethyst: {
    logo: amethystLogo,
    tag: "Go • JavaScript • Flutter • rclone • Syncthing",
    title: "Amethyst",
    subtitle: {
      pt: "Meu próprio gerenciador de arquivos, com cara de drive: navega, mostra fotos, vídeos e documentos, espelha meus projetos e faz backup sozinho pro Google Drive.",
      en: "My own file manager with a drive-like feel: it browses, previews photos, videos, and documents, mirrors my projects, and backs itself up to Google Drive."
    },
    badge: { pt: "USO PESSOAL", en: "PERSONAL TOOL" },
    features: [
      { icon: "DRIVE", title: { pt: "Interface de drive", en: "Drive-Like Interface" }, desc: { pt: "Seleção como no Windows, arrastar e soltar pra enviar, baixar vários arquivos em .zip e um app Android.", en: "Windows-style selection, drag and drop uploads, multi-file .zip downloads, and an Android app." } },
      { icon: "PRÉVIAS", title: { pt: "Abre de tudo", en: "Opens Everything" }, desc: { pt: "Galeria com miniaturas geradas pelo ffmpeg, PDFs e documentos do Office mostrados como páginas e arquivos de texto.", en: "A gallery with ffmpeg thumbnails, PDFs and Office documents shown as pages, and text files." } },
      { icon: "BACKUP", title: { pt: "Backup e espelho", en: "Backup and Mirror" }, desc: { pt: "Espelha a pasta de projetos de hora em hora e manda a biblioteca inteira pro Google Drive todo dia, com limite de banda de dia.", en: "Mirrors the projects folder every hour and sends the whole library to Google Drive daily, with a daytime bandwidth cap." } },
      { icon: "ROTINAS", title: { pt: "Rotinas", en: "Routines" }, desc: { pt: "Roda tarefas agendadas, como os scripts dos meus outros projetos, sem precisar de cron solto pelo sistema.", en: "Runs scheduled tasks, like my other projects' scripts, without loose cron jobs around the system." } }
    ],
    about: [
      { pt: "Nasceu pra organizar anos de arquivos espalhados entre HD, SSD, Windows e nuvem. Importei tudo copiando e verificando cada arquivo, sem apagar os originais, e depois o Amethyst virou o lugar onde tudo mora.", en: "It was built to organize years of files scattered across HDD, SSD, Windows, and the cloud. I imported everything by copying and verifying each file without deleting the originals, and Amethyst became where everything lives." },
      { pt: "O servidor é em Go, com a interface em JavaScript embutida no binário, e fica acessível pela internet por um túnel da Cloudflare. Os arquivos continuam em pastas normais, então nada fica preso ao app.", en: "The server is in Go with the JavaScript interface embedded in the binary, reachable online through a Cloudflare tunnel. Files stay in normal folders, so nothing is locked into the app." }
    ]
  },
  serrasafe: {
    logo: serrasafeLogo,
    tag: "ESP32-S3 • IoT • Sensores • Dados",
    title: "SerraSafe",
    subtitle: {
      pt: "Sistema embarcado de baixo custo que monitora sensores ambientais e classifica em tempo real o risco de queimada na Serra da Paulista, em São João da Boa Vista.",
      en: "A low-cost embedded system that reads environmental sensors and classifies wildfire risk in real time in Serra da Paulista, São João da Boa Vista."
    },
    badge: { pt: "PROJETO DO IFSP · 2026", en: "IFSP PROJECT · 2026" },
    link: "https://serra-safe.netlify.app/",
    features: [
      { icon: "SENSORES", title: { pt: "Sete sensores", en: "Seven Sensors" }, desc: { pt: "Temperatura, umidade do ar e do solo, gás e fumaça, chama, chuva e um relógio DS3231 ligados a um ESP32-S3.", en: "Temperature, air and soil humidity, gas and smoke, flame, rain, and a DS3231 clock wired to an ESP32-S3." } },
      { icon: "DADOS", title: { pt: "Análise e tratamento", en: "Analysis and Cleaning" }, desc: { pt: "Minha parte: tratar as leituras dos sensores e analisar os dados pra chegar na pontuação de risco.", en: "My part: cleaning the sensor readings and analyzing the data to build the risk score." } },
      { icon: "RISCO", title: { pt: "Três níveis", en: "Three Levels" }, desc: { pt: "As condições viram uma pontuação que classifica o risco em baixo, moderado ou alto.", en: "Conditions become a score that rates the risk as low, moderate, or high." } },
      { icon: "ALERTA", title: { pt: "Rede e alertas", en: "Network and Alerts" }, desc: { pt: "Vários dispositivos em rede pra cobrir áreas de difícil acesso e avisar cedo autoridades e proprietários.", en: "Several networked devices to cover hard-to-reach areas and warn authorities and landowners early." } }
    ],
    about: [
      { pt: "Projeto de seis estudantes do IFSP de São João da Boa Vista. A Serra da Paulista guarda remanescentes de mata importantes e sofre com queimadas que afetam fauna, flora, solo, ar e a população em volta.", en: "A project by six IFSP students in São João da Boa Vista. Serra da Paulista holds important forest remnants and suffers from wildfires that hurt wildlife, plants, soil, air, and the people around it." },
      { pt: "No grupo, fiquei com a parte de dados: limpeza e tratamento das leituras, análise e a lógica que transforma tudo isso num nível de risco.", en: "In the team, I took the data side: cleaning and processing the readings, the analysis, and the logic that turns it all into a risk level." }
    ]
  }
};

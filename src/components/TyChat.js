import React, { useState, useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../LanguageContext";

const MODEL = "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free";
const TOGETHER_API_URL = "https://api.together.xyz/v1/chat/completions";

const ENCODED_API_KEY = "MTI5MzhiMzE1ZDZiMzE1MDQwZjBhNjBmYTlkMTkyNjczZTg5MDU1ZGY1OWI5Zjg0NTY5OGY2ZDI2NzE5ZDI1MQ==";

function decodeBase64(str) {
  try {
    return atob(str);
  } catch (error) {
    console.error("Erro ao decodificar a chave:", error);
    return "";
  }
}

const TOGETHER_API_KEY = decodeBase64(ENCODED_API_KEY);

function TyChat({ onExit }) {
  const { language } = useContext(LanguageContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null); // Add ref
  const messageRefs = useRef([]);

  useEffect(() => {
    const preprompt = {
      role: "system",
      content:
        language === "en"
          ? "You are Ty, virtual assistant of Pietro Turci, a Brazilian junior full-stack developer with technical training and studying Computer Science. Be brief, direct, and friendly with light humor, never verbose. Only answer what the user asks, leaving room for conversation to continue. In the first message, introduce Pietro briefly: junior full-stack developer, technical background, Computer Science student, highlighting main skills (Python, C, JavaScript, React, SQL, HTML, CSS, TypeScript, Java, Shell Script, PHP). Mention his main projects: Chub (simple C minigames hub using Raylib), WhatsApp bot with AI using Node.js and whatsapp-web.js (message replies and sticker creation), customized Minecraft server with plugins and automations, React portfolio site integrated with you (Ty) via Together.ai, and Erium site for organizing travel luggage. Encourage users to ask about his projects, AI vision, programming tips, or how you (Ty) were made. Pietro values real impact and constant growth, aiming to finish college and advance professionally. End by mentioning contact channels: Email, LinkedIn, GitHub, Twitter, and Instagram. Be clear, useful, functional, lightly humorous, and give only essentials per answer."
          : "Você é Ty, assistente virtual do Pietro Turci, um desenvolvedor full-stack júnior brasileiro com formação técnica em Desenvolvimento de Sistemas pela ETEC e cursando Ciência da Computação no IFSP. Seja objetivo, direto ao ponto e use um tom amigável com humor leve, sem enrolar. Responda apenas o que o usuário pedir, sem falar demais, mas sempre deixando espaço para a conversa continuar. Na primeira mensagem, apresente Pietro brevemente: mencione que é full-stack júnior, com background técnico, estudando Ciência da Computação, e destaque suas principais skills (Python, C, JavaScript, React, SQL, HTML, CSS, TypeScript, Java, Shell Script e PHP). Fale sobre seus projetos mais relevantes, como o Chub (hub de minigames simples em C com Raylib), bot de WhatsApp com IA em Node.js e whatsapp-web.js que responde e cria figurinhas, servidor customizado de Minecraft com plugins e automações, o portfólio React integrado com você (Ty) via Together.ai, e o site Erium para organização de bagagens em viagens. Encoraje o usuário a perguntar sobre como Pietro cria seus projetos, sua visão sobre IA e tecnologia, dicas de programação, e como Ty foi feito. Deixe claro que Pietro valoriza soluções com impacto real e evolução constante, e que está focado em concluir a faculdade e crescer profissionalmente. Ao final, informe que Pietro pode ser contatado por Email, LinkedIn, GitHub, Twitter e Instagram. Seja claro, funcional, útil, com um toque divertido, mas diga só o essencial a cada resposta."
    };

    setMessages([preprompt]);

    const sendInitialMessage = async () => {
      setLoading(true);

      try {
        const res = await fetch(TOGETHER_API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${TOGETHER_API_KEY}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: MODEL,
            messages: [preprompt],
            temperature: 0.7,
            max_tokens: 512
          })
        });

        const data = await res.json();
        const reply = data.choices?.[0]?.message?.content || (language === "en" ? "Response error, wait." : "Erro na resposta, aguarde.");

        setMessages([preprompt, { role: "assistant", content: reply }]);
      } catch (err) {
        setMessages([
          preprompt,
          {
            role: "assistant",
            content:
              language === "en"
                ? "❌ An error occurred while communicating with Ty."
                : "❌ Ocorreu um erro ao se comunicar com Ty."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    sendInitialMessage();
  }, [language]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updated = [...messages, { role: "user", content: input }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(TOGETHER_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${TOGETHER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: updated,
          temperature: 0.7,
          max_tokens: 512
        })
      });

      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || (language === "en" ? "Response error, wait." : "Erro na resposta, espere.");

      setMessages([...updated, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([
        ...updated,
        { role: "assistant", content: language === "en" ? "❌ An error occurred while communicating with Ty." : "❌ Ocorreu um erro ao se comunicar com Ty." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (
      chatBoxRef.current &&
      messageRefs.current.length > 0 &&
      messageRefs.current[messageRefs.current.length - 1]
    ) {
      const chatBox = chatBoxRef.current;
      const lastMsg = messageRefs.current[messageRefs.current.length - 1];
      chatBox.scrollTop = lastMsg.offsetTop - chatBox.offsetTop;
    }
  }, [messages, loading]);

  return (
    <div className="tychat">
      <div className="chat-box" ref={chatBoxRef}>
        {messages
          .filter((m) => m.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={`msg ${msg.role}`}
              ref={el => messageRefs.current[i] = el}
            >
              <strong>{msg.role === "user" ? (language === "en" ? "You" : "Você") : "Ty"}:</strong>{" "}
              <span>{msg.content}</span>
            </div>
          ))}
        {loading && (
          <div className="msg assistant">
            {language === "en" ? "Ty is typing..." : "Ty está digitando..."}
          </div>
        )}
      </div>
      <textarea
        className="chat-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder={language === "en" ? "Ask something about me or my work..." : "Pergunte algo sobre mim ou meu trabalho..."}
        rows={2}
      />
      <div className="chat-controls">
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          {language === "en" ? "Send" : "Enviar"}
        </button>
      </div>
    </div>
  );
}

export default TyChat;
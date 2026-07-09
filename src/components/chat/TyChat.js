import React, { useState, useEffect, useRef, useCallback } from "react";
import { getSystemPrompt } from "../../config/systemPrompt";
import { perguntarIA } from "../../services/aiService";

function BunnyIcon({ style, className }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" style={style} className={className}>
      <rect x="3" y="1" width="2" height="7" />
      <rect x="11" y="1" width="2" height="7" />
      <rect x="3" y="8" width="10" height="1.2" />
      <rect x="2" y="9" width="12" height="1.2" />
      <rect x="2" y="10" width="2" height="1.2" />
      <rect x="5" y="10" width="6" height="1.2" />
      <rect x="12" y="10" width="2" height="1.2" />
      <rect x="2" y="11" width="12" height="1.2" />
      <rect x="2" y="12" width="5" height="1.2" />
      <rect x="9" y="12" width="5" height="1.2" />
      <rect x="3" y="13" width="10" height="1.2" />
      <rect x="5" y="14" width="6" height="1" />
    </svg>
  );
}

function formatMessageText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--p3)", textDecoration: "underline", wordBreak: "break-all" }}
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function TyChat({ lang }) {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([
    {
      role: "bot",
      text:
        lang === "en"
          ? "Hey! I'm Ty, Pietro's virtual assistant. You can ask me about his education, projects, and trajectory."
          : "Oi! Sou o Ty, assistente virtual do Pietro. Pode me perguntar sobre a formação, projetos e a trajetória dele.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [tipIndex, setTipIndex] = useState(0);

  const tipsPt = ["Fale comigo!", "", "Clique aqui!", "", "Dúvidas sobre o Pietro?", "", "Ver projetos?", ""];
  const tipsEn = ["Talk to me!", "", "Click here!", "", "Questions about Pietro?", "", "See projects?", ""];
  const currentTips = lang === "en" ? tipsEn : tipsPt;

  useEffect(() => {
    if (open) return;
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % currentTips.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [open, currentTips.length]);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const newMsgs = [...msgs, { role: "user", text }];
    setMsgs(newMsgs);
    setLoading(true);

    try {
      const systemPrompt = getSystemPrompt(lang || "pt");
      const history = [
        systemPrompt,
        ...newMsgs
          .filter((m) => m.role !== "bot" || newMsgs.indexOf(m) > 0)
          .map((m) => ({
            role: m.role === "user" ? "user" : "assistant",
            content: m.text,
          })),
      ];

      const reply = await perguntarIA(history);
      setMsgs((m) => [...m, { role: "bot", text: reply }]);
    } catch {
      setMsgs((m) => [
        ...m,
        {
          role: "bot",
          text:
            lang === "en"
              ? "Connection error. Try again!"
              : "Erro de conexão. Tente novamente!",
        },
      ]);
    }
    setLoading(false);
  }, [input, loading, msgs, lang]);

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {!open && currentTips[tipIndex] && (
        <div className="chat-fab-tip" onClick={() => setOpen(true)}>
          {currentTips[tipIndex]}
        </div>
      )}

      <button className="chat-fab" onClick={() => setOpen((o) => !o)} aria-label="Chat com Ty">
        <BunnyIcon style={{ width: "40px", height: "40px", color: "white", transform: open ? "rotate(12deg) scale(0.95)" : "none", transition: "transform 0.25s" }} />
      </button>

      <div className={`chat-window ${open ? "open" : "closed"}`}>
        <div className="chat-head">
          <div className="chat-avatar" style={{ color: "var(--p3)" }}>
            <BunnyIcon style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="chat-head-info">
            <div className="chat-head-name">Ty</div>
            <div className="chat-head-status">online</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>
            x
          </button>
        </div>

        <div className="chat-msgs">
          {msgs.map((m, i) => (
            <div key={i} className={`msg ${m.role === "user" ? "user" : "bot"}`}>
              {m.role === "bot" && (
                <div className="msg-mini-avatar" style={{ color: "var(--p3)" }}>
                  <BunnyIcon style={{ width: "100%", height: "100%" }} />
                </div>
              )}
              <div className="msg-bubble">{formatMessageText(m.text)}</div>
            </div>
          ))}
          {loading && (
            <div className="msg bot">
              <div className="msg-mini-avatar" style={{ color: "var(--p3)" }}>
                <BunnyIcon style={{ width: "100%", height: "100%" }} />
              </div>
              <div className="msg-bubble">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-wrap">
          <textarea
            ref={inputRef}
            className="chat-input"
            placeholder={lang === "en" ? "Ask anything..." : "Pergunte qualquer coisa..."}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            rows={1}
          />
          <button className="chat-send" onClick={send} disabled={!input.trim() || loading}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" shapeRendering="crispEdges">
              <path d="M2,2 L14,8 L2,14 L5,8 Z M5,8 L14,8" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
import React, { useState, useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../LanguageContext";
import prompts from "../data/tyPrompts.json";
import { perguntarIA } from "../services/aiService";

function TyChat({ onExit }) {
  const { language } = useContext(LanguageContext);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);
  const messageRefs = useRef([]);

  useEffect(() => {
    const preprompt = prompts[language] || prompts["pt"];
    setMessages([preprompt]);

    const sendInitialMessage = async () => {
      setLoading(true);
      try {
        const reply = await perguntarIA([preprompt]);
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
      const reply = await perguntarIA(updated);
      setMessages([...updated, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages([
        ...updated,
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
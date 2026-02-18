"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles, ChevronDown, ArrowUpRight } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What products do you offer?",
  "How do I apply for a trade account?",
  "What is your return policy?",
  "Do you ship internationally?",
];

/* ── Dot-pulse typing animation ── */
const TypingDots = () => (
  <div className="flex items-center gap-[5px] py-0.5">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-[6px] h-[6px] rounded-full bg-[#C4A378]/50"
        style={{
          animation: `chatDotPulse 1.2s ease-in-out ${i * 0.18}s infinite`,
        }}
      />
    ))}
    <style>{`
      @keyframes chatDotPulse {
        0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
        40% { opacity: 1; transform: scale(1); }
      }
      .chat-scroll::-webkit-scrollbar { display: none; }
      .chat-scroll { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  </div>
);

/* ── Render **bold** markdown inline ── */
const RenderText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-semibold text-white/95">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm **Avelon AI**, your wholesale assistant. How can I help you today? Ask me about our products, trade accounts, shipping, or anything related to Avelon MFG.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
      }, 80);
    }
  }, [messages, isOpen]);

  const sendMessage = async (text: string) => {
    const userMessage = text.trim();
    if (!userMessage || isLoading) return;

    setShowSuggestions(false);
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...history, { role: "user", content: userMessage }] }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "Sorry, something went wrong. Please try again." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Chat Panel ── */}
      <div
        className={`fixed bottom-28 right-6 z-50 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
          w-[400px] max-w-[calc(100vw-2rem)]
          lg:w-[440px]
          origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-4 pointer-events-none"}`}
        style={{ maxHeight: "min(640px, calc(100vh - 140px))" }}
      >
        <div
          className="flex flex-col overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(160deg, #111009 0%, #0A0806 100%)",
            boxShadow:
              "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(196,163,120,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
            maxHeight: "inherit",
          }}
        >
          {/* ── Header ── */}
          <div
            className="flex items-center justify-between px-5 py-4 shrink-0 rounded-t-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(196,163,120,0.1) 0%, rgba(196,163,120,0.03) 100%)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div
                className="relative w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(196,163,120,0.25), rgba(196,163,120,0.08))",
                  border: "1px solid rgba(196,163,120,0.3)",
                  boxShadow: "0 0 16px rgba(196,163,120,0.12)",
                }}
              >
                <Bot className="size-5 text-[#C4A378]" strokeWidth={1.5} />
                {/* Online dot */}
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 bg-emerald-400"
                  style={{ borderColor: "#0A0806" }}
                />
              </div>

              {/* Name & status */}
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span
                    className="text-white font-bold text-[15px] leading-none tracking-tight"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    Avelon AI
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[9px] font-medium tracking-[0.12em] uppercase text-[#C4A378] bg-[#C4A378]/10 border border-[#C4A378]/20 px-1.5 py-0.5 rounded-full"
                    style={{ fontFamily: "monospace" }}
                  >
                    <Sparkles className="size-2.5" />
                    AI
                  </span>
                </div>
                <p
                  className="text-[11px] text-white/35 leading-none"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Wholesale assistant · Always online
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-white/70 hover:bg-white/[0.06] transition-all duration-200"
            >
              <ChevronDown className="size-4" />
            </button>
          </div>

          {/* ── Messages ── */}
          <div className="chat-scroll flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4 min-h-0">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {/* Assistant avatar (small) */}
                {msg.role === "assistant" && (
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mb-0.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(196,163,120,0.2), rgba(196,163,120,0.06))",
                      border: "1px solid rgba(196,163,120,0.2)",
                    }}
                  >
                    <Bot className="size-3.5 text-[#C4A378]/80" strokeWidth={1.5} />
                  </div>
                )}

                {/* Bubble */}
                <div
                  className={`
                    max-w-[78%] px-4 py-3 rounded-2xl text-[13.5px] leading-[1.75]
                    ${msg.role === "user"
                      ? "rounded-br-sm text-white/90"
                      : "rounded-bl-sm text-white/65"
                    }
                  `}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    ...(msg.role === "user"
                      ? {
                          background: "linear-gradient(135deg, rgba(196,163,120,0.22), rgba(196,163,120,0.1))",
                          border: "1px solid rgba(196,163,120,0.25)",
                          boxShadow: "0 2px 12px rgba(196,163,120,0.08)",
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.055)",
                        }),
                  }}
                >
                  <RenderText text={msg.content} />
                </div>
              </div>
            ))}

            {/* ── Typing indicator ── */}
            {isLoading && (
              <div className="flex items-end gap-2.5">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(196,163,120,0.2), rgba(196,163,120,0.06))",
                    border: "1px solid rgba(196,163,120,0.2)",
                  }}
                >
                  <Bot className="size-3.5 text-[#C4A378]/80" strokeWidth={1.5} />
                </div>
                <div
                  className="px-4 py-3 rounded-2xl rounded-bl-sm"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.055)",
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}

            {/* ── Suggested questions ── */}
            {showSuggestions && messages.length === 1 && (
              <div className="flex flex-col gap-2 mt-1">
                <p
                  className="text-[10px] text-white/20 tracking-[0.18em] uppercase px-1"
                  style={{ fontFamily: "monospace" }}
                >
                  Quick questions
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="group text-left text-[11.5px] text-white/40 hover:text-white/80 rounded-xl px-3.5 py-2.5 transition-all duration-200 leading-snug"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(196,163,120,0.25)";
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(196,163,120,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.06)";
                        (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.025)";
                      }}
                    >
                      <ArrowUpRight className="size-3 text-[#C4A378]/40 group-hover:text-[#C4A378]/70 mb-1 transition-colors" />
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── Input area ── */}
          <div
            className="px-4 pb-4 pt-3 shrink-0"
            style={{ borderTop: "1px solid rgba(255,255,255,0.045)" }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2.5 rounded-xl px-4 py-3"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => ((e.currentTarget as HTMLFormElement).style.borderColor = "rgba(196,163,120,0.3)")}
              onBlur={(e) => ((e.currentTarget as HTMLFormElement).style.borderColor = "rgba(255,255,255,0.07)")}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about Avelon…"
                disabled={isLoading}
                className="flex-1 bg-transparent text-white/75 placeholder:text-white/20 text-[13px] outline-none disabled:opacity-40 leading-none"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed"
                style={{
                  background: input.trim() && !isLoading
                    ? "linear-gradient(135deg, #C4A378, #a8885e)"
                    : "rgba(196,163,120,0.1)",
                  boxShadow: input.trim() && !isLoading ? "0 2px 12px rgba(196,163,120,0.3)" : "none",
                }}
              >
                <Send className="size-3.5 text-[#0A0806]" strokeWidth={2} />
              </button>
            </form>

            {/* Brand footer */}
            <p
              className="text-center text-[9.5px] text-white/10 tracking-[0.2em] uppercase mt-2.5"
              style={{ fontFamily: "monospace" }}
            >
              Powered by Avelon Team
            </p>
          </div>
        </div>
      </div>

      {/* ── FAB Button ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle chat"
        className="fixed bottom-6 right-6 z-50 w-[58px] h-[58px] rounded-2xl flex items-center justify-center transition-all duration-300 group"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #111009, #0A0806)"
            : "linear-gradient(135deg, #C4A378, #a8885e)",
          border: isOpen ? "1px solid rgba(196,163,120,0.25)" : "1px solid transparent",
          boxShadow: isOpen
            ? "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(196,163,120,0.1)"
            : "0 8px 32px rgba(196,163,120,0.35), 0 2px 8px rgba(0,0,0,0.3)",
        }}
      >
        {isOpen ? (
          <X className="size-5 text-[#C4A378]" strokeWidth={2} />
        ) : (
          <Bot className="size-5 text-[#0A0806] group-hover:scale-110 transition-transform duration-200" strokeWidth={1.8} />
        )}

        {/* Pulse ring when closed */}
        {!isOpen && (
          <span
            className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ background: "#C4A378", animationDuration: "2.5s" }}
          />
        )}
      </button>
    </>
  );
}

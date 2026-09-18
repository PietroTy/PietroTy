import React, { useState, useEffect, useCallback, useMemo } from "react";
import { CONTACT_LINKS } from "../../data/contact";
import SectionHeader from "../common/SectionHeader";
import PixelIcon from "../common/PixelIcon";
import { fetchAvailableSlots, bookSlot, checkCalendarHealth, getOAuthLoginUrl } from "../../services/calendarService";

const contactConfigMap = {
  "E-mail": { iconName: "mail", color: "#c084fc" },
  "WhatsApp": { iconName: "message-text", color: "#a78bfa" },
  "LinkedIn": { iconName: "briefcase", color: "#8b5cf6" },
  "GitHub": { iconName: "code", color: "#7c3aed" },
  "Instagram": { iconName: "camera", color: "#6d28d9" },
  "Portfólio": { iconName: "briefcase", color: "#5b21b6" },
  "Chub": { iconName: "terminal", color: "#4c1d95" },
  "Spotify": { iconName: "headphone", color: "#a78bfa" }
};

const SUBJECTS_PT = [
  "Site / Landing Page",
  "Consultoria de Dados",
  "Automação de Processos",
  "Bot WhatsApp / Redes Sociais",
  "Freelance / Projeto",
  "Outro",
];
const SUBJECTS_EN = [
  "Website / Landing Page",
  "Data Consulting",
  "Process Automation",
  "WhatsApp Bot / Social Media",
  "Freelance / Project",
  "Other",
];

// ─── Booking Form States ──────────────────────────────────────────────────────
const STATE = {
  LOADING_SLOTS: "loading_slots",
  NO_AUTH: "no_auth",
  SLOT_ERROR: "slot_error",
  PICKING_SLOT: "picking_slot",
  FILLING_FORM: "filling_form",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  ERROR: "error",
};

function getCalendarDays(year, month) {
  const firstDayOfMonth = new Date(year, month, 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];

  // Prev month padding
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const prevDate = new Date(year, month - 1, daysInPrevMonth - i);
    calendarDays.push({
      dateObj: prevDate,
      dayNumber: daysInPrevMonth - i,
      isCurrentMonth: false,
      dateKey: prevDate.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" }),
    });
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    const curDate = new Date(year, month, d);
    calendarDays.push({
      dateObj: curDate,
      dayNumber: d,
      isCurrentMonth: true,
      dateKey: curDate.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" }),
    });
  }

  // Next month padding
  const remainingCells = (calendarDays.length > 35 ? 42 : 35) - calendarDays.length;
  for (let d = 1; d <= remainingCells; d++) {
    const nextDate = new Date(year, month + 1, d);
    calendarDays.push({
      dateObj: nextDate,
      dayNumber: d,
      isCurrentMonth: false,
      dateKey: nextDate.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" }),
    });
  }

  return calendarDays;
}

export default function ContactPage({ lang }) {
  const pt = lang === "pt";

  // Booking state machine
  const [bookState, setBookState] = useState(STATE.LOADING_SLOTS);
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [viewMonthDate, setViewMonthDate] = useState(new Date());
  const [selectedDateKey, setSelectedDateKey] = useState(null);

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Load slots automatically on mount
  const loadSlots = useCallback(async () => {
    setBookState(STATE.LOADING_SLOTS);
    setSlots([]);
    setSelectedSlot(null);
    try {
      const health = await checkCalendarHealth();
      if (health && (!health.ok || health.authenticated === false)) {
        if (health.reason === 'missing_credentials' || health.authenticated === false) {
          setBookState(STATE.NO_AUTH);
          return;
        }
      }
      const data = await fetchAvailableSlots(45);
      setSlots(data);
      setBookState(STATE.PICKING_SLOT);
    } catch (err) {
      if (err.message && err.message.includes('missing_credentials')) {
        setBookState(STATE.NO_AUTH);
      } else {
        setErrorMsg(err.message);
        setBookState(STATE.SLOT_ERROR);
      }
    }
  }, []);

  useEffect(() => {
    loadSlots();
  }, [loadSlots]);

  // Group slots by YYYY-MM-DD dateKey
  const slotsByDateMap = useMemo(() => {
    return slots.reduce((acc, slot) => {
      const dateKey = new Date(slot.start).toLocaleDateString("en-CA", {
        timeZone: "America/Sao_Paulo",
      });
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(slot);
      return acc;
    }, {});
  }, [slots]);

  // Auto select first date with available slots
  useEffect(() => {
    const availableDates = Object.keys(slotsByDateMap);
    if (availableDates.length > 0 && (!selectedDateKey || !slotsByDateMap[selectedDateKey])) {
      setSelectedDateKey(availableDates[0]);
    }
  }, [slotsByDateMap, selectedDateKey]);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setForm((f) => ({ ...f, subject: f.subject || (pt ? SUBJECTS_PT[0] : SUBJECTS_EN[0]) }));
    setBookState(STATE.FILLING_FORM);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !selectedSlot) return;

    setBookState(STATE.SUBMITTING);
    try {
      const res = await bookSlot({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject,
        message: form.message.trim(),
        start: selectedSlot.start,
        end: selectedSlot.end,
      });
      setResult(res);
      setBookState(STATE.SUCCESS);
    } catch (err) {
      setErrorMsg(err.message);
      setBookState(STATE.ERROR);
    }
  };

  const resetBooking = () => {
    setSelectedSlot(null);
    setForm({ name: "", email: "", subject: "", message: "" });
    setResult(null);
    setErrorMsg("");
    loadSlots();
  };

  // Calendar month rendering variables
  const currentYear = viewMonthDate.getFullYear();
  const currentMonth = viewMonthDate.getMonth();
  const calendarDays = useMemo(() => getCalendarDays(currentYear, currentMonth), [currentYear, currentMonth]);
  
  const monthTitle = viewMonthDate.toLocaleString(pt ? "pt-BR" : "en-US", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => setViewMonthDate(new Date(currentYear, currentMonth - 1, 1));
  const nextMonth = () => setViewMonthDate(new Date(currentYear, currentMonth + 1, 1));

  const todayKey = new Date().toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });

  const WEEKDAYS = pt
    ? ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const selectedDateSlots = selectedDateKey ? slotsByDateMap[selectedDateKey] || [] : [];

  return (
    <div className="page">
      <div className="section">
        <SectionHeader
          tag={pt ? "contato & agendamento" : "contact & scheduling"}
          title={pt ? <>Bora <em>conversar</em></> : <>Let's <em>connect</em></>}
        />

        {/* ─── TOP FEATURED SECTION: Interactive Google Calendar Widget ──────── */}
        <div className="contact-featured-calendar">
          <div className="calendar-top-header">
            <div>
              <h2 className="calendar-main-title">
                {pt ? "Agende uma reunião direta comigo" : "Schedule a direct call with me"}
              </h2>
              <p className="calendar-main-desc">
                {pt
                  ? "Escolha uma data e horário no calendário abaixo — a reunião é confirmada instantaneamente com link no Google Meet."
                  : "Pick a date and time slot in the calendar below — meetings are instantly confirmed with Google Meet link."}
              </p>
            </div>
          </div>

          {/* ── LOADING SLOTS ── */}
          {bookState === STATE.LOADING_SLOTS && (
            <div className="booking-loading">
              <PixelIcon name="reload" size={24} className="booking-spinner" />
              <span>{pt ? "Carregando agenda e horários disponíveis..." : "Loading calendar & available slots..."}</span>
            </div>
          )}

          {/* ── NO AUTH (VISITOR FALLBACK + ADMIN AUTH LINK) ── */}
          {bookState === STATE.NO_AUTH && (
            <div className="booking-error-state">
              <PixelIcon name="alert" size={32} className="booking-error-icon" style={{ color: "#a78bfa" }} />
              <p style={{ fontWeight: 600, color: "#ede9f8", fontSize: "1rem" }}>
                {pt ? "Agendamento online indisponível" : "Online booking unavailable"}
              </p>
              <p className="booking-error-sub">
                {pt
                  ? "A integração com o Google Calendar aguarda autorização. Você pode falar comigo diretamente no WhatsApp ou E-mail!"
                  : "Google Calendar integration is awaiting authorization. Feel free to contact me directly via WhatsApp or Email!"}
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", margin: "16px 0" }}>
                <a
                  href="https://wa.me/5511993427138"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-fill"
                  style={{ fontSize: "0.85rem", padding: "10px 20px" }}
                >
                  <PixelIcon name="message-text" size={16} /> WhatsApp
                </a>
                <a
                  href="mailto:pietro.turcimm@gmail.com"
                  className="btn btn-outline"
                  style={{ fontSize: "0.85rem", padding: "10px 20px" }}
                >
                  <PixelIcon name="mail" size={16} /> E-mail
                </a>
              </div>
              <div style={{ marginTop: "16px", paddingTop: "12px", borderTop: "1px dashed rgba(167, 139, 250, 0.2)", fontSize: "0.82rem" }}>
                <a
                  href={getOAuthLoginUrl()}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#c084fc", display: "inline-flex", alignItems: "center", gap: "6px", textDecoration: "none" }}
                >
                  <PixelIcon name="lock" size={14} /> {pt ? "Conectar Google Calendar (OAuth Admin)" : "Connect Google Calendar (OAuth Admin)"} <PixelIcon name="external-link" size={14} />
                </a>
              </div>
            </div>
          )}

          {/* ── SLOT ERROR ── */}
          {bookState === STATE.SLOT_ERROR && (
            <div className="booking-error-state">
              <PixelIcon name="alert" size={32} className="booking-error-icon" />
              <p>{pt ? "Não foi possível carregar os horários da agenda." : "Could not load available slots."}</p>
              <p className="booking-error-sub">{errorMsg}</p>
              <button className="btn btn-outline" onClick={loadSlots}>
                <PixelIcon name="reload" size={16} /> {pt ? "Tentar novamente" : "Try again"}
              </button>
            </div>
          )}

          {/* ── PICKING SLOT (REAL MONTH CALENDAR GRID) ── */}
          {bookState === STATE.PICKING_SLOT && (
            <div className="calendar-interactive-box">
              {/* Month Navigation Controls */}
              <div className="calendar-nav-controls">
                <button className="calendar-nav-btn" onClick={prevMonth}>
                  <PixelIcon name="chevron-left" size={16} /> {pt ? "Anterior" : "Prev"}
                </button>
                <div className="calendar-month-title">{monthTitle}</div>
                <button className="calendar-nav-btn" onClick={nextMonth}>
                  {pt ? "Próximo" : "Next"} <PixelIcon name="chevron-right" size={16} />
                </button>
              </div>

              {/* Month Grid */}
              <div className="calendar-grid-wrapper">
                {WEEKDAYS.map((w) => (
                  <div key={w} className="calendar-weekday-header">
                    {w}
                  </div>
                ))}

                {calendarDays.map((cell, idx) => {
                  const daySlots = slotsByDateMap[cell.dateKey] || [];
                  const hasSlots = daySlots.length > 0;
                  const isSelected = cell.dateKey === selectedDateKey;
                  const isPast = cell.dateKey < todayKey;

                  return (
                    <button
                      key={idx}
                      className={[
                        "calendar-day-cell",
                        !cell.isCurrentMonth ? "other-month" : "",
                        isPast ? "is-past" : "",
                        hasSlots ? "has-slots" : "",
                        isSelected ? "selected" : "",
                      ].filter(Boolean).join(" ")}
                      disabled={!hasSlots || isPast}
                      onClick={() => setSelectedDateKey(cell.dateKey)}
                    >
                      <span>{cell.dayNumber}</span>
                      {hasSlots && <span className="calendar-slot-indicator"></span>}
                    </button>
                  );
                })}
              </div>

              {/* Time Slots Section for Selected Date */}
              {selectedDateKey && (
                <div className="calendar-time-section">
                  <div className="calendar-time-title">
                    <PixelIcon name="clock" size={18} style={{ color: "#c084fc" }} />
                    <span>
                      {pt ? "Horários livres em " : "Available slots on "}
                      <strong style={{ color: "#c084fc" }}>
                        {new Date(selectedDateKey + "T12:00:00").toLocaleDateString(pt ? "pt-BR" : "en-US", {
                          timeZone: "America/Sao_Paulo",
                          weekday: "long",
                          day: "2-digit",
                          month: "long",
                        })}
                      </strong>:
                    </span>
                  </div>

                  {selectedDateSlots.length === 0 ? (
                    <p className="booking-no-slots">
                      {pt ? "Selecione outro dia destacado no calendário acima." : "Select another highlighted day above."}
                    </p>
                  ) : (
                    <div className="calendar-time-chips">
                      {selectedDateSlots.map((slot) => (
                        <button
                          key={slot.start}
                          className="calendar-chip"
                          onClick={() => handleSlotSelect(slot)}
                        >
                          {new Date(slot.start).toLocaleTimeString("en-US", {
                            timeZone: "America/Sao_Paulo",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ── FILLING FORM ── */}
          {bookState === STATE.FILLING_FORM && selectedSlot && (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="booking-selected-slot">
                <PixelIcon name="calendar" size={16} />
                <span>
                  {new Date(selectedSlot.start).toLocaleDateString(pt ? "pt-BR" : "en-US", {
                    timeZone: "America/Sao_Paulo",
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                  })} — {new Date(selectedSlot.start).toLocaleTimeString("en-US", {
                    timeZone: "America/Sao_Paulo",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <button type="button" className="booking-change-slot" onClick={() => setBookState(STATE.PICKING_SLOT)}>
                  {pt ? "mudar data" : "change date"}
                </button>
              </div>

              <div className="booking-form-grid">
                <div className="booking-field">
                  <label className="booking-label">
                    <PixelIcon name="user" size={14} className="booking-field-icon" />
                    {pt ? "Seu nome *" : "Your name *"}
                  </label>
                  <input
                    className="booking-input"
                    type="text"
                    placeholder={pt ? "Nome completo" : "Full name"}
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    required
                  />
                </div>

                <div className="booking-field">
                  <label className="booking-label">
                    <PixelIcon name="mail" size={14} className="booking-field-icon" />
                    {pt ? "E-mail *" : "Email *"}
                  </label>
                  <input
                    className="booking-input"
                    type="email"
                    placeholder="email@exemplo.com"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div className="booking-field">
                <label className="booking-label">
                  <PixelIcon name="briefcase" size={14} className="booking-field-icon" />
                  {pt ? "Assunto *" : "Subject *"}
                </label>
                <select
                  className="booking-input booking-select"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  required
                >
                  {(pt ? SUBJECTS_PT : SUBJECTS_EN).map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="booking-field">
                <label className="booking-label">
                  <PixelIcon name="notes" size={14} className="booking-field-icon" />
                  {pt ? "Mensagem (opcional)" : "Message (optional)"}
                </label>
                <textarea
                  className="booking-input booking-textarea"
                  placeholder={pt ? "Conte um pouco sobre o projeto ou objetivo da conversa..." : "Tell me a bit about your project..."}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={3}
                />
              </div>

              <div className="booking-actions">
                <button type="submit" className="btn btn-fill booking-submit-btn">
                  <PixelIcon name="calendar" size={16} />
                  {pt ? "Confirmar agendamento no Google Calendar" : "Confirm booking on Google Calendar"}
                </button>
                <button type="button" className="booking-cancel-link" onClick={() => setBookState(STATE.PICKING_SLOT)}>
                  {pt ? "← Voltar ao calendário" : "← Back to calendar"}
                </button>
              </div>
            </form>
          )}

          {/* ── SUBMITTING ── */}
          {bookState === STATE.SUBMITTING && (
            <div className="booking-loading">
              <PixelIcon name="reload" size={24} className="booking-spinner" />
              <span>{pt ? "Gerando evento e link do Google Meet..." : "Creating Google Meet event..."}</span>
            </div>
          )}

          {/* ── SUCCESS ── */}
          {bookState === STATE.SUCCESS && result && (
            <div className="booking-success">
              <PixelIcon name="check" size={40} className="booking-success-icon" />
              <h4>{pt ? "Reunião Agendada com Sucesso!" : "Meeting Successfully Booked!"}</h4>
              <p>
                {pt
                  ? "Um e-mail de confirmação com o convite da reunião e o link do Google Meet foi enviado."
                  : "A confirmation email with the meeting invitation and Google Meet link has been sent."}
              </p>
              {result.meetLink && (
                <a
                  href={result.meetLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-fill"
                  style={{ marginTop: "0.75rem", display: "inline-flex", gap: "8px", alignItems: "center" }}
                >
                  <PixelIcon name="external-link" size={16} /> {pt ? "Abrir Link do Google Meet" : "Open Google Meet Link"}
                </a>
              )}
              <button className="booking-cancel-link" onClick={resetBooking} style={{ marginTop: "1rem" }}>
                {pt ? "Agendar outra conversa" : "Schedule another call"}
              </button>
            </div>
          )}

          {/* ── ERROR ── */}
          {bookState === STATE.ERROR && (
            <div className="booking-error-state">
              <PixelIcon name="alert" size={32} className="booking-error-icon" />
              <p>{pt ? "Erro ao confirmar o agendamento." : "Error confirming booking."}</p>
              <p className="booking-error-sub">{errorMsg}</p>
              <button className="btn btn-outline" onClick={() => setBookState(STATE.FILLING_FORM)}>
                {pt ? "Tentar novamente" : "Try again"}
              </button>
            </div>
          )}
        </div>

        {/* ─── LOWER SECTION: Info & Social Contact Links ──────────────────── */}
        <div className="contact-lower-grid">
          <div className="contact-info-col">
            <h3 className="contact-lower-title">{pt ? "Outras formas de contato" : "Other ways to connect"}</h3>
            <p className="contact-pitch">
              {pt
                ? "Tem uma ideia de projeto, precisa de consultoria em inteligência artificial, engenharia de dados ou automações? Me chame em qualquer um dos canais abaixo."
                : "Have a project idea, need AI consulting, data engineering, or process automation? Reach out on any channel below."}
            </p>

            <div className="contact-meta-list">
              <div className="contact-meta-item">
                <PixelIcon name="clock" size={20} className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Resposta rápida" : "Fast response"}</strong>
                  <br />
                  <span>{pt ? "Retorno em até 24 horas úteis." : "Replies within 24 business hours."}</span>
                </div>
              </div>
              <div className="contact-meta-item">
                <PixelIcon name="pin" size={20} className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Localização" : "Location"}</strong>
                  <br />
                  <span>São Paulo — SP ({pt ? "Remoto ou Híbrido" : "Remote or Hybrid"})</span>
                </div>
              </div>
              <div className="contact-meta-item">
                <PixelIcon name="briefcase" size={20} className="contact-meta-icon" />
                <div>
                  <strong>{pt ? "Serviços e Contratos" : "Services & Contracts"}</strong>
                  <br />
                  <span>{pt ? "Disponível para consultoria e contratos PJ." : "Available for consulting and B2B contracts."}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-social-col">
            <div className="contact-grid">
              {CONTACT_LINKS.map((l) => {
                const config = contactConfigMap[l.namePt] || { iconName: "mail", color: "#c084fc" };
                return (
                  <a
                    key={l.nameEn}
                    className="clink"
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ "--contact-color": config.color }}
                  >
                    <div className="clink-icon-wrapper">
                      <PixelIcon name={config.iconName} size={20} className="clink-icon" />
                    </div>
                    <div className="clink-info">
                      <span className="clink-name">{pt ? l.namePt : l.nameEn}</span>
                      <span className="clink-handle">{pt ? l.handlePt : l.handleEn}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

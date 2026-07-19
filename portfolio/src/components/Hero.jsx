import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chips = ["REACT", "NODE.JS", "EXPRESS", "MONGODB"];

function TicketCard() {
  const [number, setNumber] = useState(7);
  const [chipIndex, setChipIndex] = useState(0);
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      setNumber((n) => n + 1);
      setTime(new Date());
    }, 4000);
    const chipTick = setInterval(() => {
      setChipIndex((i) => (i + 1) % chips.length);
    }, 1800);
    return () => {
      clearInterval(tick);
      clearInterval(chipTick);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -1.5 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, y: -4 }}
      className="relative w-full max-w-[320px] rounded-[3px] p-6"
      style={{
        background: "var(--paper-raised)",
        border: "1px solid var(--line-strong)",
        boxShadow: "0 24px 48px -24px rgba(28,26,22,0.28)",
      }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "var(--ink-dim)" }}>
          NEXTUP · TICKET
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: "var(--brass-ink)" }}>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--brass)", boxShadow: "0 0 0 3px rgba(169,130,47,0.15)" }}
          />
          LIVE
        </span>
      </div>

      <div className="mb-8">
        <span className="block font-mono text-[10px] mb-1" style={{ color: "var(--ink-faint)" }}>
          NOW SERVING
        </span>
        <span key={number} className="font-display text-6xl tabular-nums leading-none">
          {number}
        </span>
      </div>

      <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--line)" }}>
        <span className="font-mono text-[10px]" style={{ color: "var(--ink-faint)" }}>
          {chips[chipIndex]}
        </span>
        <span className="font-mono text-[10px]" style={{ color: "var(--ink-faint)" }}>
          {time.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
        </span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-8 md:px-16 pt-24 lg:pt-0">
      <div className="grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center w-full max-w-6xl mx-auto">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="block font-mono text-[11px] tracking-[0.18em] mb-6"
            style={{ color: "var(--brass-ink)" }}
          >
            FULL-STACK DEVELOPER · MERN
          </motion.span>

          <h1 className="font-display text-[13vw] leading-[0.95] lg:text-[5vw] tracking-tight">
            {"Software,".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
            <br />
            {"built".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 + 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em] italic"
                style={{ color: "var(--brass-ink)" }}
              >
                {word}
              </motion.span>
            ))}
            <br />
            {"thoughtfully.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-8 max-w-md text-[16px] leading-relaxed"
            style={{ color: "var(--ink-dim)" }}
          >
            Computer Science graduate focused on building modern web applications with React, Node.js, Express, MongoDB, and AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            <a
              href="#work"
              className="font-mono text-[12px] tracking-[0.1em] pb-1 border-b"
              style={{ borderColor: "var(--ink)" }}
            >
              VIEW SELECTED WORK
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] tracking-[0.1em] pb-1 border-b"
              style={{ borderColor: "var(--brass-ink)", color: "var(--brass-ink)" }}
            >
              RESUME ↓
            </a>
            <a
              href="#contact"
              className="font-mono text-[12px] tracking-[0.1em]"
              style={{ color: "var(--ink-dim)" }}
            >
              GET IN TOUCH →
            </a>
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <TicketCard />
        </div>
      </div>
    </section>
  );
}
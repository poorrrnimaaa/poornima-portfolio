import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

const links = [
  { id: "work", label: "Selected work" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Rail({ active, onNavigate }) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex flex-col justify-between fixed left-0 top-0 h-screen w-[260px] px-8 py-10 z-30"
      style={{ background: "var(--rail-bg)", color: "var(--rail-text)" }}
    >
      <div>
        <a href="#hero" className="block mb-14 group">
          <span className="font-display text-2xl tracking-tight">Poornima</span>
          <span
            className="block mt-1 text-[11px] font-mono uppercase tracking-[0.18em]"
            style={{ color: "var(--rail-text-dim)" }}
          >
            Full-stack developer
          </span>
        </a>

        <nav className="flex flex-col gap-1">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="group flex items-baseline gap-3 py-2 text-left transition-colors"
            >
              <span
                className="font-mono text-[11px] tabular-nums transition-colors"
                style={{
                  color: active === link.id ? "var(--brass)" : "var(--rail-text-dim)",
                }}
              >
                0{i + 1}
              </span>
              <span
                className="text-[15px] transition-colors"
                style={{
                  color: active === link.id ? "var(--rail-text)" : "var(--rail-text-dim)",
                }}
              >
                {link.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-6">
          <a
            href="https://github.com/poorrrnimaaa"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href="https://linkedin.com/in/poornimadeveloper"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <LinkedinIcon size={16} />
          </a>
          <a href="#contact" aria-label="Email" className="opacity-70 hover:opacity-100 transition-opacity">
            <Mail size={16} strokeWidth={1.5} />
          </a>
        </div>
        <p className="font-mono text-[10px] tracking-wide" style={{ color: "var(--rail-text-dim)" }}>
          LUCKNOW, IN — GMT+5:30
        </p>
      </div>
    </motion.aside>
  );
}

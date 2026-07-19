import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-end">
        <div>
          <span className="font-mono text-[11px] tracking-[0.18em]" style={{ color: "var(--brass-ink)" }}>
            CONTACT
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-5xl md:text-6xl mt-4 tracking-tight"
          >
            Looking for my first
            <br />
            software engineering role.
          </motion.h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
            Fresher SDE and full-stack positions, MERN-first. Happy to talk through
            any of the projects above in more depth architecture decisions,
            what I'd change, what I'd do again.
          </p>
        </div>

        <div className="flex flex-col gap-4 lg:items-end">
          <a
            href="mailto:poornima9437@gmail.com"
            className="font-mono text-[13px] pb-1 border-b w-fit"
            style={{ borderColor: "var(--ink)" }}
          >
            EMAIL →
          </a>
          <div className="flex gap-5">
            <a
              href="https://github.com/poorrrnimaaa"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[12px]"
              style={{ color: "var(--ink-dim)" }}
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/poornimadeveloper"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 font-mono text-[12px]"
              style={{ color: "var(--ink-dim)" }}
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div
        className="mt-24 pt-8 flex justify-between font-mono text-[10px]"
        style={{ borderTop: "1px solid var(--line)", color: "var(--ink-faint)" }}
      >
        <span>POORNIMA — LUCKNOW, INDIA</span>
      </div>
    </section>
  );
}

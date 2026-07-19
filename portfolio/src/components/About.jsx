import { motion } from "framer-motion";

const facts = [
  { label: "LOCATION", value: "Lucknow, India" },
  { label: "EDUCATION", value: "B.Tech, Computer Science and Engineering : 2022–2026" },
  { label: "INSTITUTION", value: "Babu Banarasi Das University, Lucknow" },
  { label: "CERTIFICATION", value: "GRAStech Full Stack Development, 2025" },
  { label: "FOCUS", value: "MERN — React, Node, Express, MongoDB" },
];

export default function About() {
  return (
    <section id="about" className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <span className="font-mono text-[11px] tracking-[0.18em]" style={{ color: "var(--brass-ink)" }}>
            ABOUT
          </span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display italic text-3xl md:text-4xl leading-snug mt-6 max-w-xl"
          >
            "I like the part of software that users never notice unless it stops working."
          </motion.blockquote>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed" style={{ color: "var(--ink-dim)" }}>
            Both projects explore different problems, but they share the same goal: building reliable systems beneath clean, intuitive interfaces. I'm interested in the engineering that keeps applications dependable when real users start using them.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          {facts.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-baseline justify-between py-4"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              <span className="font-mono text-[10px] tracking-[0.12em]" style={{ color: "var(--ink-faint)" }}>
                {f.label}
              </span>
              <span className="text-[14px] text-right">{f.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

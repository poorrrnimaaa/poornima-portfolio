import { useState } from "react";
import { motion } from "framer-motion";

const layers = [
  { label: "Languages", items: ["JavaScript"] },
  { label: "Frontend", items: ["React.js", "HTML", "CSS", "Bootstrap", "Axios"] },
  { label: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { label: "Database", items: ["MongoDB", "MongoDB Atlas", "Mongoose"] },
  { label: "Authentication", items: ["JWT"] },
  { label: "Real-Time", items: ["Socket.io"] },
  { label: "AI Integration", items: ["Google Gemini API"] },
  { label: "Deployment", items: ["Vercel", "Render"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman", "MongoDB Compass", "VS Code"] },
];

export default function Stack() {
  const [active, setActive] = useState(null);

  return (
    <section id="stack" className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <span className="font-mono text-[11px] tracking-[0.18em]" style={{ color: "var(--brass-ink)" }}>
        STACK
      </span>
      <h2 className="font-display text-4xl md:text-5xl mt-3 mb-14 tracking-tight max-w-lg">
        The layers, roughly in the order a request passes through them.
      </h2>

      <div className="flex flex-col gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group relative rounded-[3px] px-6 py-6 cursor-default overflow-hidden"
            style={{
              background: active === i ? "var(--ink)" : "var(--paper-raised)",
              border: "1px solid var(--line)",
              transition: "background 0.4s ease",
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="font-display text-2xl transition-colors"
                style={{ color: active === i ? "var(--paper)" : "var(--ink)" }}
              >
                {layer.label}
              </span>
            </div>

            <motion.div
              initial={false}
              animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 pt-0 overflow-hidden"
            >
              <div className="flex flex-wrap gap-2 pt-5">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid rgba(237,235,228,0.22)", color: "var(--paper)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectPreview from "./ProjectPreview";

function ProjectRow({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative grid lg:grid-cols-2 gap-10 items-center py-16"
      style={{
        borderBottom: "1px solid var(--line)",
      }}
    >
      {/* Left Content */}
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="flex items-baseline gap-3 mb-3">
          <span
            className="font-mono text-[11px]"
            style={{ color: "var(--ink-faint)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className="font-mono text-[11px] tracking-wide"
            style={{ color: "var(--ink-faint)" }}
          >
            {project.period}
          </span>
        </div>

        <h3 className="font-display text-4xl md:text-5xl mb-4 tracking-tight">
          {project.name}
        </h3>

        <p
          className="text-[15px] italic mb-4"
          style={{ color: "var(--brass-ink)" }}
        >
          {project.tagline}
        </p>

        <p
          className="text-[15px] leading-relaxed max-w-md mb-6"
          style={{ color: "var(--ink-dim)" }}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
          {project.stats.map((stat) => (
            <div key={stat.label}>
              <span className="block font-display text-2xl leading-none">
                {stat.value}
              </span>

              <span
                className="font-mono text-[10px]"
                style={{ color: "var(--ink-faint)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2.5 py-1 rounded-full"
              style={{
                border: "1px solid var(--line-strong)",
                color: "var(--ink-dim)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 flex-wrap">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5 font-mono text-[12px]"
              style={{
                background: "var(--ink)",
                color: "var(--paper)",
              }}
            >
              GitHub ↗
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-md transition-all duration-300 hover:-translate-y-0.5 font-mono text-[12px]"
              style={{
                border: "1px solid var(--line-strong)",
                color: "var(--ink)",
              }}
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>

      {/* Right Preview */}
      <div className={reversed ? "lg:order-1" : ""}>
        <ProjectPreview
          image={project.image}
          video={project.video}
          title={project.name}
          url={project.url}
        />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const displayedProjects = projects
    .filter(
      (project) =>
        project.id === "pitchperfect" ||
        project.id === "nextup"
    )
    .sort((a, b) => {
      const order = {
        pitchperfect: 0,
        nextup: 1,
      };

      return order[a.id] - order[b.id];
    });

  return (
    <section
      id="work"
      className="px-8 md:px-16 py-32 max-w-6xl mx-auto"
    >
      <div className="mb-16">
        <span
          className="font-mono text-[11px] tracking-[0.18em]"
          style={{ color: "var(--brass-ink)" }}
        >
          SELECTED WORK
        </span>

        <h2 className="font-display text-4xl md:text-5xl mt-3 tracking-tight max-w-xl">
          Applications focused on performance, usability, and real-world problem solving.
        </h2>
      </div>

      <div>
        {displayedProjects.map((project, index) => (
          <ProjectRow
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
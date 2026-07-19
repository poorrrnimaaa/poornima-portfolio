export default function MobileNav({ active, onNavigate }) {
  const links = [
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <div
      className="lg:hidden fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-4"
      style={{ background: "var(--rail-bg)", color: "var(--rail-text)" }}
    >
      <a href="#hero" className="font-display text-lg">
        Poornima
      </a>
      <nav className="flex gap-4">
        {links.map((l) => (
          <button
            key={l.id}
            onClick={() => onNavigate(l.id)}
            className="font-mono text-[10px] tracking-wide"
            style={{ color: active === l.id ? "var(--brass, #a9822f)" : "var(--rail-text-dim)" }}
          >
            {l.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

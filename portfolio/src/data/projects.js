export const projects = [
  {
    id: "nextup",
    name: "NextUp",
    tagline: "A digital queue that never loses your place.",
    description:
      "A real-time queue management system built for walk-in services — issuing tickets, tracking position live, and giving staff role-based control over who's called next.",
    period: "Nov 2025 — Apr 2026",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas", "Role-based access"],
    stats: [
      { label: "REST endpoints", value: "10" },
      { label: "Access model", value: "RBAC" },
    ],
    url: "next-up-zeta.vercel.app/",
    image: "nextup/screenshot.jpeg",
    video: "nextup/demo.mp4",
    github: "https://github.com/poorrrnimaaa/nextup",
    demo: "https://next-up-zeta.vercel.app/",
    accent: "brass",
  },
  {
    id: "pitchperfect",
    name: "PitchPerfect",
    tagline: "Practice the interview before it counts.",
    description:
      "An AI-powered interview rehearsal platform. Candidates run a pitch session, get scored across five dimensions by Gemini, and track improvement across a saved history.",
    period: "May — Jul 2026",
    stack: ["React", "Zustand", "Node.js", "Express", "MongoDB Atlas", "Google Gemini AI", "JWT auth"],
    stats: [
      { label: "REST endpoints", value: "08" },
      { label: "Scoring dimensions", value: "05" },
    ],
    url: "pitch-perfect-black.vercel.app/",
    image: "pitchperfect/screenshot.jpeg",
    video: "pitchperfect/demo.mp4",
    github: "https://github.com/poorrrnimaaa/pitchperfect",
    demo: "https://pitch-perfect-black.vercel.app",
    accent: "violet",
  },
];

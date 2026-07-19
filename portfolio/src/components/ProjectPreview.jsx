import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

/**
 * Reusable browser-chrome preview with screenshot -> video crossfade on hover.
 * Desktop: hover 250ms -> video fades in and autoplays muted/looped.
 * Mobile/touch: screenshot only + "Play demo" button opening a fullscreen modal.
 */
export default function ProjectPreview({ image, video, title, url }) {
  const [hovering, setHovering] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [ratio, setRatio] = useState(16 / 10);
  const videoRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsTouch(!mq.matches);
  }, []);

  function handleEnter() {
    if (isTouch || !video) return;
    setHovering(true);
    timeoutRef.current = setTimeout(() => {
      setShowVideo(true);
      videoRef.current?.play().catch(() => {});
    }, 250);
  }

  function handleLeave() {
    if (isTouch) return;
    setHovering(false);
    clearTimeout(timeoutRef.current);
    setShowVideo(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <>
      <motion.div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        animate={{ y: hovering && !isTouch ? -4 : 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative rounded-[6px] overflow-hidden"
        style={{
          border: "1px solid var(--line)",
          background: "var(--paper-raised)",
          boxShadow:
            hovering && !isTouch
              ? "0 32px 60px -24px rgba(28,26,22,0.32)"
              : "0 16px 40px -24px rgba(28,26,22,0.2)",
          transition: "box-shadow 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid var(--line)", background: "var(--paper)" }}
        >
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--line-strong)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--line-strong)" }} />
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--line-strong)" }} />
          </span>
          <span className="font-mono text-[10px] ml-2 truncate" style={{ color: "var(--ink-faint)" }}>
            {url}
          </span>
        </div>

        <div
          className="relative w-full"
          style={{ aspectRatio: ratio, background: "var(--paper)" }}
        >
          <AnimatePresence>
            {!showVideo && (
              <motion.img
                key="image"
                src={image}
                alt={`${title} preview`}
                loading="lazy"
                onLoad={(e) => {
                  const { naturalWidth, naturalHeight } = e.target;
                  if (naturalWidth && naturalHeight) {
                    // Clamp so an unusually tall or wide capture doesn't distort the card grid.
                    const raw = naturalWidth / naturalHeight;
                    setRatio(Math.min(Math.max(raw, 0.75), 16 / 9));
                  }
                }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </AnimatePresence>

          {video && (
            <motion.video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="metadata"
              animate={{ opacity: showVideo ? 1 : 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          )}

          {isTouch && video && (
            <button
              onClick={() => setModalOpen(true)}
              className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px]"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              <Play size={11} fill="currentColor" /> Play demo
            </button>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(20,22,26,0.9)" }}
            onClick={() => setModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6"
              style={{ color: "var(--paper)" }}
              onClick={() => setModalOpen(false)}
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <video
              src={video}
              autoPlay
              controls
              playsInline
              className="max-w-full max-h-full rounded-[4px]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
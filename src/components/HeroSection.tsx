import { motion } from "framer-motion";
import { celebration, heroHighlights } from "@/data/celebration";

const floatingHearts = Array.from({ length: 24 }, (_, index) => index);

const heartConfigs = floatingHearts.map((index) => {
  const size = 14 + ((index * 19) % 24);
  const top = (index * 37) % 100;
  const left = (index * 53) % 100;
  const direction = index % 3 === 0 ? 35 : -28;
  return { size, top, left, direction };
});

export function HeroSection() {
  const handleScrollToGallery = () => {
    const section = document.getElementById("gallery");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ padding: "8rem 0 6rem", position: "relative" }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <p style={{ color: "var(--highlight)", letterSpacing: "0.35em", fontSize: "0.85rem", textTransform: "uppercase" }}>
          Happy Birthday
        </p>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
            lineHeight: 1.05,
            margin: "1.5rem 0",
            maxWidth: "12ch"
          }}
          className="text-gradient"
        >
          {`Happy Birthday, ${celebration.partnerName}!`}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "35rem", fontSize: "1.15rem", lineHeight: 1.9 }}>
          {celebration.heroMessage}
        </p>
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <button type="button" className="button-primary" onClick={handleScrollToGallery}>
            See our magic in photos 💖
          </button>
          <a
            href="#love-notes"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 1.5rem",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "var(--text-primary)",
              background: "rgba(15,5,29,0.65)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 18px 35px rgba(9,10,36,0.35)"
            }}
          >
            Read the love letters ✨
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginTop: "3.5rem"
          }}
        >
          {heroHighlights.map((item, index) => (
            <motion.div
              key={item}
              className="glass-card"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              style={{
                padding: "1.5rem",
                minHeight: "140px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "var(--text-secondary)",
                fontSize: "1rem",
                lineHeight: 1.6
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 1,
          pointerEvents: "none"
        }}
        aria-hidden="true"
      >
        {heartConfigs.map((heart, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.2, 0.4, 0.15],
              y: [0, -80, 0],
              x: [0, heart.direction, 0]
            }}
            transition={{ duration: 12 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              background: "linear-gradient(135deg, rgba(255,113,198,0.6), rgba(125,137,255,0.6))",
              clipPath: "path('M24 9.5C24 5.36 20.64 2 16.5 2C14 2 11.79 3.24 10.5 5.14C9.21 3.24 7 2 4.5 2C0.36 2 -3 5.36 -3 9.5C-3 17.33 10.5 26 10.5 26C10.5 26 24 17.33 24 9.5Z')",
              top: `${heart.top}%`,
              left: `${heart.left}%`,
              filter: "blur(0.3px)"
            }}
          />
        ))}
      </div>
    </header>
  );
}

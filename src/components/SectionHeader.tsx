import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header" style={{ textAlign: "center", marginBottom: "3rem" }}>
      {eyebrow ? (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            display: "inline-flex",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            background: "rgba(255, 113, 198, 0.14)",
            color: "var(--highlight)",
            fontSize: "0.85rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1rem"
          }}
        >
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
          marginBottom: subtitle ? "1rem" : 0,
          fontWeight: 700
        }}
        className="text-gradient"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
          style={{
            maxWidth: "650px",
            margin: "0 auto",
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            lineHeight: 1.7
          }}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

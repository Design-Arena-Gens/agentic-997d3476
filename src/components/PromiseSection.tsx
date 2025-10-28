import { motion } from "framer-motion";
import { celebration } from "@/data/celebration";

export function PromiseSection() {
  return (
    <section style={{ paddingBottom: "8rem" }}>
      <motion.div
        className="promise-card glass-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <p className="promise-eyebrow">My promise to you</p>
          <h2 className="promise-title text-gradient">Forever, we keep choosing us</h2>
          <p className="promise-body">{celebration.promise}</p>
        </motion.div>
        <motion.div
          className="promise-footer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.65, delay: 0.18 }}
        >
          <span>With all the love in the world,</span>
          <strong>Your Person</strong>
        </motion.div>
      </motion.div>

      <style jsx>{`
        .promise-card {
          position: relative;
          overflow: hidden;
          padding: clamp(3rem, 5vw, 4.5rem);
          text-align: center;
        }

        .promise-card::after {
          content: "";
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.25), transparent 60%);
          opacity: 0.35;
        }

        .promise-card * {
          position: relative;
          z-index: 2;
        }

        .promise-eyebrow {
          letterSpacing: 0.28em;
          textTransform: uppercase;
          fontSize: 0.85rem;
          color: rgba(255, 255, 255, 0.55);
          margin-bottom: 1rem;
        }

        .promise-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(2.5rem, 5vw, 3.2rem);
          margin-bottom: 1.5rem;
        }

        .promise-body {
          color: var(--text-secondary);
          max-width: 44rem;
          margin: 0 auto;
          font-size: 1.15rem;
          line-height: 1.9;
        }

        .promise-footer {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 2.5rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .promise-footer strong {
          font-family: "Playfair Display", serif;
          font-size: 1.4rem;
          letter-spacing: 0.08em;
        }
      `}</style>
    </section>
  );
}

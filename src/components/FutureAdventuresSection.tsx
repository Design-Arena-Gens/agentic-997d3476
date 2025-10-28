import { motion } from "framer-motion";
import { adventures } from "@/data/adventures";
import { SectionHeader } from "@/components/SectionHeader";

export function FutureAdventuresSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Future Plans"
        title="Adventures Waiting for Us"
        subtitle="A bucket list crafted for the kind of love that deserves fireworks, poetry, and delicious mischief."
      />

      <div className="adventure-grid">
        {adventures.map((adventure, index) => (
          <motion.div
            key={adventure.title}
            className="adventure-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.09, ease: "easeOut" }}
          >
            <div className="adventure-index">0{index + 1}</div>
            <h3>{adventure.title}</h3>
            <p>{adventure.description}</p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .adventure-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.8rem;
        }

        .adventure-card {
          padding: 2.2rem;
          position: relative;
          overflow: hidden;
        }

        .adventure-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 113, 198, 0.12), rgba(125, 137, 255, 0.08));
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .adventure-card:hover::before {
          opacity: 1;
        }

        .adventure-card * {
          position: relative;
        }

        .adventure-index {
          font-family: "Playfair Display", serif;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.25);
          margin-bottom: 1.2rem;
        }

        .adventure-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }

        .adventure-card p {
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </section>
  );
}

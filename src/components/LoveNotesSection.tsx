import { motion } from "framer-motion";
import { loveNotes } from "@/data/loveNotes";
import { SectionHeader } from "@/components/SectionHeader";

export function LoveNotesSection() {
  return (
    <section id="love-notes">
      <SectionHeader
        eyebrow="Heart to Heart"
        title="Open Letters for Your Special Day"
        subtitle="Every word is a tiny celebration of the way you brighten rooms, conversations, and lives."
      />

      <div className="notes-grid">
        {loveNotes.map((note, index) => (
          <motion.article
            key={note.heading}
            className="note-card glass-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
          >
            <h3>{note.heading}</h3>
            <p>{note.message}</p>
          </motion.article>
        ))}
      </div>

      <style jsx>{`
        .notes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.8rem;
        }

        .note-card {
          padding: 2.2rem;
          position: relative;
          overflow: hidden;
        }

        .note-card::after {
          content: "";
          position: absolute;
          inset: -30%;
          background: radial-gradient(circle at 20% 20%, rgba(125, 137, 255, 0.18), transparent 66%);
          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .note-card:hover::after {
          opacity: 1;
        }

        .note-card h3 {
          font-family: "Playfair Display", serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          position: relative;
        }

        .note-card p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1.05rem;
          position: relative;
        }
      `}</style>
    </section>
  );
}

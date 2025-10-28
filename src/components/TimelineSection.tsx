import { motion } from "framer-motion";
import { memories } from "@/data/memories";
import { SectionHeader } from "@/components/SectionHeader";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export function TimelineSection() {
  return (
    <section>
      <SectionHeader
        eyebrow="Storyline"
        title="Moments that Made Us"
        subtitle="A love story written in coffee dates, soft confessions, and the quiet certainty that this is it."
      />
      <motion.div className="timeline" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
        <div className="timeline-line" />
        {memories.map((memory, index) => (
          <motion.article key={memory.title} className="timeline-card glass-card" variants={itemVariants}>
            <span className="timeline-pill">{memory.year}</span>
            <h3>{memory.title}</h3>
            <p>{memory.description}</p>
            <div className="timeline-glow" />
          </motion.article>
        ))}
      </motion.div>
      <style jsx>{`
        .timeline {
          position: relative;
          display: grid;
          gap: 2.5rem;
        }

        .timeline-line {
          position: absolute;
          left: 1.75rem;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, rgba(255, 113, 198, 0), rgba(255, 113, 198, 0.4), rgba(125, 137, 255, 0));
        }

        .timeline-card {
          padding: 2rem;
          padding-left: 4.5rem;
          position: relative;
          overflow: hidden;
        }

        .timeline-pill {
          position: absolute;
          left: 0.9rem;
          top: 2rem;
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem 1rem;
          border-radius: 999px;
          background: rgba(255, 113, 198, 0.2);
          color: var(--highlight);
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .timeline-card h3 {
          font-family: "Playfair Display", serif;
          font-size: 1.8rem;
          margin-bottom: 0.6rem;
        }

        .timeline-card p {
          color: var(--text-secondary);
          line-height: 1.75;
          font-size: 1rem;
        }

        .timeline-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 20% 20%, rgba(255, 113, 198, 0.25), transparent 55%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .timeline-card:hover .timeline-glow {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 1.2rem;
          }

          .timeline-card {
            padding: 1.6rem;
            padding-left: 3.5rem;
          }

          .timeline-card h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}

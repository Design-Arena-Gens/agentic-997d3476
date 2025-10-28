import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryImage } from "@/lib/gallery";
import { SectionHeader } from "@/components/SectionHeader";

type GallerySectionProps = {
  images: GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="gallery">
      <SectionHeader
        eyebrow="Our Gallery"
        title={<span>Love Frozen in Stolen Glances</span>}
        subtitle="Drop your favorite photos inside the public/gallery folder and they will appear here automatically with dreamy animations."
      />

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.figure
            key={image.src}
            className="gallery-card glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: index * 0.05, ease: "easeOut" }}
          >
            <div className="image-wrapper">
              <Image
                src={image.src}
                alt={`Memory ${index + 1}`}
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index < 2}
              />
            </div>
            <figcaption>
              <div>
                <span>{`Moment ${index + 1}`}</span>
                <em>{image.filename}</em>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <style jsx>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.75rem;
        }

        .gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
          padding: 0.75rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.45s ease, box-shadow 0.45s ease;
        }

        .gallery-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 60px rgba(13, 8, 35, 0.55);
        }

        .image-wrapper {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
        }

        figcaption {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
        }

        figcaption em {
          font-style: normal;
          color: rgba(255, 255, 255, 0.32);
          font-size: 0.75rem;
        }

        @media (max-width: 640px) {
          .gallery-grid {
            gap: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}

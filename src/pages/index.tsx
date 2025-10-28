import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { GallerySection } from "@/components/GallerySection";
import { TimelineSection } from "@/components/TimelineSection";
import { LoveNotesSection } from "@/components/LoveNotesSection";
import { FutureAdventuresSection } from "@/components/FutureAdventuresSection";
import { PromiseSection } from "@/components/PromiseSection";
import { loadGalleryImages, type GalleryImage } from "@/lib/gallery";

type HomePageProps = {
  galleryImages: GalleryImage[];
};

const fallbackImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-1.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-2.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1474465562312-6792cfd3c44c?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-3.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-4.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-5.jpg"
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    width: 900,
    height: 1200,
    filename: "unsplash-love-6.jpg"
  }
];

export default function HomePage({ galleryImages }: HomePageProps) {
  return (
    <Layout>
      <HeroSection />
      <GallerySection images={galleryImages} />
      <TimelineSection />
      <LoveNotesSection />
      <FutureAdventuresSection />
      <PromiseSection />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const images = await loadGalleryImages();

  return {
    props: {
      galleryImages: images.length > 0 ? images : fallbackImages
    }
  };
};

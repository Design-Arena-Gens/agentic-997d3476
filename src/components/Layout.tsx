import Head from "next/head";
import { ReactNode } from "react";
import { celebration } from "@/data/celebration";
import { AuroraBackground } from "@/components/AuroraBackground";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const title = `Happy Birthday, ${celebration.partnerName} ✨`;
  const description = "A handcrafted digital love letter with photo memories, love notes, and future adventures.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/glow/petal-light.svg" />
      </Head>
      <AuroraBackground>
        <main>
          <div style={{ width: "min(1100px, 92vw)", margin: "0 auto" }}>{children}</div>
        </main>
      </AuroraBackground>
    </>
  );
}

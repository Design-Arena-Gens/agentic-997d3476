import { motion } from "framer-motion";
import { ReactNode } from "react";

type AuroraBackgroundProps = {
  children: ReactNode;
};

const lights = [
  { hue: "rgba(255, 113, 198, 0.38)", top: "-20%", left: "-10%" },
  { hue: "rgba(125, 137, 255, 0.35)", top: "10%", right: "-15%" },
  { hue: "rgba(255, 229, 125, 0.38)", bottom: "-25%", left: "30%" }
];

export function AuroraBackground({ children }: AuroraBackgroundProps) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {lights.map((light, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.35, scale: 0.9 }}
            animate={{
              opacity: [0.25, 0.45, 0.32],
              scale: [1, 1.12, 0.95],
              rotate: [0, 15, -8]
            }}
            transition={{ duration: 16 + index * 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "60vw",
              height: "60vw",
              borderRadius: "40%",
              filter: "blur(120px)",
              background: light.hue,
              mixBlendMode: "screen",
              ...light
            }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.15, 0.3, 0.18] }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: "-20%",
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15), transparent 55%)"
          }}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}

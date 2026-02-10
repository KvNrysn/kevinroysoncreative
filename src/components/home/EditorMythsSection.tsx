import { useState } from "react";
import { motion } from "framer-motion";

import mythRetention from "@/assets/myth-retention.jpg";
import mythPacing from "@/assets/myth-pacing.jpg";
import mythVisuals from "@/assets/myth-visuals.jpg";
import mythMusic from "@/assets/myth-music.jpg";

const myths = [
  {
    image: mythRetention,
    title: "Most editors optimize for looks, not retention",
    detail:
      'Visual polish can make a video feel "high quality," but it doesn\'t fix why viewers stop watching halfway through.',
    span: "md:col-span-1 md:row-span-1",
  },
  {
    image: mythPacing,
    title: "Clean cuts do not mean good pacing",
    detail:
      "Even with clean edits, poor pacing causes important ideas to arrive too late after viewers have already left.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    image: mythVisuals,
    title: "Choice of visuals determines whether viewers trust the creator",
    detail:
      "Visuals that support what's being said build credibility, while random or mismatched visuals quietly break trust.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    image: mythMusic,
    title: "Adding music doesn't automatically keep viewers engaged",
    detail:
      "Music supports pacing, but emotion requires music strategy and alignment with visual.",
    span: "md:col-span-1 md:row-span-1",
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function EditorMythsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Good Editing ≠ Conversion
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {myths.map((myth, i) => {
            const isHovered = hovered === i;

            return (
              <motion.div
                key={i}
                variants={cardVariant}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-primary/30 ${myth.span}`}
                style={{ minHeight: "280px" }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={myth.image}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isHovered ? "scale(1.08)" : "scale(1)",
                    }}
                    loading="lazy"
                  />
                  {/* Dark overlay gradient - stronger at bottom for text readability */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isHovered
                        ? "linear-gradient(180deg, hsl(220 25% 4% / 0.3) 0%, hsl(220 25% 4% / 0.85) 60%, hsl(220 25% 4% / 0.95) 100%)"
                        : "linear-gradient(180deg, hsl(220 25% 4% / 0.4) 0%, hsl(220 25% 4% / 0.8) 50%, hsl(220 25% 4% / 0.92) 100%)",
                    }}
                  />
                </div>

                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, hsl(200 100% 50% / 0.1) 0%, transparent 70%)",
                  }}
                />

                {/* Animated scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-px pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(200 100% 50% / 0.4), transparent)",
                  }}
                  animate={
                    isHovered
                      ? { top: ["20%", "80%", "20%"], opacity: [0, 1, 0] }
                      : { top: "50%", opacity: 0 }
                  }
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Content overlapping the image, anchored to bottom */}
                <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {myth.title}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={
                      isHovered
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.7, y: 4 }
                    }
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    {myth.detail}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Make the Value Clear Early",
    detail:
      "I focus on giving signal why the message of the video matters early, so viewers understand the value of continuing before dropping off.",
    height: "h-[340px] md:h-[400px]",
    hoverHeight: "h-[370px] md:h-[440px]",
  },
  {
    title: "Build Trust Through Visual Alignment",
    detail:
      "I use visuals and pacing to support what the creator is saying, helping viewers trust the message instead of questioning it.",
    height: "h-[280px] md:h-[340px]",
    hoverHeight: "h-[310px] md:h-[380px]",
  },
  {
    title: "Maintain Mental Engagement Throughout",
    detail:
      "I manage pacing, structure, and visual changes that keep viewers mentally attached and ready to absorb each point.",
    height: "h-[220px] md:h-[280px]",
    hoverHeight: "h-[250px] md:h-[320px]",
  },
];

export function EditingDecisionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            The Approach
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            The 3 Editing Decisions
            <br />
            <span className="text-muted-foreground">That Shape Every Video</span>
          </h2>
        </motion.div>

        <div className="flex items-end justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => {
            const isHovered = hoveredIndex === i;
            const isOtherHovered = hoveredIndex !== null && hoveredIndex !== i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative flex-1 rounded-t-2xl border border-border border-b-0
                  bg-card/60 backdrop-blur-sm p-5 md:p-6
                  flex flex-col justify-end
                  transition-all duration-500 ease-out cursor-default
                  ${isHovered ? pillar.hoverHeight : pillar.height}
                  ${isOtherHovered ? "opacity-40" : "opacity-100"}
                  ${isHovered ? "border-primary/40 z-10" : ""}
                `}
              >
                {/* Glow on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-t-2xl pointer-events-none transition-opacity duration-500
                    ${isHovered ? "opacity-100" : "opacity-0"}
                  `}
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(200 100% 50% / 0.08) 0%, transparent 60%)",
                  }}
                />

                {/* Top accent line */}
                <div
                  className={`
                    absolute top-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-500
                    ${isHovered ? "w-3/4 bg-primary/60" : "w-1/4 bg-border"}
                  `}
                />

                {/* Feathered bottom edge */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, hsl(220 25% 4%) 100%)",
                  }}
                />

                {/* Step number - more opaque */}
                <motion.span
                  animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                  className="text-5xl md:text-6xl font-bold text-primary/25 mb-auto pt-2"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                {/* Content at bottom */}
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <motion.p
                    initial={false}
                    animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 4 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs md:text-sm text-muted-foreground leading-relaxed"
                  >
                    {pillar.detail}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

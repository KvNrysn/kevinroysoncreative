import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import oneOffBefore from "@/assets/one-off-before.webp";
import oneOffAfter from "@/assets/one-off-after.webp";
import retainerProjects from "@/assets/retainer-ongoing-project.webp";
import retainerData from "@/assets/retainer-channel-data.webp";
import growthAudit from "@/assets/growth-audit.webp";

interface OfferDetail {
  title: string;
  images: { src: string; alt: string; label?: string }[];
  sections: { heading: string; content: string }[];
  bullets: string[];
  featured?: boolean;
}

const offers: OfferDetail[] = [
  {
    title: "One-off Long-Form Video",
    featured: true,
    images: [
      { src: oneOffBefore, alt: "Simple Premiere Pro timeline before editing", label: "Before" },
      { src: oneOffAfter, alt: "Complex Premiere Pro timeline after editing", label: "After" },
    ],
    sections: [
      {
        heading: "What this is for",
        content:
          "Designed for creators who want to test workflow, alignment, and editing direction before committing to a monthly retainer.",
      },
      {
        heading: "How it's approached",
        content:
          "Editing decisions prioritize retention and message clarity. Focusing on structure, pacing shifts, and visual support rather than surface-level polish.",
      },
      {
        heading: "What to expect after",
        content:
          "You'll receive a cleaner, more intentional long-form video and a clear understanding of how the workflow and editing approach fit your content. This phase is about alignment, not immediate performance changes.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want to validate fit, quality, and process before scaling output through a retainer.",
      },
    ],
    bullets: [
      "Full long-form edit",
      "Clarity-focused structure and pacing decisions",
      "Retention-aware editing choices",
      "Clear delivery timeline",
      "YouTube Thumbnail",
    ],
  },
  {
    title: "Retainer Long-Form Video",
    images: [
      { src: retainerProjects, alt: "Multiple video projects in ongoing workflow" },
      { src: retainerData, alt: "Channel analytics showing improvement over time" },
    ],
    sections: [
      {
        heading: "What this is for",
        content:
          "This is for creators who are ready to commit to long-term improvement and judge performance based on patterns alongside data, not single uploads.",
      },
      {
        heading: "How it's approached",
        content:
          "Editing decisions are informed by ongoing performance data, audience behavior, and feedback loops. Each month, we review what's working, test new structural and pacing adjustments, and refine execution based on real viewer response.",
      },
      {
        heading: "What to expect over time",
        content:
          "You'll gain consistency in output, clearer creative direction, and measurable insight into what your audience rewards. Improvements are evaluated across multiple uploads, allowing informed iteration instead of one-off guesses.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want to improve retention, clarity, and channel performance through repeatable testing and long-term collaboration. Not isolated edits.",
      },
    ],
    bullets: [
      "Everything in One-off",
      "Scheduling priority",
      "Faster delivery",
      "Weekly video performance analysis (creative related)",
      "Monthly performance & planning meeting",
      "Frame.io access and workflow",
    ],
  },
  {
    title: "Growth Audit",
    images: [
      { src: growthAudit, alt: "Video performance analysis with annotations on retention graph" },
    ],
    sections: [
      {
        heading: "What this is for",
        content:
          "This is an early diagnosis for creators who want clarity on what to fix before investing time or money into full production changes.",
      },
      {
        heading: "How it's approached",
        content:
          "The video is reviewed from a creative and structural standpoint. Focusing on retention drops, pacing issues, trust signals, and message clarity relative to your goal (sponsors, conversions, or audience growth). The audit looks for leverage points, not surface-level polish.",
      },
      {
        heading: "What you'll get",
        content:
          "You'll receive a clear breakdown of what's holding the video back, why it matters, and which changes are most likely to improve performance if implemented consistently. This is insight, not execution.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want direction before editing, testing, or committing to a one-off or retainer workflow.",
      },
    ],
    bullets: [
      "Retention + trust factor analysis",
      "Pacing improvement recommendations",
      "Conversion-focused plan",
      "30–60 sec mini re-edit + breakdown",
    ],
  },
];

export function ExpandedOffersSection() {
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
            Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Each Offer Includes
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-32">
          {offers.map((offer, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative rounded-2xl border p-6 md:p-10 overflow-hidden ${
                  offer.featured
                    ? "border-primary/30 bg-card/40 backdrop-blur-sm shadow-[0_0_60px_-15px_hsl(var(--primary)/0.15)]"
                    : "border-border bg-card/30 backdrop-blur-sm"
                }`}
              >
                {/* Subtle featured indicator */}
                {offer.featured && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles size={16} className="text-primary/40" />
                    </motion.div>
                  </>
                )}

                {/* Offer Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold text-foreground mb-8 md:mb-10"
                >
                  {offer.title}
                </motion.h3>

                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-12 items-start`}
                >
                  {/* Images */}
                  <div className="w-full md:w-1/2 space-y-6">
                    {offer.images.map((img, imgIdx) => (
                      <motion.div
                        key={imgIdx}
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + imgIdx * 0.15 }}
                        whileHover={{ scale: 1.03 }}
                        className="transition-transform duration-300 cursor-default"
                      >
                        {img.label && (
                          <span
                            className={`inline-block text-xs font-semibold uppercase tracking-wider mb-2 ${
                              img.label === "After" ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {img.label}
                          </span>
                        )}
                        <div
                          className={`rounded-xl overflow-hidden border ${
                            img.label === "After" ? "border-primary/30" : "border-border"
                          }`}
                        >
                          <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-auto object-contain"
                            loading="lazy"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-6">
                    {offer.sections.map((section, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + sIdx * 0.08 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="transition-all duration-300 cursor-default"
                      >
                        <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                          {section.heading}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {section.content}
                        </p>
                      </motion.div>
                    ))}

                    {/* Bullet points from card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="pt-4 border-t border-border/50"
                    >
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                        Included
                      </h4>
                      <ul className="space-y-2">
                        {offer.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check size={14} className="text-primary shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

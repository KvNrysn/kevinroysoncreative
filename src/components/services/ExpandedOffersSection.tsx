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
          "For creators who want to test alignment before committing to a long-term partnership. This validates workflow, direction, and creative fit.",
      },
      {
        heading: "How it's approached",
        content:
          "Editing decisions are driven by retention and clarity — not just polish. We focus on structure, pacing shifts, and reinforcing key moments so the message lands and holds attention.",
      },
      {
        heading: "What to expect after",
        content:
          "You’ll walk away with a stronger, more intentional long-form video and a clear sense of how the process fits your channel. This stage is about alignment, not long-term optimization.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want to evaluate quality and collaboration before scaling into a retainer.",
      },
    ],
    bullets: [
      "Full long-form edit",
      "Structure and pacing optimization",
      "Retention-aware editing decisions",
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
          "For creators ready to build predictable performance not judge results by single uploads. This is for channels committed to long-term structural improvement and data-informed iteration.",
      },
      {
        heading: "How it's approached",
        content:
          "Editing decisions are guided by ongoing performance signals, audience behavior, and pattern tracking. Each month, we review what’s working, identify drop-off points, test structural and pacing refinements, and evolve the format intentionally not randomly. This is optimization through repetition, not guesswork.",
      },
      {
        heading: "What to expect over time",
        content:
          "You gain consistency in output, clearer creative direction, and measurable insight into what your audience actually rewards. Performance is evaluated across multiple uploads, allowing informed adjustments instead of reactive changes. Over time, the channel becomes more stable not just occasionally successful.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want to improve retention, clarity, and overall channel performance through repeatable testing and structured collaboration. Not isolated edits. Not one-off experiments.",
      },
    ],
    bullets: [
      "Everything in the One-off package",
      "Priority scheduling",
      "Faster turnaround",
      "Ongoing retention & performance review (creative-focused)",
      "Monthly performance and planning session",
      "Structured workflow via Frame.io",
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
          "For creators who want clarity before committing to production changes. This is a structural diagnosis not an edit. It identifies where performance is leaking and what’s worth fixing first.",
      },
      {
        heading: "How it's approached",
        content:
          "The video is reviewed from a retention, clarity, and conversion standpoint. We analyze attention drop-offs, pacing rhythm, message anchoring, and structural friction relative to your channel’s goals (audience growth, authority, sponsor performance). The focus is leverage points, not surface polish.",
      },
      {
        heading: "What you'll get",
        content:
          "You receive a structured breakdown covering: What’s holding performance back, Why it matters, Which changes would likely create the highest impact, How to approach implementation strategically. This is insight and direction not execution.",
      },
      {
        heading: "When this makes sense",
        content:
          "If you want to make informed decisions before investing in a one-off edit or retainer. Or if you want objective clarity on what’s limiting your current content performance.",
      },
    ],
    bullets: [
      "Retention & trust-factor analysis",
      "Pacing and structure improvement recommendations",
      "Conversion and clarity alignment suggestions",
      "30–60 second mini re-edit demonstration with breakdown",
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
            What You’re Actually Getting
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

        {/* Custom Service Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-sm text-muted-foreground">
              If your needs don’t fit these structures, feel free to request a customized solution.
            </p>
          </motion.div>
        </div>
    </section>
  );
}

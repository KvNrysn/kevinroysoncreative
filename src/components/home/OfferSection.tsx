import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const offers = [
  {
    title: "Growth Audit",
    price: "$199",
    unit: "/audit",
    clarify:
      "Strategic breakdown to identify structural gaps before scaling",
    bullets: [
      "Retention & trust pattern analysis",
      "Structural pacing review",
      "Conversion/sponsor segment evaluation plan",
      "Clear improvement roadmap",
      "30–60 sec structural re-edit example + breakdown",
    ],
    featured: false,
  },
  {
    title: "One-off Long-Form Video",
    price: "$499",
    unit: "/video",
    clarify: "Best for testing workflow before moving into ongoing partnership",
    bullets: [
      "Full long-form structural edit",
      "Clarity-driven pacing decisions",
      "Retention-aware visual sequencing",
      "Defined delivery timeline",
      "Strategic YouTube thumbnail",
    ],
    featured: true,
  },
  {
    title: "Retainer Long-Form Video",
    price: "$1.99k",
    unit: "/mo",
    clarify: "Built for consistent publishing and sponsor-backed growth",
    bullets: [
      "Everything included in One-off",
      "Prioriy scheduling & turnaround",
      "Structured editing framework across uploads",
      "Ongoing creative-side performance review",
      "Monthly planning & alignment call",
      "Frame.io workflow & project tracking",
    ],
    featured: false,
  },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function OfferSection() {
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
            Offers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How We Can Work Together
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 items-end max-w-5xl mx-auto"
        >
          {offers.map((offer, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              className="flex flex-col"
            >
              {/* Card */}
              <div
                className={`
                  relative rounded-2xl border p-6 flex flex-col transition-all duration-300
                  ${
                    offer.featured
                      ? "border-primary/40 bg-card/80 backdrop-blur-sm shadow-glow md:py-10 md:px-8 z-10 min-h-[420px]"
                      : "border-border bg-card/50 backdrop-blur-sm hover:border-border/80 min-h-[340px]"
                  }
                `}
              >
                {/* Featured glow */}
                {offer.featured && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, hsl(200 100% 50% / 0.08) 0%, transparent 60%)",
                    }}
                  />
                )}

                {/* Badge for featured */}
                {offer.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Starter
                  </span>
                )}

                <div className="relative z-10">
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {offer.title}
                  </h3>

                  <div className="mb-5">
                    <span className="text-2xl md:text-3xl font-bold text-foreground">
                      {offer.price}
                    </span>
                    <span className="text-muted-foreground text-sm ml-1">
                      {offer.unit}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2.5">
                    {offer.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check size={14} className="text-primary shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Clarifying text outside and below card */}
              <p className="text-xs text-muted-foreground/70 leading-relaxed text-center mt-3 px-2">
                {offer.clarify}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-12 text-center"
        >
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Reach Out to Get Started
          </Button>
        </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Need something customized? Feel free to request a tailored solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

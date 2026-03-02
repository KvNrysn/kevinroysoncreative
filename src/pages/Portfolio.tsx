import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Authority Educational Edit",
    embedUrl: "https://www.youtube.com/embed/DTDii2ZxQ0c",
    bullets: [
      "Structured delivery to sustain authority throughout long-form runtime",
      "Engineered screen visuals to reinforce trust and expertise",
      "Highlighted value moments to maximize perceived depth",
    ],
  },
  {
    id: 2,
    title: "High-Retention Momentum Edit",
    embedUrl: "https://www.youtube.com/embed/7cWOMVxpuoc",
    bullets: [
      "Designed opening sequence to capture and stabilize early retention",
      "Integrated proof elements at psychological inflection points",
      "Controlled pattern interruptions to maintain sustained engagement",
    ],
  },
  {
    id: 3,
    title: "Authority-Driven Narrative Edit",
    embedUrl: "https://www.youtube.com/embed/vt17rXY7wrg",
    bullets: [
      "Rebuilt the narrative structure to eliminate weak retention valleys",
      "Engineered visual reinforcement to anchor key authority moments",
      "Structured chapters to control pacing and guide viewer psychology",
    ],
  },
  {
    id: 4,
    title: "Conversion-Focused Case Study Edit",
    embedUrl: "https://www.youtube.com/embed/Qs4uKpEmm3o",
    bullets: [
      "Structured introduction to immediately establish authority and stakes",
      "Reinforced claims with visual proof architecture",
      "Directed viewer focus during demonstrations to reduce friction",
    ],
  },
  {
    id: 5,
    title: "Strategic Product Positioning Edit",
    embedUrl: "https://www.youtube.com/embed/fkf5-WI_rtQ",
    bullets: [
      "Clarified complex product mechanisms without reducing perceived value",
      "Controlled pacing to prevent cognitive overload",
      "Directed attention toward revenue-driving features",
    ],
  },
];

export default function Portfolio() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 whitespace-nowrap"
          >
            Strategic YouTube Editing for Authority & Scalable Growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto whitespace-nowrap"
          >
            Long-form YouTube systems engineered to increase retention, elevate positioning, and turn viewers into buyers.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Items - Alternating Layout */}
      <section className="section-padding pt-0">
        <div className="container-main space-y-16 md:space-y-24">
          {portfolioItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl border border-border bg-card/30 backdrop-blur-sm p-6 md:p-10 overflow-hidden"
              >
                <div
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Video Embed */}
                  <div className="w-full md:w-1/2">
                    <div className="aspect-video rounded-xl overflow-hidden border border-border bg-background/50 shadow-lg">
                      <iframe
                        src={item.embedUrl}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-1/2 space-y-5">
                    <h3 className="text-2xl md:text-3xl font-bold text-muted-foreground">
                      {item.title}
                    </h3>
                    <ul className="space-y-3">
                      {item.bullets.map((bullet, bIndex) => (
                        <motion.li
                          key={bIndex}
                          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + bIndex * 0.1 }}
                          whileHover={{
                            scale: 1.03,
                            x: 6,
                          }}
                          className="flex items-start gap-3 text-muted-foreground cursor-default group transition-colors duration-300 hover:text-foreground"
                        >
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-primary/50 shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
                          <span className="text-sm md:text-base leading-relaxed">
                            {bullet}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8 whitespace-normal md:whitespace-nowrap text-sm md:text-base">
              If this approach aligns with how you want your content handled, let's talk about your project.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

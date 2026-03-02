import { motion } from "framer-motion";
import { MinusCircle, ArrowRight } from "lucide-react";

const disqualifiers = [
  "Fast, flashy edits without structural thinking",
  "An editor who executes without challenging what improves retention",
  "Short-term viral spikes over consistent audience growth",
  "The lowest-cost option instead of a long-term partner",
];

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

export function BeforeYouDecideSection() {
  return (
    <section className="section-padding">
      <div className="container-main max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Fit Check
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Before You Commit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            This approach works best for creators focused on clarity, retention, and long-term channel performance
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          {disqualifiers.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariant}
              className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-300 hover:border-border hover:bg-card/50"
            >
              <MinusCircle
                size={18}
                className="text-muted-foreground/50 shrink-0 mt-0.5"
              />
              <span className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 justify-center text-center"
        >
          <ArrowRight size={16} className="text-primary shrink-0" />
          <p className="text-foreground font-medium leading-relaxed">
            My focus is building content systems that audiences trust and that scale without losing consistency
          </p>
        </motion.div>
      </div>
    </section>
  );
}

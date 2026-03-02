import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Alignment & Direction",
    description:
      "We start with a focused call or structured brief to clarify your goals, audience profile, and content positioning. This defines pacing expectations, structural priorities, and what “success” looks like before editing begins. No guessing. No assumptions.",
  },
  {
    number: "02",
    title: "Footage & Asset Handoff",
    description:
      "Raw footage, references, and notes are shared through a centralized workspace. Keeping assets and communication organized from the start reduces friction and speeds up execution. Clarity early prevents revisions later.",
  },
  {
    number: "03",
    title: "Structured Editing & Creative Decisions",
    description:
      "Edits are built around retention, clarity, and message reinforcement not just visual polish. Every pacing shift, visual reset, and emphasis point is intentional. If we’re testing new structural approaches, they’re implemented strategically not randomly.",
  },
  {
    number: "04",
    title: "Focused Feedback & Refinement",
    description:
      "Feedback is centered on clarity and outcome, not endless micro-adjustments. Revisions are structured to strengthen the message and retention flow. For ongoing clients, discussions happen directly inside Frame.io to keep iteration fast and organized.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    badge: "Retainers Only",
    description:
      "Performance data from previous uploads informs future decisions. We identify repeatable patterns, refine structural elements, and evolve pacing based on real audience behavior. The goal is not isolated improvements it’s consistent performance across uploads.",
  },
];

export function WorkflowTimelineSection() {
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
            Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How the Process Works
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative flex gap-6 md:gap-8"
            >
              {/* Left: Number + Connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-12 h-12 rounded-xl border border-border bg-card/50 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent my-2" />
                )}
              </div>

              {/* Right: Content */}
              <div className={`pb-12 ${index === steps.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  {step.badge && (
                    <span className="px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
                      {step.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

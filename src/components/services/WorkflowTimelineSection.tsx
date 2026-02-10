import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Onboarding & Alignment",
    description:
      "We start with a short call or written brief to understand your goals, audience, and current workflow. This sets expectations on pacing, structure, and creative direction before editing begins.",
  },
  {
    number: "02",
    title: "Footage & Asset Handoff",
    description:
      "You send raw footage, references, and notes through a shared workspace. This keeps assets, context, and communication centralized from the start.",
  },
  {
    number: "03",
    title: "Editing & Decision-Making",
    description:
      "Edits are made with structure, pacing, and message delivery in mind. Creative decisions are intentional, especially when testing changes from previous content or evolving a format.",
  },
  {
    number: "04",
    title: "Feedback & Revisions",
    description:
      "Feedback is structured and focused on clarity and intent rather than endless micro-tweaks. For ongoing clients, revisions and discussions happen directly inside Frame.io to keep iterations fast and organized.",
  },
  {
    number: "05",
    title: "Ongoing Optimization",
    badge: "Retainers Only",
    description:
      "For retainers, performance insights from past videos inform future edits. Patterns are identified, ideas are tested, and improvements are evaluated over time using the channel's own data.",
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
            How Working Together Looks Like
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

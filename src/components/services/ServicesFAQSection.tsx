import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "What's included in a one-off edit?",
    a: "A complete long-form edit built around structure, pacing, and message clarity. This includes intentional visual reinforcement and the level of polish required for professional delivery. The focus is execution and alignment not just aesthetic upgrades.",
  },
  {
    q: " How does the retainer structure work month-to-month?",
    a: "Retainers are structured around a defined monthly volume and publishing cadence. Each cycle includes execution, performance review, and structural refinement based on patterns across uploads not single-video results. The goal is consistent output and measurable improvement over time.",
  },
  {
    q: "How many revisions are included?",
    a: "Revisions are handled collaboratively and with clear direction. Once alignment is established, most projects require minimal adjustments. The focus is meaningful improvements to clarity and structure not endless micro-edits.",
  },
  {
    q: "What do you need from me before starting?",
    a: "Raw footage, the objective of the video, and any relevant references or assets. We begin with a short alignment phase to clarify goals, audience, and positioning. From there, the editing process follows a structured workflow.",
  },
  {
    q: "How is performance measured during retainers?",
    a: "Performance is evaluated against the primary metric defined at the start whether that’s retention, average view duration, conversions, subscriber growth, or overall channel momentum. Each month, we review how those metrics moved, identify what caused improvements or declines, and adjust structure accordingly. Decisions are based on recurring patterns across uploads not isolated spikes.",
  },
  {
    q: "Can I move from a one-off into a retainer later?",
    a: "Yes and it’s often recommended. Starting with a one-off allows us to test workflow alignment and creative direction. Once that foundation is clear, transitioning into a retainer enables performance to be evaluated properly across multiple uploads.",
  },
  {
    q: "Do you offer growth audits separately?",
    a: "Yes. Growth audits are available as a standalone diagnostic for creators who want clarity before committing to ongoing editing. Retainer clients receive ongoing performance reviews as part of the collaboration.",
  },
];

export function ServicesFAQSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-border bg-background px-6 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

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
    a: "A complete long-form edit focused on structure, pacing, and clarity. This includes visual reinforcement and polish needed for a professional final delivery.",
  },
  {
    q: "How do retainers work?",
    a: "Retainers are customized based on volume and cadence. They're designed for creators who want consistent output and a stable editing workflow alongside actual result data",
  },
  {
    q: "How many revisions are included?",
    a: "Revisions are handled collaboratively and reasonably. Most projects don't require many once direction is clear.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Raw footage, references (if any), real asset(if any), and the goal of the video. Everything else is handled through the editing process.",
  },
  {
    q: "What platforms do you edit for?",
    a: "Primarily YouTube long-form, with content optimized for clarity and retention on that platform.",
  },
  {
    q: "Do you offer growth audits separately?",
    a: "Yes. Growth audits are available for creators who want clarity on what to improve before committing to ongoing editing. Retainers gets a monthly growth audit meeting/recording depends on preference.",
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

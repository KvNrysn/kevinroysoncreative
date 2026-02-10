import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "How long does a typical edit take?",
    a: "Turnaround depends on video length and complexity, but most long-form edits are delivered within a few days once everything is aligned. Retainers clients of course get a faster turnaround due to scheduling priority.",
  },
  {
    q: "Do I work directly with you?",
    a: "Yes. You'll be working directly with me on editing decisions, feedback, and direction.",
  },
  {
    q: "Is this one-off or ongoing?",
    a: "Both. Many creators start with a one-off edit to see workflow fit first and then move to retainers for actual result.",
  },
  {
    q: "What kind of creators is this best for?",
    a: "This works best for business-focused creators who care about clarity, retention, and long-term audience trust. Not quick viral edits.",
  },
  {
    q: "Do you handle thumbnails as well?",
    a: "I work with another thumbnail designer to give thumbnail(backed with data for retainer clients) for every project, but the core focus is always the video itself.",
  },
  {
    q: "Is this guaranteed to increase views or retention?",
    a: "No guarantees. Editing supports performance, but results also depend on the idea, delivery, and audience. My role is to make the content as clear and watchable as possible. Editing result may only be judged after working with retainers, it cannot be judged working only with a one-off project.",
  },
];

export function FAQSection() {
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

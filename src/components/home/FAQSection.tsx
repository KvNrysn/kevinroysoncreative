import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    q: "How long does a typical long-form edit take?",
    a: "Turnaround depends on length and complexity, but most projects are delivered within 3–5 days once assets are aligned. Retainer clients receive scheduling priority and more consistent turnaround.",
  },
  {
    q: "Do I work directly with you?",
    a: "Yes. You work directly with me on structure, pacing decisions, and creative direction. No middle layers. No outsourcing surprises.",
  },
  {
    q: "How do you approach retention and performance?",
    a: "I don’t approach editing as just \“making it look good.\”Each video is structured around attention flow, clarity, and reinforcement of key moments. I look at pacing shifts, visual resets, and message anchoring not just cuts and animations. Over time, we refine patterns based on what your audience consistently responds to.",
  },
  {
    q: "Is this a good fit for early-stage creators?",
    a: "Yes if you’re serious about building long-term authority. This works best for creators who see content as a business asset, not a viral experiment. If you're committed to improving structure and consistency early, the growth compounds faster. If you’re looking for quick viral tricks, this isn’t the right fit.",
  },
  {
    q: "What does the ongoing partnership actually include?",
    a: "The retainer isn’t just “more edits.”It includes: Structured long-form edits, Consistent pacing framework, Thumbnail collaboration, Creative performance feedback, Priority scheduling, Ongoing structural refinement across uploads. The goal is not one good video it’s predictable performance over time.",
  },
  {
    q: "Do you guarantee performance results?",
    a: "No guarantees because performance depends on the idea, positioning, and audience. My role is to maximize clarity, retention, and structural strength. Results compound over multiple uploads, which is why performance is best evaluated through ongoing work rather than a single video.",
  },
  {
    q: "How many ongoing clients do you take on?",
    a: "I keep a limited number of ongoing partnerships to maintain quality and direct involvement. Once capacity is full, new retainers open only when a slot becomes available.",
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

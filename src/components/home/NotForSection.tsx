import { motion } from "framer-motion";
import { X } from "lucide-react";

const notForItems = [
  "Fast, flashy edits with no regard for structure or clarity",
  "Someone to blindly follow instructions without questioning what helps retention",
  "One-off viral tricks instead of long-term content improvement",
  "The cheapest option available",
];

export function NotForSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
              Honest Fit Check
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Who This is Not For
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10">
            <p className="text-muted-foreground mb-8 text-center">
              This is probably not a fit if you're looking for:
            </p>

            <div className="space-y-5">
              {notForItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X size={14} className="text-destructive" />
                  </div>
                  <p className="text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm text-muted-foreground text-center border-t border-border pt-6"
            >
              I work best with creators who care about message, pacing, and
              building trust over time.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

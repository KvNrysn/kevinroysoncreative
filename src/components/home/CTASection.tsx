import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto rounded-2xl border border-primary/30 bg-card/80 backdrop-blur-sm p-10 md:p-14 text-center overflow-hidden"
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              background: [
                "radial-gradient(ellipse at 30% 20%, hsl(200 100% 50% / 0.1) 0%, transparent 60%)",
                "radial-gradient(ellipse at 70% 80%, hsl(200 100% 50% / 0.1) 0%, transparent 60%)",
                "radial-gradient(ellipse at 30% 20%, hsl(200 100% 50% / 0.1) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Animated horizontal light beams */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent, hsl(200 100% 50% / 0.5), transparent)",
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleX: [0.5, 1, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating diamond shapes */}
          <motion.div
            className="absolute w-3 h-3 border border-primary/20 pointer-events-none"
            style={{ top: "15%", left: "10%", transform: "rotate(45deg)" }}
            animate={{
              y: [-8, 8, -8],
              opacity: [0.2, 0.5, 0.2],
              rotate: [45, 135, 45],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-2 h-2 border border-primary/15 pointer-events-none"
            style={{ top: "70%", right: "15%", transform: "rotate(45deg)" }}
            animate={{
              y: [6, -6, 6],
              opacity: [0.15, 0.4, 0.15],
              rotate: [45, 225, 45],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute w-4 h-4 border border-primary/10 pointer-events-none"
            style={{ bottom: "20%", left: "20%", transform: "rotate(45deg)" }}
            animate={{
              y: [-5, 10, -5],
              x: [-3, 3, -3],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          {/* Vertical accent lines */}
          <motion.div
            className="absolute top-[20%] bottom-[20%] left-[8%] w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent, hsl(200 100% 50% / 0.2), transparent)",
            }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-[25%] bottom-[25%] right-[8%] w-px pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent, hsl(200 100% 50% / 0.15), transparent)",
            }}
            animate={{ opacity: [0.15, 0.5, 0.15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build Predictable Performance
            </h2>
            <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-6">
              If you're serious about improving how your long-form content performs over time, we should talk.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mx-auto mb-10 whitespace-nowrap">
              Share your channel and goals. I'll let you know if this is the right fit and what I'd focus on first.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

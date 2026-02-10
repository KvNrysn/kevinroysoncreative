import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import testimonialTomlet from "@/assets/testimonial-tomlet.webp";
import testimonialRichard from "@/assets/testimonial-richard-new.webp";
import testimonialRitesh from "@/assets/testimonial-ritesh.webp";
import testimonialAlfred from "@/assets/testimonial-alfred.webp";

const testimonials = [
  {
    image: testimonialTomlet,
    name: "Tech Tomlet",
    context:
      "Shared after the client felt comfortable handing off editing and focusing on other priorities",
  },
  {
    image: testimonialRichard,
    name: "Richard Strittmatter",
    context: "Feedback after handling sponsored video",
  },
  {
    image: testimonialRitesh,
    name: "Ritesh Verma",
    context: "Feedback in Frame.io on first draft",
  },
  {
    image: testimonialAlfred,
    name: "Alfred Simon",
    context: "Well done start with good viewer's impression",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    []
  );

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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            What Clients Say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="shrink-0 rounded-full h-10 w-10 border-border hover:bg-secondary z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div className="relative">
                <div
                  className="flex transition-transform duration-500 ease-in-out items-center"
                  style={{
                    transform: `translateX(-${current * 100}%)`,
                  }}
                >
                  {testimonials.map((t, i) => {
                    const isActive = i === current;
                    return (
                      <div
                        key={i}
                        className="w-full shrink-0 px-2 transition-all duration-500"
                        style={{
                          filter: isActive ? "blur(0px)" : "blur(4px)",
                          opacity: isActive ? 1 : 0.4,
                          transform: isActive ? "scale(1)" : "scale(0.92)",
                        }}
                      >
                        <div className="rounded-xl overflow-hidden border border-border bg-card/50 flex items-center justify-center">
                          <img
                            src={t.image}
                            alt={`Testimonial from ${t.name}`}
                            className="w-full max-h-[420px] object-contain"
                            loading="lazy"
                          />
                        </div>
                        <div className="mt-3 text-center">
                          <p className="text-base font-semibold text-foreground mb-0.5">
                            {t.name}
                          </p>
                          <p className="text-xs text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis">
                            {t.context}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="shrink-0 rounded-full h-10 w-10 border-border hover:bg-secondary z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

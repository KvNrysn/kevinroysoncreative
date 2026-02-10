import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofVideos = [
  {
    embedUrl: "https://www.youtube.com/embed/4a_c8DX-KuU",
    channel: "Jason West",
    context:
      "Used visual shifts to illustrate key statements and align the edit with patterns this channel's audience consistently responds to.",
  },
  {
    embedUrl: "https://www.youtube.com/embed/Y_n8xGRJq1s",
    channel: "Ritesh Verma",
    context:
      "Edited with clear visual guidance, intentional pacing shifts, and consistent visual reinforcement of the main storytelling points.",
  },
];

export function ProofSection() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => setCurrent((c) => (c === 0 ? proofVideos.length - 1 : c - 1)), []);
  const next = useCallback(() => setCurrent((c) => (c === proofVideos.length - 1 ? 0 : c + 1)), []);

  const video = proofVideos[current];

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
            Proof of Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Long-Form Videos That Performed
            <br />
            <span className="text-muted-foreground">Above Channel Average</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Carousel controls */}
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="shrink-0 rounded-full h-10 w-10 border-border hover:bg-secondary"
              aria-label="Previous video"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {proofVideos.map((v, i) => (
                  <div key={i} className="w-full shrink-0 px-1">
                    <div className="aspect-video rounded-xl overflow-hidden border border-border bg-card/50">
                      <iframe
                        src={v.embedUrl}
                        title={`Video by ${v.channel}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        loading="lazy"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-lg font-semibold text-foreground mb-1">{v.channel}</p>
                      <p className="text-sm text-muted-foreground max-w-lg mx-auto">{v.context}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="shrink-0 rounded-full h-10 w-10 border-border hover:bg-secondary"
              aria-label="Next video"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {proofVideos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

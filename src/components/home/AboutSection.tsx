import { motion } from "framer-motion";
import kevinPhoto from "@/assets/kevin-photo.jpeg";

const textLines = [
  {
    content: (
      <>
        I'm <span className="font-semibold text-primary">Kevin</span>. I work with business-focused creators who use long-form YouTube as a growth engine not just a content channel.
      </>
    ),
    className: "text-lg text-foreground leading-relaxed",
  },
  {
    content:
      "My role isn’t just to \"edit.\" It’s to structure videos so attention holds, trust compounds, and sponsor integrations feel intentional rather than inserted.",
    className: "text-muted-foreground leading-relaxed",
  },
  {
    content:
      "You work directly with me. No layers. No handoffs. Just clear communication and structured execution.",
    className: "text-muted-foreground leading-relaxed",
  },
];

export function AboutSection() {
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
            About
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Who You'll Be Working With
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Photo */}
          <div className="shrink-0">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-2 rounded-full bg-primary/20 blur-xl" />
              <img
                src={kevinPhoto}
                alt="Kevin – YouTube editor"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-primary/30"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="space-y-5 text-center md:text-left">
            {textLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
                whileHover={{
                  x: 6,
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                className={`${line.className} cursor-default transition-colors duration-300 hover:text-foreground`}
              >
                {line.content}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

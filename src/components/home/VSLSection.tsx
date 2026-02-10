import { motion } from "framer-motion";

export function VSLSection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            How Trust and Retention Drive
            <br />
            <span className="text-muted-foreground">Conversion in Long-Form Content</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          {/* VSL YouTube embed placeholder — replace src when ready */}
          <div className="w-full max-w-5xl aspect-video rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/hu1dysiFAkg"
              title="VSL Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
          />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

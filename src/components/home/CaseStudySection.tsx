import { motion } from "framer-motion";
import jasonHeader from "@/assets/jason-west-header.webp";
import caseStudyBefore from "@/assets/case-study-before.webp";
import caseStudyAfter from "@/assets/case-study-after.webp";
import caseStudyProjects from "@/assets/case-study-projects.webp";

export function CaseStudySection() {
  return (
    <section className="section-padding">
      <div className="container-main">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4">
            Case Study
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            A Real Client Example
          </h2>
        </motion.div>

        {/* Channel Header Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <img
            src={jasonHeader}
            alt="Jason West YouTube Channel"
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Context Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-lg font-semibold text-foreground mb-3">Context</h3>
          <p className="text-muted-foreground leading-relaxed">
            This is a business-focused YouTube channel producing sponsored software reviews.
            I handled long-form editing across ongoing uploads, with the goal of improving clarity,
            pacing, and consistency while supporting a higher publishing cadence.
          </p>
        </motion.div>

        {/* Point 1 — text left, images right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-8 md:gap-12 mb-20"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-muted-foreground"
            >
              More consistent and improved long-form performance
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              Shifted editing toward clearer early value, tighter pacing, and product feature visual
              emphasis, leading to more consistent average view performance across uploads over time.
            </motion.p>
          </div>

          {/* Before/After Images */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Before
              </span>
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src={caseStudyBefore}
                  alt="Channel performance before working together"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                After
              </span>
              <div className="rounded-xl overflow-hidden border border-primary/30">
                <img
                  src={caseStudyAfter}
                  alt="Channel performance after working together"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Point 2 — images left, text right (alternating) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12"
        >
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-muted-foreground"
            >
              Publishing reliability & commercial readiness
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              Enabled consistent, high-volume publishing with reliable turnaround, allowing the
              channel to sustain 3–4 sponsored videos per week while presenting brand content clearly
              and professionally for repeat collaborations.
            </motion.p>
          </div>

          {/* Project folders image */}
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-xl overflow-hidden border border-border">
                <img
                  src={caseStudyProjects}
                  alt="18 project folders showing consistent delivery"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

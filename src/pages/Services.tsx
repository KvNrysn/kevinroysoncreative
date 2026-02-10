import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ServicesFAQSection } from "@/components/services/ServicesFAQSection";
import { BeforeYouDecideSection } from "@/components/services/BeforeYouDecideSection";
import { ExpandedOffersSection } from "@/components/services/ExpandedOffersSection";
import { WorkflowTimelineSection } from "@/components/services/WorkflowTimelineSection";

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full border border-border text-sm text-muted-foreground mb-4"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 whitespace-nowrap"
          >
            Editing built for retention, trust, and long-term growth
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            I work with business-focused creators who want their videos to hold attention, communicate clearly, and support real channel outcomes. Not just look polished.
          </motion.p>
        </div>
      </section>

      {/* Before You Decide */}
      <BeforeYouDecideSection />

      {/* Expanded Offers */}
      <ExpandedOffersSection />

      {/* Workflow Timeline */}
      <WorkflowTimelineSection />

      {/* FAQ */}
      <ServicesFAQSection />

      {/* CTA */}
      <section className="section-padding">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to see if this is a fit?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              If you care about retention, clarity, and building content that compounds. Let's talk through your channel and see what makes sense.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

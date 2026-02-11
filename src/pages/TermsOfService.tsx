import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 11, 2026
            </p>

            <div className="space-y-8 text-muted-foreground">

              {/* 1 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By engaging KevinRoysonCreative for any service, including editing,
                  consulting, or creative analysis, you agree to these Terms of Service.
                  If you do not agree, please do not proceed with booking, payment,
                  or asset submission.
                </p>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Services Provided
                </h2>
                <p className="mb-4">
                  KevinRoysonCreative provides creative post-production and advisory services,
                  which may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Long-form YouTube video editing</li>
                  <li>Short-form editing (when agreed)</li>
                  <li>Thumbnail design (if included in scope)</li>
                  <li>Creative clarity, pacing, and storytelling optimization</li>
                  <li>Strategic content and channel guidance</li>
                  <li>Growth Audits and creative-side performance analysis</li>
                </ul>
                <p className="mt-4">
                  All services are custom-scoped and confirmed in writing before work begins.
                  Any service not explicitly agreed upon is not included.
                </p>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. Scope & Working Agreements
                </h2>
                <p>
                  Specific deliverables, timelines, revision limits, pricing,
                  and responsibilities are defined in individual Working Agreements
                  (Retainer, One-Off Project, or Growth Audit).
                </p>
                <p className="mt-4">
                  In the event of a conflict between this page and a signed
                  Working Agreement, the signed agreement takes precedence.
                </p>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Payment & Billing
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All prices are listed and charged in USD</li>
                  <li>Work begins only after payment is received</li>
                  <li>Payment structures vary by service and are outlined in the Working Agreement</li>
                  <li>Additional requests outside scope may require additional fees</li>
                </ul>
                <p className="mt-4">
                  Failure to complete payment may result in paused or terminated services.
                </p>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Turnaround & Scheduling
                </h2>
                <p className="mb-4">
                  Turnaround times depend on agreed scope, project complexity,
                  and timely asset delivery.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Late asset delivery</li>
                  <li>Changes in scope</li>
                  <li>Increased video length or complexity</li>
                </ul>
                <p className="mt-4">
                  KevinRoysonCreative prioritizes clarity and quality over rushed delivery
                  unless a rush service is explicitly agreed upon.
                </p>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Revisions
                </h2>
                <p>
                  Revision limits and definitions are outlined in the applicable
                  Working Agreement.
                </p>
                <p className="mt-4">
                  Requests that significantly alter structure, direction,
                  or require substantial rework may be considered new scope
                  and billed separately.
                </p>
              </section>

              {/* 7 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Client Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate assets and instructions</li>
                  <li>Ensure legal rights and ownership of submitted content</li>
                  <li>Deliver feedback in a timely manner</li>
                </ul>
                <p className="mt-4">
                  Delays caused by missing assets or late feedback may impact timelines.
                </p>
              </section>

              {/* 8 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Intellectual Property
                </h2>
                <p className="mb-4">
                  Upon full payment:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Final delivered videos become the Client’s property</li>
                  <li>Original raw footage remains the Client’s property</li>
                  <li>Project files remain the property of KevinRoysonCreative unless otherwise agreed</li>
                  <li>Licensed assets remain subject to their original license terms</li>
                </ul>
                <p className="mt-4">
                  KevinRoysonCreative may reference completed work for portfolio
                  or educational purposes unless the Client requests otherwise in writing.
                </p>
              </section>

              {/* 9 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. Performance Disclaimer
                </h2>
                <p>
                  KevinRoysonCreative does not guarantee views, engagement,
                  subscriber growth, revenue, or algorithmic outcomes.
                </p>
                <p className="mt-4">
                  Services focus on improving creative clarity, structure,
                  and message delivery. Performance outcomes depend on multiple
                  external factors beyond editorial control.
                </p>
              </section>

              {/* 10 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Refunds & Credits
                </h2>
                <p>
                  Due to the nature of creative services, payments are non-refundable
                  once work has begun.
                </p>
                <p className="mt-4">
                  In cases where delays are solely the responsibility of
                  KevinRoysonCreative, service credits may be issued
                  at discretion. Credits do not exceed the value of the affected work.
                </p>
              </section>

              {/* 11 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Limitation of Liability
                </h2>
                <p>
                  Liability is limited to the amount paid for the relevant service period.
                  KevinRoysonCreative is not liable for indirect, consequential,
                  or platform-related damages.
                </p>
              </section>

              {/* 12 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  12. Termination
                </h2>
                <p className="mb-4">
                  KevinRoysonCreative reserves the right to suspend or terminate services due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment failure</li>
                  <li>Repeated scope violations</li>
                  <li>Misuse of services or collaboration tools</li>
                </ul>
                <p className="mt-4">
                  All completed and paid work will be delivered accordingly.
                </p>
              </section>

              {/* 13 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  13. Governing Law
                </h2>
                <p>
                  These Terms shall be governed and interpreted in accordance
                  with the applicable laws of the jurisdiction in which
                  KevinRoysonCreative operates, without regard to conflict
                  of law principles.
                </p>
              </section>

              {/* 14 */}
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  14. Contact
                </h2>
                <p>
                  For questions regarding these Terms of Service, please contact:
                </p>
                <p className="mt-2 font-medium text-foreground">
                  contact@kevinroysoncreative.com
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

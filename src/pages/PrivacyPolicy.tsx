import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">
              Last updated: February 11, 2026
            </p>

            <div className="space-y-8 text-muted-foreground">

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p>
                  KevinRoysonCreative ("we", "us", or "our") respects your privacy. 
                  This Privacy Policy explains how information is collected, used, 
                  and protected when you visit this website or engage our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and email address submitted via contact forms</li>
                  <li>Project details and messages you provide</li>
                  <li>Scheduling information submitted via Calendly</li>
                  <li>Files, assets, and materials provided for editing services</li>
                  <li>Basic technical data such as IP address, browser type, and device information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  3. How Your Information Is Used
                </h2>
                <p className="mb-4">
                  Information is used to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to inquiries and communication requests</li>
                  <li>Provide contracted services</li>
                  <li>Schedule discovery calls</li>
                  <li>Manage workflow and collaboration</li>
                  <li>Improve service quality and client experience</li>
                </ul>
                <p className="mt-4">
                  We do not sell or rent personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  4. Third-Party Services
                </h2>
                <p className="mb-4">
                  This website may use trusted third-party providers including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Vercel (website hosting)</li>
                  <li>Google Workspace (email services)</li>
                  <li>Calendly (appointment scheduling)</li>
                </ul>
                <p className="mt-4">
                  These providers process data in accordance with their own privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  5. Client Files & Confidential Materials
                </h2>
                <p>
                  All client materials, footage, and project files are treated as confidential. 
                  Files are used solely for the purpose of providing agreed services. 
                  We do not distribute or disclose client content without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  6. Data Retention
                </h2>
                <p>
                  Contact form submissions and email communications may be retained 
                  for business record-keeping purposes. Project files may be retained 
                  for workflow continuity unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  7. Data Security
                </h2>
                <p>
                  Reasonable technical and organizational measures are used to 
                  protect your information. However, no method of transmission 
                  over the internet can be guaranteed as completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  8. Your Rights
                </h2>
                <p>
                  You may request access, correction, or deletion of your personal 
                  information by contacting us directly. Requests will be handled 
                  in accordance with applicable laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  9. International Users
                </h2>
                <p>
                  This website may be accessed globally. By using our services, 
                  you consent to the processing of your information in accordance 
                  with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  10. Changes to This Policy
                </h2>
                <p>
                  This Privacy Policy may be updated periodically. The updated 
                  version will be posted on this page with a revised "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  11. Contact
                </h2>
                <p>
                  For privacy-related questions, contact:{" "}
                  <a
                    href="mailto:kevinrysn@kevinroysoncreative.com"
                    className="text-primary hover:underline"
                  >
                    kevinrysn@kevinroysoncreative.com
                  </a>
                </p>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

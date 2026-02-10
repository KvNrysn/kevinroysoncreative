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
               Last updated: February 5, 2026
             </p>
 
             <div className="space-y-8 text-muted-foreground">
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   1. Acceptance of Terms
                 </h2>
                 <p>
                   By accessing and using our video editing services, you accept and agree to be bound by 
                   these Terms of Service. If you do not agree to these terms, please do not use our services.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   2. Services Description
                 </h2>
                 <p>
                   We provide professional video editing services including but not limited to video editing, 
                   color grading, motion graphics, sound design, and post-production work. The specific scope 
                   of work will be agreed upon before each project begins.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   3. Project Process
                 </h2>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>All projects require an initial consultation and agreement on scope</li>
                   <li>A deposit may be required before work begins</li>
                   <li>Revisions are included as specified in your package or agreement</li>
                   <li>Additional revisions beyond the agreed scope may incur extra charges</li>
                   <li>Final delivery occurs after full payment is received</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   4. Payment Terms
                 </h2>
                 <p className="mb-4">
                   Payment terms are as follows:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Prices are quoted in advance and are valid for 30 days</li>
                   <li>A 50% deposit is required to begin work on most projects</li>
                   <li>Final payment is due upon project completion, before final file delivery</li>
                   <li>Late payments may result in project delays or additional fees</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   5. Intellectual Property
                 </h2>
                 <p className="mb-4">
                   Upon full payment:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>You retain full ownership of your original footage and content</li>
                   <li>You receive full rights to the final edited video</li>
                   <li>We reserve the right to use completed work in our portfolio unless otherwise agreed</li>
                   <li>Any stock footage, music, or assets used remain subject to their original licenses</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   6. Client Responsibilities
                 </h2>
                 <p className="mb-4">
                   You agree to:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Provide all necessary footage, assets, and materials in a timely manner</li>
                   <li>Ensure you have the rights to all materials provided</li>
                   <li>Provide clear feedback and direction during the revision process</li>
                   <li>Respond to communications within a reasonable timeframe</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   7. Cancellation and Refunds
                 </h2>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Cancellation before work begins: Full refund of deposit</li>
                   <li>Cancellation after work begins: Deposit is non-refundable</li>
                   <li>We reserve the right to cancel a project and refund payments if circumstances require</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   8. Limitation of Liability
                 </h2>
                 <p>
                   Our liability is limited to the amount paid for services. We are not responsible for any 
                   indirect, incidental, or consequential damages arising from the use of our services or 
                   delivered content.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   9. Confidentiality
                 </h2>
                 <p>
                   We treat all client materials and project details as confidential. We will not share your 
                   content or information with third parties without your consent, except as necessary to 
                   provide our services.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   10. Changes to Terms
                 </h2>
                 <p>
                   We reserve the right to modify these terms at any time. Changes will be posted on this 
                   page with an updated revision date. Continued use of our services after changes constitutes 
                   acceptance of the new terms.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   11. Contact
                 </h2>
                 <p>
                   For questions about these Terms of Service, please contact us at{" "}
                   <a href="mailto:legal@videoedit.com" className="text-primary hover:underline">
                     legal@videoedit.com
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
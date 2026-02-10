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
               Last updated: February 5, 2026
             </p>
 
             <div className="space-y-8 text-muted-foreground">
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   1. Information We Collect
                 </h2>
                 <p className="mb-4">
                   We collect information you provide directly to us, such as when you fill out a contact form, 
                   request a quote, or communicate with us via email. This may include:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Name and contact information (email address, phone number)</li>
                   <li>Project details and requirements</li>
                   <li>Payment information for completed transactions</li>
                   <li>Any other information you choose to provide</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   2. How We Use Your Information
                 </h2>
                 <p className="mb-4">
                   We use the information we collect to:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Provide, maintain, and improve our video editing services</li>
                   <li>Respond to your inquiries and fulfill your requests</li>
                   <li>Send you project updates and communications</li>
                   <li>Process payments and prevent fraud</li>
                   <li>Comply with legal obligations</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   3. Information Sharing
                 </h2>
                 <p>
                   We do not sell, trade, or otherwise transfer your personal information to third parties 
                   without your consent, except as necessary to provide our services or as required by law. 
                   We may share information with trusted service providers who assist us in operating our 
                   business, provided they agree to keep this information confidential.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   4. Data Security
                 </h2>
                 <p>
                   We implement appropriate technical and organizational measures to protect your personal 
                   information against unauthorized access, alteration, disclosure, or destruction. However, 
                   no method of transmission over the Internet is 100% secure, and we cannot guarantee 
                   absolute security.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   5. Your Rights
                 </h2>
                 <p className="mb-4">
                   You have the right to:
                 </p>
                 <ul className="list-disc list-inside space-y-2 ml-4">
                   <li>Access the personal information we hold about you</li>
                   <li>Request correction of inaccurate information</li>
                   <li>Request deletion of your personal information</li>
                   <li>Opt out of marketing communications</li>
                 </ul>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   6. Cookies
                 </h2>
                 <p>
                   Our website may use cookies to enhance your browsing experience. You can choose to 
                   disable cookies through your browser settings, though this may affect some website 
                   functionality.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   7. Changes to This Policy
                 </h2>
                 <p>
                   We may update this Privacy Policy from time to time. We will notify you of any changes 
                   by posting the new policy on this page and updating the "Last updated" date.
                 </p>
               </section>
 
               <section>
                 <h2 className="text-2xl font-semibold text-foreground mb-4">
                   8. Contact Us
                 </h2>
                 <p>
                   If you have any questions about this Privacy Policy, please contact us at{" "}
                   <a href="mailto:privacy@videoedit.com" className="text-primary hover:underline">
                     privacy@videoedit.com
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
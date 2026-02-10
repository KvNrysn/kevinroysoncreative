import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { VSLSection } from "@/components/home/VSLSection";
import { ProofSection } from "@/components/home/ProofSection";
import { EditorMythsSection } from "@/components/home/EditorMythsSection";
import { EditingDecisionsSection } from "@/components/home/EditingDecisionsSection";
import { OfferSection } from "@/components/home/OfferSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CaseStudySection } from "@/components/home/CaseStudySection";
import { AboutSection } from "@/components/home/AboutSection";
import { NotForSection } from "@/components/home/NotForSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <VSLSection />
      <ProofSection />
      <EditorMythsSection />
      <EditingDecisionsSection />
      <OfferSection />
      <TestimonialsSection />
      <CaseStudySection />
      <AboutSection />
      <NotForSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}

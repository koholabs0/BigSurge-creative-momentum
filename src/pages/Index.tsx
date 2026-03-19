import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Philosophy } from "@/components/home/Philosophy";
import { CTASection } from "@/components/home/CTASection";
import { SocialProofSection } from "@/components/social/SocialProofSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <FeaturedWork />
      <SocialProofSection />
      <Philosophy />
      <CTASection />
    </Layout>
  );
};

export default Index;

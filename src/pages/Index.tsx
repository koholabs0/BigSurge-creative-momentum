import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { Philosophy } from "@/components/home/Philosophy";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Stats />
      <FeaturedWork />
      <Testimonials />
      <Philosophy />
      <CTASection />
    </Layout>
  );
};

export default Index;


import { HeroSection } from '@/components/landing/hero-section';
import { TechStackSection } from '@/components/landing/tech-stack-section';
import { Footer } from '@/components/shared/footer';
import { Header } from '@/components/shared/header';
import { AboutMeSection } from '@/components/landing/about-me-section';
import { ServicesSection } from '@/components/landing/services-section';
import { ContactSection } from '@/components/landing/contact-section';
import { AnimatedSection } from '@/components/shared/animated-section';
import { SocialsSection } from '@/components/landing/socials-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection>
          <AboutMeSection />
        </AnimatedSection>
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <TechStackSection />
        </AnimatedSection>
        <AnimatedSection>
          <SocialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

import {
  Hero,
  Brands,
  CTA,
  InfoBulletPoints,
  Services,
  InfoAccordion,
  Testimonials,
  FooterCTA,
} from '@/components/index';

export default function Home() {
  return (
    <main className="max-w-auto flex flex-col justify-center items-center gap-16 overflow-hidden">
      <Hero />
      <Brands />
      <CTA />
      <InfoBulletPoints />
      <Services />
      <InfoAccordion />
      <Testimonials />
      <FooterCTA />
    </main>
  );
}

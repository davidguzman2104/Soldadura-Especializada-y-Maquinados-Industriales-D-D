import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Capabilities from '@/components/Capabilities';
import Projects from '@/components/Projects';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileBottomBar from '@/components/MobileBottomBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Capabilities />
        <Projects />
        <Industries />
        <Process />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileBottomBar />
    </div>
  );
};

export default Index;

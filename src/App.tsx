import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertises from '@/components/Expertises';
import Approche from '@/components/Approche';
import WhyUs from '@/components/WhyUs';
import Stats from '@/components/Stats';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LegalNotice from '@/components/LegalNotice';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { initThemeSync } from '@/lib/theme';

function usePathname() {
  const [path, setPath] = useState(() => window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);
  return path;
}

export default function App() {
  const path = usePathname();
  const isLegal = path === '/mentions-legales';

  useScrollReveal([isLegal]);

  useEffect(() => {
    initThemeSync();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLegal]);

  if (isLegal) {
    return (
      <>
        <LegalNotice />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertises />
        <Approche />
        <WhyUs />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

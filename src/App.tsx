import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ComparisonSection from './components/ComparisonSection';
import Capabilities from './components/Capabilities';
import PowerSection from './components/PowerSection';
import AfterCallSection from './components/AfterCallSection';
import IndustrySection from './components/IndustrySection';
import CTA from './components/CTA';
import SmartLoopSection from './components/SmartLoopSection';
import FadeInSection from './components/FadeInSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Stats />
      </FadeInSection>

      <FadeInSection delay={200}>
        <ComparisonSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <Capabilities />
      </FadeInSection>

      <FadeInSection delay={200}>
        <PowerSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <CTA />
      </FadeInSection>

      <FadeInSection delay={200}>
        <AfterCallSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <SmartLoopSection />
      </FadeInSection>

      <FadeInSection delay={200}>
        <IndustrySection />
      </FadeInSection>

      <main>
        {/* Other sections will go here */}
      </main>

      <Footer />
    </div>
  );
}

export default App;

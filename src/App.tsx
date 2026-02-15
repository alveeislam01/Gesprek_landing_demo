import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FadeInSection from './components/FadeInSection';
import Footer from './components/Footer';
import SectionSkeleton from './components/ui/SectionSkeleton';
import BookDemoModal from './components/ui/BookDemoModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

// Lazy load below-the-fold sections
const AgentsSection = React.lazy(() => import('./components/AgentsSection'));
const FeatureGridSection = React.lazy(() => import('./components/FeatureGridSection'));
const IntegrationSection = React.lazy(() => import('./components/IntegrationSection'));

import FloatingCallButton from './components/ui/FloatingCallButton';

function App() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  useSmoothScroll();

  return (
    <div className="app">
      <Header onOpenDemo={() => setIsBookDemoOpen(true)} />

      <Hero />

      <FadeInSection delay={200}>
        <Stats />
      </FadeInSection>

      <Suspense fallback={<SectionSkeleton height="800px" />}>
        <FadeInSection delay={200}>
          <AgentsSection />
        </FadeInSection>
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="600px" />}>
        <FadeInSection delay={200}>
          <FeatureGridSection />
        </FadeInSection>
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="800px" />}>
        <FadeInSection delay={200}>
          <IntegrationSection />
        </FadeInSection>
      </Suspense>

      <Footer />

      <FloatingCallButton onClick={() => setIsBookDemoOpen(true)} />

      <BookDemoModal
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </div>
  );
}

export default App;

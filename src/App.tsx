import { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Sections/Hero';
import { ProjectSplitter } from './components/Sections/ProjectSplitter';
import { ProjectGrid } from './components/Sections/ProjectGrid';
import { About } from './components/Sections/About';
import { Contact } from './components/Sections/Contact';
import { ScrollProgress } from './components/UI/ScrollProgress';
import { ScrollReveal } from './components/UI/ScrollReveal';
import { type ProjectCategory } from './data/projects';

function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('vibe');

  return (
    <main className="min-h-screen relative text-white selection:bg-white selection:text-black">
      <ScrollProgress />
      <Background />
      <Navbar />

      <div className="container mx-auto">
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        <ScrollReveal id="projects" className="py-20">
          <ProjectSplitter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <ProjectGrid activeCategory={activeCategory} />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </main>
  );
}

export default App;

import { useState } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Background } from './components/Layout/Background';
import { Hero } from './components/Sections/Hero';
import { ProjectSplitter } from './components/Sections/ProjectSplitter';
import { ProjectGrid } from './components/Sections/ProjectGrid';
import { About } from './components/Sections/About';
import { type ProjectCategory } from './data/projects';

function App() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('vibe');

  return (
    <main className="min-h-screen relative text-white selection:bg-white selection:text-black">
      <Background />
      <Navbar />

      <div className="container mx-auto">
        <Hero />

        <section id="projects" className="py-20">
          <ProjectSplitter
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <ProjectGrid activeCategory={activeCategory} />
        </section>

        <About />
      </div>
    </main>
  );
}

export default App;

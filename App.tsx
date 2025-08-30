import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black text-slate-700 min-h-screen">
      <main className="container mx-auto px-6 py-8 md:px-12 md:py-16">
        <Header />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;

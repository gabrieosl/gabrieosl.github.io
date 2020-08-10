import React from 'react';

import Context from './context';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <Context>
      <Header />
      <CallToAction />
      <Skills />
      <Projects />
      <Contact />
    </Context>
  );
};

export default App;

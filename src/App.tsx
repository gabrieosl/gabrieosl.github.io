import React from 'react';

import Context from './context';
import Header from './components/Header';
import CallToAction from './components/CallToAction';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';

const App: React.FC = () => {
  return (
    <Context>
      <Header />
      <CallToAction />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <GoToTop />
    </Context>
  );
};

export default App;

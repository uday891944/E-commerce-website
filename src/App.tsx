import React from 'react';
import Header from './components/layout/Header';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Services from './components/sections/Services';
import InstagramFeed from './components/sections/InstagramFeed';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <About />
        <Gallery />
        <Services />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
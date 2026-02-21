'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import About from '../components/About';
import Reservations from '../components/Reservations';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Menu />
        <About />
        <Reservations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

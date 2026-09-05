import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import ThreeDomains from '../sections/ThreeDomains';
import Skills from '../sections/Skills';
import WhatIBuild from '../sections/WhatIBuild';
import Projects from '../sections/Projects';
import DevOpsPipeline from '../sections/DevOpsPipeline';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="domains"><ThreeDomains /></section>
        <section id="skills"><Skills /></section>
        <section id="whatibuild"><WhatIBuild /></section>
        <section id="projects"><Projects /></section>
        <section id="devops"><DevOpsPipeline /></section>
        <section id="journey">
          <div className="py-20 bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
                <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Experience />
                <Education />
              </div>
            </div>
          </div>
        </section>
        <section id="certifications"><Certifications /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

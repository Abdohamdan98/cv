/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans" dir="rtl">
      <main className="max-w-4xl mx-auto p-6 md:p-12 space-y-12">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

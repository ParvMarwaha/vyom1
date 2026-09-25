import React, { useEffect, useState } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import LatestNews from './components/LatestNews'
import Services from './components/Services'
import PathV2 from './components/PathV2'
import Careers from './components/Careers'
import Cta from './components/Cta'
import Footer from './components/Footer'
import ProjectsPage from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

function App() {
  useEffect(() => {
    // Disable browser's automatic scroll restoration behavior
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white relative">
          <Navbar />
          
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <LatestNews />
                <Services />
                <PathV2 />
                <Careers />
                <Cta />
              </>
            } />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
          
          <Footer />
        </div>
      </BrowserRouter>
    </ReactLenis>
  )
}

export default App

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import IntroSequence from './components/IntroSequence';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Security from './pages/Security';
import Terms from './pages/Terms';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

import BubbleMenu from './components/BubbleMenu';
import LineSidebar from './components/LineSidebar';

const navItems = [
  {
    label: 'About',
    href: '/about',
    rotation: -5,
    hoverStyles: { bgColor: '#ffffff', textColor: '#111' }
  },
  {
    label: 'Services',
    href: '/services',
    rotation: 5,
    hoverStyles: { bgColor: '#ffffff', textColor: '#111' }
  },
  {
    label: 'Contact',
    href: '/contact',
    rotation: -5,
    hoverStyles: { bgColor: '#ffffff', textColor: '#111' }
  }
];

const innerNavItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' }
];

const AppContent = ({ introFinished, setIntroFinished }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  
  const lineSidebarItems = innerNavItems.map(item => item.label);
  
  const handleSidebarClick = (index) => {
    navigate(innerNavItems[index].href);
  };

  const activeSidebarIndex = innerNavItems.findIndex(item => item.href === location.pathname);

  return (
    <div className="bg-[#050505] min-h-screen text-slate-200 selection:bg-white/20 selection:text-white overflow-x-hidden relative">
      {!introFinished && (
        <IntroSequence onComplete={() => setIntroFinished(true)} />
      )}

      {/* Global Navigation Layer */}
      {introFinished && (
        <>
          <div className="fixed top-0 left-0 w-full z-50 pointer-events-none p-6 md:p-8 flex justify-between items-start">
            {/* Logo - Top Left */}
            <div className="pointer-events-auto">
              <a href="/">
                <img src="/webkind white upscaled without bg.png" alt="WebKind" className="h-10 md:h-14 w-auto drop-shadow-lg" />
              </a>
            </div>
          </div>
          
          {/* Mobile Navigation - Always BubbleMenu */}
          <div className="md:hidden fixed inset-0 z-50 pointer-events-none">
            <BubbleMenu 
              items={navItems}
              menuBg="#111"
              menuContentColor="#fff"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            {isHomePage ? (
              <div className="fixed inset-0 z-50 pointer-events-none">
                <BubbleMenu 
                  items={navItems}
                  menuBg="#111"
                  menuContentColor="#fff"
                />
              </div>
            ) : (
              <div className="fixed top-1/2 left-12 -translate-y-1/2 z-50 pointer-events-auto">
                <LineSidebar 
                  items={lineSidebarItems} 
                  onItemClick={handleSidebarClick}
                  defaultActive={Math.max(0, activeSidebarIndex)}
                  accentColor="#ffffff"
                />
              </div>
            )}
          </div>
        </>
      )}
      
      {introFinished && (
        <main>
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
      )}
    </div>
  );
};



export default function App() {
  const [introFinished, setIntroFinished] = useState(
    sessionStorage.getItem('introPlayed') === 'true'
  );

  return (
    <Router>
      <ScrollToTop />
      <AppContent introFinished={introFinished} setIntroFinished={setIntroFinished} />
    </Router>
  );
}
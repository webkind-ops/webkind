import React from 'react';
import { useNavigate } from 'react-router-dom';
import CanvasParticles from './CanvasParticles';
import ScrollFloat from './ScrollFloat';
import Footer from './Footer';
import SpecularButton from './SpecularButton';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[150vh] bg-[#050505]">
      
      {/* Background Effect - Fixed to viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <CanvasParticles />
        {/* Vignette Overlay for Better Text Readability and Depth */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/40 to-[#050505]" />
      </div>

      {/* Main Content Sections */}
      <div className="absolute top-0 left-0 w-full z-10 pointer-events-none">
        
        {/* Viewport 1: Name */}
        <div className="h-screen w-full flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(8px)', y: 20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
            className="mb-6 pointer-events-auto"
          >
            <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight font-sf drop-shadow-xl">
              WebKind
            </h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/60 animate-[scrollLine_2s_ease-in-out_infinite]" />
          </div>
        </div>
        
        {/* Viewport 2: Story and CTA */}
        <div className="h-[50vh] w-full flex flex-col items-center justify-center px-6 pb-32">
          <div className="max-w-2xl mx-auto pointer-events-auto flex flex-col items-center">
            <ScrollFloat
              animationDuration={1}
              ease="power3.out"
              scrollStart="top bottom-=5%"
              scrollEnd="bottom 90%"
              stagger={0.015}
              textClassName="text-white/80 text-xl md:text-3xl font-light leading-relaxed text-balance text-center mb-12"
            >
              We build digital legacies. High-end web experiences crafted with meticulous design and flawless engineering for brands that refuse to blend in.
            </ScrollFloat>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <SpecularButton onClick={() => navigate('/contact')} size="lg" followMouse={true}>
                Let's Talk
              </SpecularButton>
            </motion.div>
          </div>
        </div>

      </div>
      
      {/* Footer Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <Footer />
      </div>
      
    </section>
  );
};

export default HeroSection;

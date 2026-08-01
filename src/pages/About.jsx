import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';
import SpecularButton from '../components/SpecularButton';
import TextType from '../components/TextType';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-[#050505]">
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
      />
      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        
        <section>
          <h1 className="text-5xl md:text-7xl font-bold font-sf mb-8">About WebKind</h1>
          <TextType as="h2" text="Our Story" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              WebKind was started with one simple goal, to help new businesses, startups, and growing brands build a strong digital presence. We believe that every business deserves a website that reflects its vision, builds trust, and leaves a lasting impression.
            </p>
            <p>
              Many great businesses struggle to reach more people because their online presence does not represent the quality of their work. We wanted to change that. Our mission is to create websites that not only look beautiful but also help businesses build credibility, connect with their audience, and grow with confidence.
            </p>
            <p>
              Every project we take is an opportunity to turn an idea into a meaningful digital experience that truly represents the brand behind it.
            </p>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Our Philosophy" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              At WebKind, we believe that good design is more than just making a website look attractive. Every design choice should have a purpose and should improve the experience for the people using it.
            </p>
            <p>
              We focus on creating websites that are clean, modern, responsive, and easy to navigate. We pay attention to every detail, from typography and spacing to colors and interactions, because small details create a lasting impression.
            </p>
            <p>
              Our goal is to design websites that are timeless, fast, and built around the identity of each business instead of following temporary design trends.
            </p>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Our Approach" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              Every successful website begins with understanding the business behind it.
            </p>
            <p>
              We start by listening carefully to our clients and learning about their goals, audience, and vision. Once we understand their ideas, our team researches the industry, studies competitors, and explores creative possibilities that can make the brand stand out.
            </p>
            <p>
              We then combine the client's vision with our own creative direction to shape a design that is both unique and practical. Throughout the process, we value honesty, collaboration, and attention to detail, ensuring that every decision is made with the client's success in mind.
            </p>
            <p>
              Only after building a clear plan do we move into designing and developing the final website with care, consistency, and quality.
            </p>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Our Process" className="text-2xl font-sf text-white/50 mb-8" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-white/80">
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Discover</h3>
              <p className="font-light leading-relaxed">We begin by understanding your business, your goals, and the people you want to reach.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Research</h3>
              <p className="font-light leading-relaxed">Our team studies your industry, competitors, and market to identify opportunities that can strengthen your digital presence.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Plan</h3>
              <p className="font-light leading-relaxed">We organize ideas, define the structure, and prepare a clear strategy before starting the design.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Design</h3>
              <p className="font-light leading-relaxed">We create a modern and visually engaging interface that reflects your brand while providing a smooth user experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Develop</h3>
              <p className="font-light leading-relaxed">The approved design is transformed into a fast, responsive, and reliable website using modern technologies and best development practices.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Refine</h3>
              <p className="font-light leading-relaxed">Every page is reviewed carefully, tested across devices, and improved through small refinements to ensure a polished final result.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Launch</h3>
              <p className="font-light leading-relaxed">Once everything is ready, we launch your website and make sure it performs smoothly from day one.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Support</h3>
              <p className="font-light leading-relaxed">Our relationship does not end after launch. We continue to provide support, improvements, and guidance whenever your business grows or your website needs to evolve.</p>
            </div>
          </div>
        </section>



        <section className="text-center pt-12">
          <h2 className="text-3xl font-bold mb-6">Ready to start?</h2>
          <SpecularButton onClick={() => navigate('/contact')} size="lg" followMouse={true}>
            Let's Talk
          </SpecularButton>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';
import SpecularButton from '../components/SpecularButton';
import TextType from '../components/TextType';

const Services = () => {
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
          <h1 className="text-5xl md:text-7xl font-bold font-sf mb-8">Our Services</h1>
          <TextType as="h2" text="What Problems We Solve" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              A great business deserves a great digital presence. Many brands lose valuable opportunities because their website fails to create trust, communicate their value, or provide a smooth experience for visitors.
            </p>
            <p>
              At WebKind, we help businesses transform their online presence into something that feels professional, modern, and memorable. Whether you are launching a new startup, refreshing an existing brand, or expanding your business, we build websites that create confidence and leave a lasting impression.
            </p>
            <p>
              Our goal is simple. We help businesses stand out, connect with the right audience, and turn visitors into customers through thoughtful design and seamless digital experiences.
            </p>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Core Capabilities" className="text-2xl font-sf text-white/50 mb-8" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-white/80">
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Website Design</h3>
              <p className="font-light leading-relaxed">We design websites that reflect your brand identity while creating a smooth and engaging experience for every visitor.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">User Experience Design</h3>
              <p className="font-light leading-relaxed">Every page is planned with clarity and purpose so visitors can easily find information, explore your services, and take action with confidence.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Frontend Development</h3>
              <p className="font-light leading-relaxed">Using modern technologies and best development practices, we build responsive websites that perform beautifully across desktops, tablets, and mobile devices.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Brand Focused Design</h3>
              <p className="font-light leading-relaxed">Your website is often the first impression of your business. We create designs that strengthen your identity and help your brand stand out in a competitive market.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Responsive Experience</h3>
              <p className="font-light leading-relaxed">Every website is carefully optimized to deliver a consistent and enjoyable experience on every screen size.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Performance Optimization</h3>
              <p className="font-light leading-relaxed">Fast websites create better experiences. We focus on clean development practices that improve loading speed, responsiveness, and overall performance.</p>
            </div>
          </div>
        </section>

        <section>
          <TextType as="h2" text="What's Included In Every Website" className="text-2xl font-sf text-white/50 mb-8" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-white/80">
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Custom Website Design</h3>
              <p className="font-light leading-relaxed">Every project is designed specifically for your business. We never rely on generic templates because every brand deserves its own unique identity.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Mobile Responsive Layout</h3>
              <p className="font-light leading-relaxed">Your website will work seamlessly across mobile phones, tablets, laptops, and desktop screens.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Search Engine Ready Foundation</h3>
              <p className="font-light leading-relaxed">We follow modern SEO practices that help search engines understand your website and improve its visibility.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Google Business Integration</h3>
              <p className="font-light leading-relaxed">We can connect your website with your Google Business Profile to strengthen your local online presence and make it easier for customers to find you.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Contact & Lead Generation</h3>
              <p className="font-light leading-relaxed">From enquiry forms to WhatsApp integration and clear call to action buttons, every website is built to encourage meaningful customer interactions.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Performance & Security</h3>
              <p className="font-light leading-relaxed">We optimize images, code, and overall performance while following secure development practices to ensure your website remains reliable.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Easy Content Management</h3>
              <p className="font-light leading-relaxed">When required, we can integrate a content management system that allows you to update your website without technical knowledge.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Future Ready Architecture</h3>
              <p className="font-light leading-relaxed">Our websites are built with scalability in mind, making it easier to add new features as your business grows.</p>
            </div>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Technologies We Use" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              We choose modern technologies that provide performance, flexibility, and long term reliability.
            </p>
            <p>
              Our development stack includes React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, Node.js, Supabase, Firebase, Vercel, Cloudflare, and other industry standard tools selected according to your project's needs.
            </p>
            <p>
              Technology is never our final product. It is simply the foundation that allows us to build digital experiences that are fast, reliable, and built to grow with your business.
            </p>
          </div>
        </section>

        <section>
          <TextType as="h2" text="Who We Build For" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light mb-12">
            <p>
              Every business has a unique story, and every website should reflect it. We work with businesses that value quality, thoughtful design, and a strong digital presence.
            </p>
            <p>
              Whether you are starting from scratch or looking to refresh your existing website, we create solutions that are tailored to your goals and designed to grow with your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-white/80">
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Startups</h3>
              <p className="font-light leading-relaxed">Turn your ideas into a professional online presence that builds credibility from day one.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Local Businesses</h3>
              <p className="font-light leading-relaxed">Help your business become easier to discover, earn customer trust, and attract more enquiries through a modern website.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Cafés & Bakeries</h3>
              <p className="font-light leading-relaxed">Showcase your menu, signature products, story, and atmosphere with a website that feels as inviting as your space.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Beauty & Wellness</h3>
              <p className="font-light leading-relaxed">Create elegant digital experiences for salons, spas, skincare clinics, and wellness brands that reflect the quality of your services.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Real Estate</h3>
              <p className="font-light leading-relaxed">Present properties with confidence through clean layouts, engaging visuals, and a seamless browsing experience for potential buyers.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Restaurants & Hospitality</h3>
              <p className="font-light leading-relaxed">Build memorable websites that highlight your food, ambience, reservations, and customer experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Healthcare & Clinics</h3>
              <p className="font-light leading-relaxed">Design professional websites that make it easy for patients to learn about your services, book appointments, and trust your practice.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Personal Brands & Creators</h3>
              <p className="font-light leading-relaxed">Whether you are a freelancer, consultant, coach, or content creator, we help you build a digital identity that represents your expertise.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Educational Institutions</h3>
              <p className="font-light leading-relaxed">Create modern websites for schools, coaching centres, academies, and learning platforms that make information accessible and engaging.</p>
            </div>
            <div>
              <h3 className="text-xl font-sf text-white mb-3">Growing Businesses</h3>
              <p className="font-light leading-relaxed">As your business evolves, your website should evolve with it. We build scalable digital experiences that support long term growth and future expansion.</p>
            </div>
          </div>
        </section>

        <section>
          <TextType as="h2" text="If You Care About Quality, We Would Love To Work With You" className="text-2xl font-sf text-white/50 mb-6" loop={false} startOnVisible={true} cursorClassName="text-white/30" />
          <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
            <p>
              No matter your industry, our focus remains the same. We create websites that combine thoughtful design, modern technology, and meaningful user experiences to help businesses build trust, strengthen their brand, and grow with confidence.
            </p>
            <p>
              If you have an idea worth sharing, let's turn it into a digital experience that truly represents your business.
            </p>
          </div>
        </section>

        <section className="text-center pt-24 pb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 font-sf tracking-tight">Let's Create Something Worth Remembering.</h2>
          <SpecularButton onClick={() => navigate('/contact')} size="lg" followMouse={true}>
            Start a Project
          </SpecularButton>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Services;

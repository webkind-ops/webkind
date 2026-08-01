import React, { useState } from 'react';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';
import BorderGlow from '../components/BorderGlow';
import SpecularButton from '../components/SpecularButton';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message
    const text = `Hi WebKind!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.details}`;
    
    // 1. Open WhatsApp in a new tab
    window.open(`https://wa.me/917982652976?text=${text}`, '_blank');
    
    // 2. Trigger Mailto in the current window (bypasses popup blockers usually)
    window.location.href = `mailto:webkind.ops@gmail.com?subject=New Enquiry from ${formData.name}&body=${text}`;
  };

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
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        <section>
          <h1 className="text-5xl md:text-7xl font-bold font-sf mb-8">Let's Connect</h1>
          <p className="text-lg text-white/50 leading-relaxed font-sf">
            Send us a payload and we'll execute your vision.
          </p>
        </section>

        <section>
          <BorderGlow 
            backgroundColor="#0a0a0a" 
            glowColor="0 0 100" 
            colors={['#ffffff', '#ffffff', '#ffffff']}
            glowIntensity={0.5}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10 w-full relative z-20">
              {/* Name */}
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Your Name"
                />
                <label className="absolute left-0 top-3 text-white/50 text-xl transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white peer-valid:-top-5 peer-valid:text-sm peer-valid:text-white/50 pointer-events-none">
                  What's your name?
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent"
                  placeholder="Your Email"
                />
                <label className="absolute left-0 top-3 text-white/50 text-xl transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white peer-valid:-top-5 peer-valid:text-sm peer-valid:text-white/50 pointer-events-none">
                  What's your email address?
                </label>
              </div>

              {/* Details */}
              <div className="relative pt-2">
                <textarea 
                  name="details"
                  required
                  value={formData.details}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white outline-none focus:border-white transition-colors peer placeholder-transparent resize-none"
                  placeholder="Tell us about your project"
                ></textarea>
                <label className="absolute left-0 top-5 text-white/50 text-xl transition-all peer-focus:-top-3 peer-focus:text-sm peer-focus:text-white peer-valid:-top-3 peer-valid:text-sm peer-valid:text-white/50 pointer-events-none">
                  Tell us about your project...
                </label>
              </div>

              <div className="pt-6">
                <SpecularButton type="submit" size="lg" followMouse={true}>
                  Send Message
                </SpecularButton>
              </div>
            </form>
          </BorderGlow>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-white/10 font-sf">
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/50">Direct Email</h3>
            <a href="mailto:webkind.ops@gmail.com" className="text-white text-xl hover:text-[#e5c07b] transition-colors">webkind.ops@gmail.com</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white/50">WhatsApp</h3>
            <a href="https://wa.me/917982652976" target="_blank" rel="noreferrer" className="inline-block text-white/80 hover:text-[#25D366] transition-colors" aria-label="Chat on WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;

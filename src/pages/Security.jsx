import React from 'react';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';

const Security = () => {
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
      <div className="max-w-3xl mx-auto space-y-12 relative z-10 font-light text-white/80 leading-relaxed">
        
        <section>
          <h1 className="text-4xl md:text-6xl font-bold font-sf mb-12 text-white">Security</h1>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Our Commitment</h2>
          <p>
            Security is an important part of every website we build and every interaction we have with our clients.
          </p>
          <p>
            We follow modern development practices to help create websites that are reliable, secure, and maintainable.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Our Security Practices</h2>
          <p>Where appropriate, we implement security measures including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Secure HTTPS connections</li>
            <li>Reliable hosting platforms</li>
            <li>Secure development practices</li>
            <li>Regular dependency updates</li>
            <li>Performance optimization</li>
            <li>Protection against common web vulnerabilities</li>
            <li>Access control for administrative areas</li>
          </ul>
          <p>
            The exact security measures implemented may vary depending on the project's scope and requirements.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Client Responsibility</h2>
          <p>Clients are encouraged to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Use strong passwords</li>
            <li>Keep login credentials confidential</li>
            <li>Enable additional security features where available</li>
            <li>Notify us immediately if they suspect unauthorized access</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Reporting Security Issues</h2>
          <p>
            If you discover a potential security issue involving our website or services, please contact us as soon as possible. We appreciate responsible disclosure and will investigate reported issues promptly.
          </p>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Security;

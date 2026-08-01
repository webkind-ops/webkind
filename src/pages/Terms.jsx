import React from 'react';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';

const Terms = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold font-sf mb-6 text-white">Terms of Service</h1>
          <p className="text-white/50 mb-12"><strong>Last Updated:</strong> August 1, 2026</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Acceptance of Terms</h2>
          <p>
            By accessing or using the WebKind website, you agree to these Terms of Service. If you do not agree with these terms, please discontinue use of our website.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Services</h2>
          <p>
            WebKind provides website design, web development, branding support, UI and UX design, and related digital services.
          </p>
          <p>
            Project scope, timelines, pricing, and deliverables are agreed upon separately with each client before work begins.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all content on this website, including text, graphics, branding, logos, and design elements, is the property of WebKind and may not be copied, reproduced, or distributed without permission.
          </p>
          <p>
            Ownership of completed client work will be governed by the terms agreed upon for each individual project.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Client Responsibilities</h2>
          <p>
            Clients are responsible for providing accurate project information, required content, timely feedback, and necessary approvals throughout the project.
          </p>
          <p>
            Delays in communication or approvals may affect project timelines.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Limitation of Liability</h2>
          <p>
            While we strive to deliver high quality services, WebKind shall not be held responsible for indirect, incidental, or consequential damages resulting from the use of our website or services.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Third Party Services</h2>
          <p>
            Projects may include third party tools, hosting providers, APIs, plugins, or integrations. Their availability and performance are governed by their respective providers and terms.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Changes to Services</h2>
          <p>
            We reserve the right to modify, improve, suspend, or discontinue any part of our website or services when necessary.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Changes to These Terms</h2>
          <p>
            These Terms of Service may be updated periodically. Continued use of our website after changes are published constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Contact</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact us through the information provided on our Contact page.
          </p>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Terms;

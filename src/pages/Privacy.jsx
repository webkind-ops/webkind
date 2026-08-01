import React from 'react';
import Footer from '../components/Footer';
import SplashCursor from '../components/SplashCursor';

const Privacy = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold font-sf mb-6 text-white">Privacy Policy</h1>
          <p className="text-white/50 mb-12"><strong>Last Updated:</strong> August 1, 2026</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Introduction</h2>
          <p>
            At WebKind, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and the choices you have regarding your data.
          </p>
          <p>
            By using our website, you agree to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Information We Collect</h2>
          <p>We may collect information that you voluntarily provide, including:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Your name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business information</li>
            <li>Project requirements or messages submitted through our contact form</li>
          </ul>
          <p>We may also collect basic technical information such as:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Browser type</li>
            <li>Device information</li>
            <li>IP address</li>
            <li>Pages visited</li>
            <li>Website usage analytics</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Respond to enquiries</li>
            <li>Discuss project requirements</li>
            <li>Provide our services</li>
            <li>Improve our website and user experience</li>
            <li>Communicate important updates when necessary</li>
          </ul>
          <p>We do not sell or rent your personal information to third parties.</p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to improve performance, remember preferences, and understand how visitors use our website.
          </p>
          <p>
            You can manage or disable cookies through your browser settings.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Third Party Services</h2>
          <p>
            Our website may use trusted third party services such as analytics providers, hosting platforms, email services, or communication tools. These providers process information only as necessary to deliver their services.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Data Security</h2>
          <p>
            We take reasonable measures to protect your information from unauthorized access, misuse, or disclosure. While we strive to keep your data secure, no method of online transmission or storage can guarantee complete security.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Your Rights</h2>
          <p>You may contact us at any time to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Request access to your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information where applicable</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Any changes will be reflected on this page along with the updated date.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-sf text-white">Contact</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us through the contact details provided on our website.
          </p>
        </section>
        
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm font-sf pointer-events-auto relative z-10 border-t border-white/5">
      <div className="mb-4 md:mb-0">&copy; 2026 WebKind. All rights reserved.</div>
      <div className="flex gap-8">
        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        <Link to="/security" className="hover:text-white transition-colors">Security</Link>
        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
      </div>
    </footer>
  );
};

export default Footer;

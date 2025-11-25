import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Rocket, 
  Smartphone, 
  Zap, 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  MessageCircle, 
  Cpu,
  TrendingUp,
  Check, 
  Star   
} from 'lucide-react';

/**
 * WEBKIND.IN - Modern Digital Portfolio
 * Built with React, Tailwind CSS, Framer Motion, and Vanilla WebGL.
 * THEME: Professional Dark Mode (Slate/Black/Vibrant Aurora)
 */
const LOGO_SRC = "webkind white upscaled without bg.png";
// --- HELPER: Hex to RGB ---
const hexToRgb = hex => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

// --- SplitText Component (Framer Motion Implementation) ---
const SplitText = ({ text, className = "", delay = 0 }) => {
  const letters = text.split("");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * 0.001 }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <motion.div
      style={{ 
        display: "flex", 
        overflow: "hidden", 
        flexWrap: "wrap", 
        justifyContent: "center",
        paddingBottom: "0.15em" 
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} style={{ display: "block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- Pill Button Component (Fixed Text Visibility & Animation) ---
const PillButton = ({ 
  children, 
  onClick, 
  className = "", 
  baseColor = "bg-blue-600", 
  hoverColor = "bg-white", 
  textColor = "text-white", 
  hoverTextColor = "text-black"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-full px-8 py-4 font-bold text-lg group ${baseColor} ${className}`}
    >
      {/* Vertical Fill Background - Ensures full width coverage */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ 
          height: isHovered ? "100%" : 0,
        }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
        className={`absolute left-0 bottom-0 w-full ${hoverColor} pointer-events-none`}
        style={{ zIndex: 0 }}
      />

      {/* Sliding Text Container */}
      <div className="relative z-10 h-9 overflow-hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -36 : 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }} // Smoother text slide
          className="flex flex-col items-center"
        >
          <span className={`flex items-center justify-center gap-2 h-9 w-full whitespace-nowrap ${textColor}`}>
            {children}
          </span>
          <span className={`flex items-center justify-center gap-2 h-9 w-full whitespace-nowrap ${hoverTextColor}`}>
            {children}
          </span>
        </motion.div>
      </div>
    </button>
  );
};

// --- Aurora Background Component (Vanilla WebGL) ---

const Aurora = ({ 
  colorStops = ["#5227FF", "#7cff67", "#5227FF"], 
  amplitude = 1.0, 
  blend = 0.5, 
  speed = 0.5 
}) => {
  const canvasRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl2', { alpha: true, premultipliedAlpha: true, antialias: true });
    if (!gl) return; // WebGL2 required for this shader code style
    glRef.current = gl;

    const VERT = `#version 300 es
      in vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const FRAG = `#version 300 es
      precision highp float;

      uniform float uTime;
      uniform float uAmplitude;
      uniform vec3 uColorStops[3];
      uniform vec2 uResolution;
      uniform float uBlend;

      out vec4 fragColor;

      vec3 permute(vec3 x) {
        return mod(((x * 34.0) + 1.0) * x, 289.0);
      }

      float snoise(vec2 v){
        const vec4 C = vec4(
            0.211324865405187, 0.366025403784439,
            -0.577350269189626, 0.024390243902439
        );
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);

        vec3 p = permute(
            permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0)
        );

        vec3 m = max(
            0.5 - vec3(
                dot(x0, x0),
                dot(x12.xy, x12.xy),
                dot(x12.zw, x12.zw)
            ), 
            0.0
        );
        m = m * m;
        m = m * m;

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      struct ColorStop {
        vec3 color;
        float position;
      };

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution;
        
        ColorStop colors[3];
        colors[0] = ColorStop(uColorStops[0], 0.0);
        colors[1] = ColorStop(uColorStops[1], 0.5);
        colors[2] = ColorStop(uColorStops[2], 1.0);
        
        vec3 rampColor;
        
        // Manual loop unroll / hardcoded logic for color ramp to avoid struct issues in some GLSL versions
        int index = 0;
        float factor = uv.x;
        
        // Determine index
        if (colors[1].position <= factor) {
            index = 1;
        }
        
        vec3 currentColor = colors[index].color;
        vec3 nextColor = colors[index + 1].color;
        float range = colors[index + 1].position - colors[index].position;
        float lerpFactor = (factor - colors[index].position) / range;
        rampColor = mix(currentColor, nextColor, lerpFactor);
        
        float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
        height = exp(height);
        height = (uv.y * 2.0 - height + 0.2);
        float intensity = 0.6 * height;
        
        float midPoint = 0.20;
        float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);
        
        vec3 auroraColor = intensity * rampColor;
        
        fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
      }
    `;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = createShader(gl, gl.VERTEX_SHADER, VERT);
    const fragShader = createShader(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
       console.error('Program link error:', gl.getProgramInfoLog(program));
       return;
    }
    programRef.current = program;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const render = (time) => {
      if (!canvas || !gl || !programRef.current) return;
      
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      }

      gl.useProgram(programRef.current);
      const uLoc = (name) => gl.getUniformLocation(programRef.current, name);

      gl.uniform1f(uLoc('uTime'), time * 0.001 * speed);
      gl.uniform1f(uLoc('uAmplitude'), amplitude);
      gl.uniform1f(uLoc('uBlend'), blend);
      gl.uniform2f(uLoc('uResolution'), canvas.width, canvas.height);
      
      const rgbStops = colorStops.map(hexToRgb).flat();
      gl.uniform3fv(uLoc('uColorStops'), new Float32Array(rgbStops));

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      // WebGL2 cleanup
      if (gl) {
         // Basic cleanup, extensive not needed for simple effect in react component unmount
      }
    };
  }, [colorStops, amplitude, blend, speed]);

  return (
    <div className="w-full h-full absolute inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};


// --- Portfolio Data & Logic ---

const SERVICES = [
  {
    title: "Custom Development",
    desc: "We build fast, secure, fully customized websites crafted specifically for your business. Everything is designed from scratch for a clean look, smooth performance, and a strong brand presence.",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "UI/UX Design",
    desc: "We create modern, minimal and user-friendly designs that make your business easy to navigate and visually premium. Your customers get a smooth, enjoyable experience from the first click.",
    icon: <Palette className="w-8 h-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Helping Businesses Grow",
    desc: "We help businesses grow by improving their digital presence, increasing online visibility and building trust. Your website becomes a powerful tool to attract more customers and strengthen your brand.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-500"
  }
];

const PRICING_PLANS = [
  {
    title: "Static Website",
    price: "₹19,999",
    desc: "A clean, fast and professional static website for small businesses who need a solid digital presence without complex features.",
    features: [
      "Up to 5 pages (Home, About, Services/Menu, Gallery, Contact)",
      "Custom UI/UX design",
      "Fully responsive layout",
      "WhatsApp integration",
      "Google Maps embed",
      "10 days support"
    ],
    color: "from-blue-500 to-cyan-500",
    isPopular: false
  },
  {
    title: "Advanced Front-end",
    price: "₹29,999",
    desc: "A more advanced front-end website with dynamic sections, smooth animations and better interactivity.",
    features: [
      "Up to 10 pages",
      "Advanced UI/UX design",
      "Dynamic sections (gallery, menu, offers, updates, projects etc.)",
      "Smooth animations & interactive elements",
      "WhatsApp button + inquiry form",
      "15 days support"
    ],
    color: "from-purple-500 to-pink-500",
    isPopular: true
  }
];

// New Images List
const MOCKUP_IMAGES_ROW1 = [
  'cricket.jpg',
  'salon 1.jpg',
  'Real estate 1.jpg',
  'aavya1.jpg',
];

const MOCKUP_IMAGES_ROW2 = [
  'salon 2.jpg',
  'real estate 2.jpg',
  'aavya 2.jpg',
  'salon 3.jpg'
];

// --- Reusable Components ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 md:mb-20 text-center">
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
    >
      {children}
    </motion.h2>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Work', id: 'work' },
  ];

  return (
    // Fixed height (h-16 on mobile, h-20 on md+) so navbar won't grow.
    // overflow-visible allows the logo to overflow visually without changing layout.
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 shadow-sm' : 'bg-transparent'} h-16 md:h-20 overflow-visible`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Logo */}
        <div 
          onClick={() => scrollTo('hero')} 
          className="cursor-pointer flex items-center h-full"
          style={{ overflow: 'visible' }}
        >
          {/* NOTE: big logo sizes won't change navbar height because nav has fixed h-* above */}
          <img
            src={LOGO_SRC}
            alt="Webkind.in"
            // Increase only the image size. It can overflow the nav area but nav height stays constant.
            // Example: change h-10 -> h-14 / h-16 / h-20 without touching nav's h-16/md:h-20
            className="h-36 md:h-40 lg:h-44 w-auto object-contain pointer-events-auto"
            style={{ display: 'block' }}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (unchanged) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-slate-900 border-b border-slate-800 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => scrollTo(link.id)}
                  className="text-lg font-medium text-slate-300 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => scrollTo('contact')}
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-900/20"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


// --- Mockup Marquee Component ---

const MockupMarquee = () => {
  return (
    <section id="work" className="py-24 bg-transparent overflow-hidden">
      <div className="relative">
        {/* Row 1 - Left */}
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 mb-8 w-max pl-4"
        >
          {[...MOCKUP_IMAGES_ROW1, ...MOCKUP_IMAGES_ROW1, ...MOCKUP_IMAGES_ROW1].map((src, index) => (
            <div key={index} className="w-[450px] md:w-[600px] aspect-video relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 flex-shrink-0 group bg-slate-900">
              <img 
                src={src} 
                alt={`Project Mockup ${index}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/1e293b/ffffff?text=${encodeURIComponent(src.replace('.jpg',''))}`;
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>

        {/* Row 2 - Right */}
        <motion.div 
          initial={{ x: "-50%" }}
          animate={{ x: 0 }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 w-max pl-4"
        >
          {[...MOCKUP_IMAGES_ROW2, ...MOCKUP_IMAGES_ROW2, ...MOCKUP_IMAGES_ROW2].map((src, index) => (
            <div key={index} className="w-[450px] md:w-[600px] aspect-video relative rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-slate-800 flex-shrink-0 group bg-slate-900">
              <img 
                src={src} 
                alt={`Project Mockup ${index}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.target.src = `https://placehold.co/600x400/1e293b/ffffff?text=${encodeURIComponent(src.replace('.jpg',''))}`;
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>
          ))}
        </motion.div>

        {/* Vignette for Fade Effect - Dark */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};


// --- Main Application Component ---

export default function App() {
  // --- Custom Hook for WhatsApp Button Hover State ---
  const [isWaHovered, setIsWaHovered] = useState(false);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden relative">
      <Navbar />

      {/* GLOBAL FIXED WEBGL BACKGROUND - Aurora with updated colors */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60">
        <Aurora 
          colorStops={['#5227FF', '#7cff67', '#5227FF']} 
          blend={0.5} 
          amplitude={1.0} 
          speed={0.5} 
        />
      </div>

      {/* MAIN SCROLLABLE CONTENT (Z-10) */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden text-center">
          <div className="container mx-auto px-6 relative z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="pointer-events-auto max-w-4xl mx-auto flex flex-col items-center relative"
            >
              {/* Reduced leading-tight to improve spacing and added pb-2 to prevent clipping */}
              <div className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                <SplitText text="Crafting" className="block" delay={0} />
                {/* Added pb-2 to ensure descenders like 'g' and 'p' are not cut off */}
                <SplitText text="Digital Legacies." className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2" delay={300} />
              </div>
              <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                We build high-conversion websites designed to make your brand impossible to ignore in the modern digital era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary Button - Black Background, White Hover Fill, Text becomes Black */}
                <PillButton 
                  onClick={() => document.getElementById('work').scrollIntoView({behavior: 'smooth'})}
                  baseColor="bg-black border border-white/20"
                  hoverColor="bg-white"
                  textColor="text-white"
                  hoverTextColor="text-black"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5 ml-1" />
                </PillButton>

                {/* Secondary Button - Black Background, White Hover Fill, Text becomes Black */}
                <PillButton 
                  onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                  baseColor="bg-black border border-white/20"
                  hoverColor="bg-white"
                  textColor="text-white"
                  hoverTextColor="text-black"
                >
                  Start a Project
                </PillButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* NEW MOCKUPS SECTION */}
        <MockupMarquee />

        {/* OUR AIM SECTION - UPDATED */}
        <section id="aim" className="py-32 relative flex items-center justify-center overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Not Just Websites.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Ecosystems.</span>
            </motion.h2>
          </div>
        </section>

        {/* SERVICES SECTION - UPDATED WITH ANIMATED ICONS */}
        <section id="services" className="py-24 bg-transparent">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="What We Do">Our Expertise</SectionHeading>
            
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {SERVICES.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col md:flex-row gap-6 items-start"
                >
                  {/* Gradient Line at Top */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  
                  <div className="p-4 rounded-2xl bg-white/5 w-fit text-white border border-white/5 shrink-0 relative">
                    {/* Subtle glow behind icon */}
                    <motion.div 
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 bg-gradient-to-br ${service.color} transition-opacity duration-500`}
                    />
                    
                    {/* Animated Icon Container */}
                    <motion.div
                      animate={
                        index === 0 ? { rotateY: [0, 360] } : // Code Icon: Full rotation on Y axis
                        index === 1 ? { rotate: [0, 15, -15, 0] } : // Palette Icon: Rocking/Tilting
                        { y: [0, -4, 0], x: [0, 2, 0] } // TrendingUp Icon: Floating upwards and right
                      }
                      transition={{
                        duration: index === 0 ? 5 : index === 1 ? 4 : 3,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-slate-300 text-base leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="py-24 bg-slate-900/40 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Investment">Transparent Pricing</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {PRICING_PLANS.map((plan, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full ${plan.isPopular ? 'shadow-blue-900/20 shadow-2xl' : ''}`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">
                      Recommended
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.title}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}>
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mt-4 leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="h-px w-full bg-white/10 mb-6" />

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                        <Check className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all ${plan.isPopular ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20 border border-white/10'}`}
                  >
                    Choose Plan
                  </button>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-slate-500 text-xs italic">* Note: Excluding the cost of domain buying and hosting</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION - REVISED WITH BLACK CARD & ANIMATED BUTTON */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-black border border-white/10 rounded-[2rem] p-12 md:p-16 shadow-2xl relative overflow-hidden"
                >
                    {/* Glow effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Let's Create Something <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Extraordinary.</span>
                    </h2>
                    
                    <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                        Ready to transform your digital presence? Chat with us directly on WhatsApp to discuss your project.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        {/* ANIMATED WHATSAPP BUTTON */}
                        <a 
                            href="https://wa.me/7982652976" 
                            target="_blank" 
                            rel="noreferrer"
                            className="group relative inline-flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-900/30 overflow-hidden"
                            onMouseEnter={() => setIsWaHovered(true)}
                            onMouseLeave={() => setIsWaHovered(false)}
                        >
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-10 h-10 bg-white rounded-full p-1 flex items-center justify-center shadow-sm shrink-0">
                                   <img 
                                     src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.jpg" 
                                     alt="WhatsApp" 
                                     className="w-full h-full object-cover rounded-full" 
                                   />
                                </div>
                                
                                {/* Sliding Text Container */}
                                <div className="h-8 overflow-hidden w-48">
                                  <motion.div
                                    initial={{ y: 0 }}
                                    animate={{ y: isWaHovered ? -32 : 0 }}
                                    transition={{ type: "spring", stiffness: 120, damping: 15 }}
                                    className="flex flex-col"
                                  >
                                     <span className="flex items-center justify-center h-8 w-full">Chat on WhatsApp</span>
                                     <span className="flex items-center justify-center h-8 w-full">Chat on WhatsApp</span>
                                  </motion.div>
                                </div>
                            </div>
                            
                            {/* Shine effect */}
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                        </a>

                        {/* Removed Email line */}
                    </div>
                </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12 relative z-10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
             {/* Footer Logo Image */}
            <div className="flex items-center">
               <img 
  src={LOGO_SRC} 
  alt="Webkind.in" 
  className="h-36 md:h-40 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
/>

            </div>
            
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Webkind.in. All rights reserved.
            </div>
            <div className="flex gap-6">
              {/* Removed Social Links */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
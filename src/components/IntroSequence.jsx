import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroSequence = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only play once per session
    const hasPlayed = sessionStorage.getItem('introPlayed');
    
    if (hasPlayed) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Play sequence and then hide
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('introPlayed', 'true');
      setTimeout(onComplete, 1000); // Wait for fade out animation before triggering complete
    }, 3000); // 3 seconds total duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Minimalist Logo/Brand */}
            <h1 
              className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Helvetica, sans-serif' }}
            >
              WebKind
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="text-lg md:text-xl text-white/50 tracking-wide font-light uppercase"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Helvetica, sans-serif' }}
            >
              Premium Digital Experiences
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSequence;

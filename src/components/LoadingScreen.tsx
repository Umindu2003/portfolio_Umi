import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5F5F7]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
      onAnimationComplete={onLoadingComplete}
    >
      <div className="flex flex-col items-center">
        {/* Logo Animation - Using CSS animation for smooth, non-blocking performance */}
        <div className="relative">
          {/* Glowing ring effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-28 h-28 rounded-full border-2 border-[#0071E3]/30"
              style={{
                animation: 'ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              }}
            />
          </div>
          
          {/* Logo with CSS rotation animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <img
              src="/MainLogo.png"
              alt="Logo"
              className="w-24 h-24 object-contain relative z-10"
              style={{
                animation: 'float 3s ease-in-out infinite',
              }}
            />
          </motion.div>
        </div>

        {/* Loading Bar */}
        <motion.div
          className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <div
            className="h-full bg-gradient-to-r from-[#0071E3] to-[#00C7FF] rounded-full"
            style={{
              animation: 'loading-bar 2s ease-in-out forwards',
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="mt-4 text-sm text-[#4A4A4A] font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
        >
          <span
            style={{
              animation: 'pulse-opacity 1.5s ease-in-out infinite',
            }}
          >
            Loading...
          </span>
        </motion.p>
      </div>

      {/* CSS Keyframe Animations - More reliable than JS animations during load */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          75%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes loading-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes pulse-opacity {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </motion.div>
  );
}

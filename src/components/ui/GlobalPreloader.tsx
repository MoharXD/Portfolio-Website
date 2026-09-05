import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const GlobalPreloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      // Unlock scroll after the fade-out animation completes (0.8s)
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 800);
      return () => clearTimeout(timer);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  useEffect(() => {
    let isFullyLoaded = false;
    let images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const checkFullyLoaded = () => {
      if (loadedCount >= images.length) {
        isFullyLoaded = true;
      }
    };

    const handleImageLoad = () => {
      loadedCount++;
      checkFullyLoaded();
    };

    // Delay slightly to let React mount all images into the DOM
    const initTrackingTimer = setTimeout(() => {
      images = Array.from(document.images);
      if (images.length === 0) {
        isFullyLoaded = true;
      } else {
        images.forEach((img) => {
          if (img.complete) {
            loadedCount++;
          } else {
            img.addEventListener('load', handleImageLoad);
            img.addEventListener('error', handleImageLoad); // count errors so it doesn't hang
          }
        });
        checkFullyLoaded();
      }
    }, 100);

    let currentProgress = 0;
    const duration = 2000; // 2 seconds minimum loading time
    const interval = 20; 
    const step = 100 / (duration / interval);
    
    let timer: ReturnType<typeof setInterval>;

    const finishLoading = () => {
      (window as unknown as { isAppLoaded?: boolean }).isAppLoaded = true;
      window.dispatchEvent(new Event('appLoaded'));
      setIsLoading(false);
    };

    const runSimulatedLoader = () => {
      timer = setInterval(() => {
        // Cap at 90% if the page is still downloading assets
        const target = isFullyLoaded ? 100 : 90;
        
        if (currentProgress < target) {
          currentProgress += step;
          const jitter = Math.random() * 2;
          currentProgress += jitter;
        }
        
        if (currentProgress >= 100 && isFullyLoaded) {
          currentProgress = 100;
          setProgress(100);
          clearInterval(timer);
          setTimeout(finishLoading, 400);
        } else {
          setProgress(Math.min(currentProgress, 99.9));
        }
      }, interval);
    };

    const initTimer = setTimeout(runSimulatedLoader, 50);

    const fallbackTimer = setTimeout(() => {
      isFullyLoaded = true;
    }, 10000);

    return () => {
      document.body.style.overflow = '';
      clearInterval(timer);
      clearTimeout(initTimer);
      clearTimeout(fallbackTimer);
      clearTimeout(initTrackingTimer);
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[999999] bg-[#0C0C0C] flex flex-col items-center justify-center pointer-events-auto"
        >
          {/* Ultra Premium Text-Fill Preloader */}
          <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
            
            <div className="flex flex-col items-center justify-center gap-6">
              
              {/* Text Fill Loading Effect */}
              <div className="relative text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#D7E2EA]/10 select-none">
                MOHAR
                
                {/* The "Filled" Text Overlay */}
                <motion.div 
                  className="absolute top-0 left-0 overflow-hidden text-[#D7E2EA] whitespace-nowrap drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  MOHAR
                </motion.div>
              </div>

              {/* Minimal Status Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <div className="flex items-center gap-3">
                  <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B600A8] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-[#B600A8] shadow-[0_0_8px_#B600A8]"></span>
                  </span>
                  <span className="text-[#D7E2EA]/70 font-medium tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] uppercase min-w-[180px] md:min-w-[220px]">
                    {progress < 15 ? "Bypassing CDN cache..." : 
                     progress < 30 ? "Bootstrapping runtime..." : 
                     progress < 45 ? "Injecting spring physics..." : 
                     progress < 60 ? "Mounting virtual DOM..." : 
                     progress < 75 ? "Allocating VRAM for 3D..." : 
                     progress < 95 ? "Compiling GSAP timelines..." : 
                     "System ready."}
                  </span>
                </div>
                
                <span className="text-[#D7E2EA] font-light tracking-widest text-[10px] md:text-xs font-mono mr-4">
                  {time.toLocaleTimeString('en-US', { hour12: false })}
                </span>
                <span className="text-[#D7E2EA] font-light tracking-widest text-[10px] md:text-xs w-8 text-right font-mono">
                  {Math.round(progress)}%
                </span>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

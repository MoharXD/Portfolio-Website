import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, TypingHeading, SquishBounce, BorderGlow, FlickeringGridQR, Dock, AIOrbFace } from '../ui';

export const ContactSection = () => {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");
    
    const formData = new FormData(e.currentTarget);
    // Web3Forms Access Key
    formData.append("access_key", "384293b2-79da-405d-9100-04a4fc2eb945");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("IDLE"), 5000);
      } else {
        setStatus("ERROR");
        setTimeout(() => setStatus("IDLE"), 5000);
      }
    } catch {
      setStatus("ERROR");
      setTimeout(() => setStatus("IDLE"), 5000);
    }
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 pt-24 pb-16 sm:pt-32 sm:pb-20 bg-[#121316] relative z-30 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] border-t-2 border-[#D7E2EA]/10 -mt-10 sm:-mt-12 md:-mt-14 overflow-hidden">
      
      <div className="px-5 sm:px-8 md:px-10 mb-16 sm:mb-20 md:mb-24 relative z-10 w-full flex flex-col items-center justify-center max-w-[1400px] mx-auto text-center mt-4 lg:mt-8">
        <FadeIn y={40} className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <div className="relative w-[100px] sm:w-[120px] md:w-[160px] lg:w-[180px] xl:w-[200px] aspect-square z-0 shrink-0 hidden sm:block">
            <SquishBounce>
              <motion.div 
                animate={{ 
                  y: [0, -20, 0], 
                  rotateZ: [0, 8, -4, 0],
                  rotateY: [0, 15, -15, 0]
                }} 
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                style={{ perspective: 1000 }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}img/glass_phone.png`} 
                  alt="Glass Phone" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(215,226,234,0.2)]" 
                />
              </motion.div>
            </SquishBounce>
          </div>
          <TypingHeading
            text="LET'S TALK"
            className="hero-heading font-black uppercase text-center sm:text-left mb-0 leading-none tracking-normal" 
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          />

        </FadeIn>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full max-w-[1400px] mt-0 sm:mt-4 relative z-10 px-0 sm:px-4">
        
        {/* Left Column: Icons and QR */}
        <div className="flex flex-col items-center w-full h-full pt-4">
          
          <FadeIn delay={0.1} y={20} className="w-full mb-12 lg:mb-16">
            <Dock>
              {/* Email Icon */}
              <a href="mailto:work.mohargorai@gmail.com" title="Email" className="no-cursor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/mohargorai" target="_blank" rel="noreferrer" title="GitHub" className="no-cursor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/mohar-gorai-518123338/" target="_blank" rel="noreferrer" title="LinkedIn" className="no-cursor">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </Dock>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="w-full flex-grow flex flex-col justify-start items-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[400px]">
              <div className="absolute inset-0 bg-[#D7E2EA]/5 blur-[60px] rounded-full group-hover:bg-[#D7E2EA]/10 transition-colors duration-700 pointer-events-none"></div>
              <FlickeringGridQR 
                text={`BEGIN:VCARD\nVERSION:3.0\nN:Gorai;Mohar;;;\nFN:Mohar Gorai\nTITLE:Student\nEMAIL:work.mohargorai@gmail.com\nURL:https://www.linkedin.com/in/mohar-gorai-518123338/\nURL:https://github.com/mohargorai\nEND:VCARD`}
                color="#D7E2EA"
                size={340}
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-max opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-[10px] sm:text-[12px] font-bold">Scan to save Contact</span>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Right Column: Contact Form */}
        <div className="flex flex-col w-full">
          <FadeIn delay={0.6} y={20} className="w-full h-full">
            <form onSubmit={handleSubmit} className="w-full h-full">
              <BorderGlow
                edgeSensitivity={30}
                glowColor="205 27 88"
                backgroundColor="#0C0C0C"
                borderRadius={40}
                glowRadius={40}
                glowIntensity={1}
                coneSpread={25}
                animated={false}
                colors={['#D7E2EA', '#ffffff', '#D7E2EA']}
                className="w-full h-full shadow-xl group"
              >
                <div className="flex flex-col w-full h-full p-6 sm:p-10 relative">
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D7E2EA]/5 rounded-full blur-3xl z-0 pointer-events-none group-focus-within:bg-[#D7E2EA]/10 transition-colors duration-700"></div>
                  {/* AI Assistant - Outside blurred container to stay sharp */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-10 z-30 pointer-events-none">
                    <AIOrbFace 
                      size={64} 
                      state={status === "IDLE" ? "idle" : status === "SUBMITTING" ? "thinking" : status === "SUCCESS" ? "done" : "error"} 
                      colors={{ body: "#D7E2EA", bodyEdge: "#0C0C0C", feature: "#0C0C0C" }} 
                    />
                  </div>
                  
                  {/* Form Container - ALWAYS rendered to maintain height */}
                  <motion.div 
                    animate={{ 
                      opacity: status === "SUCCESS" ? 0 : 1, 
                      filter: status === "SUCCESS" ? "blur(10px)" : "blur(0px)",
                      scale: status === "SUCCESS" ? 0.95 : 1
                    }}
                    transition={{ duration: 0.4 }}
                    className={`flex flex-col gap-6 w-full h-full relative z-10 ${status === "SUCCESS" ? "pointer-events-none select-none" : ""}`}
                  >
                    <h3 className="text-[#D7E2EA] font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-widest relative z-10 mb-4 pr-16">Send a Message</h3>
                    
                    <div className="relative z-10">
                      <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Name</label>
                      <input type="text" name="name" required className="w-full bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors" placeholder="Mohar Gorai" />
                    </div>

                    <div className="relative z-10">
                      <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Email</label>
                      <input type="email" name="email" required className="w-full bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors" placeholder="work.mohargorai@gmail.com" />
                    </div>

                    <div className="relative z-10 flex-grow">
                      <label className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-bold mb-3 block">Your Message</label>
                      <textarea name="message" required rows={5} className="w-full h-[calc(100%-2rem)] bg-[#121316]/60 border-2 border-[#D7E2EA]/20 rounded-2xl px-6 py-4 text-[#D7E2EA] font-medium focus:outline-none focus:border-[#D7E2EA]/80 transition-colors resize-none" placeholder="Hi!!"></textarea>
                    </div>

                    {/* Web3Forms Honeypot - Invisible to humans, catches bots */}
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <button 
                      type="submit" 
                      disabled={status === "SUBMITTING"} 
                      className={`relative z-10 w-full rounded-2xl border-2 font-black uppercase tracking-widest px-8 py-5 text-sm sm:text-base transition-all duration-500 overflow-hidden mt-4 flex items-center justify-center gap-3 ${
                        status === "SUBMITTING"
                          ? "bg-transparent text-[#D7E2EA] border-[#D7E2EA]/20 opacity-80 cursor-wait"
                          : status === "ERROR"
                          ? "bg-red-500/10 text-red-400 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                          : "bg-[#D7E2EA] text-[#0C0C0C] border-[#D7E2EA] hover:bg-transparent hover:text-[#D7E2EA] shadow-[0_0_20px_rgba(215,226,234,0.2)] hover:shadow-[0_0_30px_rgba(215,226,234,0.4)]"
                      }`}
                    >
                      {status === "IDLE" && "Send Message"}
                      {status === "SUBMITTING" && (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Delivering...
                        </>
                      )}
                      {status === "ERROR" && "Delivery Failed"}
                    </button>
                  </motion.div>

                  {/* Success State Overlay */}
                  <AnimatePresence>
                    {status === "SUCCESS" && (
                      <motion.div 
                        key="success-state"
                        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-transparent backdrop-blur-sm rounded-[40px] pointer-events-none"
                      >
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 1, 0, 1] }}
                          transition={{ duration: 0.4, times: [0, 0.2, 0.4, 1] }}
                        >
                          <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_30px_rgba(215,226,234,0.6)]">
                            {/* Grid background effect */}
                            <path d="M10 20h80M10 40h80M10 60h80M10 80h80M20 10v80M40 10v80M60 10v80M80 10v80" stroke="#D7E2EA" strokeWidth="1" strokeOpacity="0.1" />
                            
                            <motion.path 
                              d="M 25 55 L 45 75 L 80 30" 
                              stroke="#D7E2EA" 
                              strokeWidth="8" 
                              strokeLinecap="square"
                              strokeLinejoin="miter"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            />
                            
                            {/* Glitch squares */}
                            <motion.rect x="80" y="25" width="8" height="8" fill="#D7E2EA" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0, 0.7] }} transition={{ duration: 0.4, delay: 0.8 }} />
                            <motion.rect x="15" y="60" width="12" height="6" fill="#D7E2EA" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0, 0.9] }} transition={{ duration: 0.3, delay: 0.6 }} />
                            <motion.rect x="45" y="85" width="6" height="4" fill="#D7E2EA" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0, 0.5] }} transition={{ duration: 0.2, delay: 0.9 }} />
                          </svg>
                        </motion.div>
                        
                        <motion.h3 
                          className="text-[#D7E2EA] font-black text-xl sm:text-2xl uppercase tracking-[0.3em] mt-10 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          Data Transmitted
                        </motion.h3>
                        <motion.p
                           className="text-[#D7E2EA]/40 font-bold text-[10px] sm:text-xs uppercase tracking-[0.4em] mt-4"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{ delay: 0.8 }}
                        >
                          CONNECTION SECURE
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BorderGlow>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
